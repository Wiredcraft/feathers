'use strict';

var gulp = require('gulp');
var wiredep  = require('wiredep').stream;
var config   = require('config');
var cached   = require('gulp-cached');
var es       = require('event-stream');
var seq      = require('run-sequence');
var lazypipe = require('lazypipe');


console.log('config', config)

var mainBowerFiles = require('main-bower-files');

// Load plugins
var $ = require('gulp-load-plugins')();

var LIVERELOAD_PORT = 35729;

// Paths
var vendor = [
  'vendor/angular/angular.js',
  'vendor/angular-ui-router/release/angular-ui-router.js'
]

// Sass
gulp.task('sass', function() {
  return gulp.src('src/assets/scss/style.scss')
    .pipe(cached('sass'))
    .pipe($.sass({
      includePaths: require('node-bourbon').includePaths
    }))
    .pipe(wiredep({
      directory: 'vendor'
    }))
    .pipe(gulp.dest('build/assets/css'))
    .pipe($.size());
});

// JS
gulp.task('js', function() {
  return gulp.src('src/app/**/*.js')
    .pipe(cached('js'))
    .pipe($.jshint('.jshintrc'))
    .pipe($.jshint.reporter('default'))
    .pipe(gulp.dest('build/scripts'))
    .pipe($.size());
});

// Vendor
gulp.task('vendorjs', function() {
  return gulp.src('vendor/**/*.js')
    .pipe(gulp.dest('build/vendor'))
    .pipe($.size());
});

// Vendor css
gulp.task('vendorcss', function() {
  return gulp.src('vendor/**/*.css')
    .pipe(gulp.dest('build/vendor'))
    .pipe($.size());
});

// CoffeeScript
gulp.task('coffee', function() {
  return gulp.src('src/app/**/*.coffee')
    .pipe(cached('coffee'))
    .pipe($.coffee({bare: true}))
    .on('error', function(e) {
      $.util.log(e.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('build/app'))
    .pipe($.size());
});

// Clean
gulp.task('clean', function() {
  return gulp.src(['dist/*', 'build/*'], {read: false})
    .pipe($.clean());
});

// Transpile
gulp.task('transpile', ['sass', 'coffee', 'js', 'vendorjs', 'vendorcss']);

// jade -> html
var jadeify = lazypipe()
  .pipe($.jade, {
    pretty: true
  });

// Inject global js vars
var injectGlobals = lazypipe()
  .pipe($.frep, [{
    pattern: '@@GLOBALS',
    replacement: JSON.stringify({
      VERSION: config.VERSION
    })
  }]);

// Jade to html
gulp.task('base-tmpl', function() {
  return gulp.src('src/index.jade')
    .pipe($.changed('build'))
    .pipe(jadeify())
    .pipe(injectGlobals())
    .pipe($.inject(gulp.src(vendor, {
      read: false
    }), {
      ignorePath: ['src'],
      starttag: '<!-- bower:{{ext}}-->',
      endtag: '<!-- endbower-->'
    }))
    .pipe($.inject(gulp.src([
      'build/app/**/*.js',
      'build/assets/**/*.css'
      ], {
        read: false
      }), {
      ignorePath: ['build'],
      starttag: '<!-- inject:{{ext}}-->',
      endtag: '<!-- endinject-->'
    }))
    .pipe(gulp.dest('build'))
    .pipe($.size());
});

// Jade to JS
gulp.task('js-tmpl', function() {
  return gulp.src('src/app/**/*.jade')
    .pipe(cached('js-tmpl'))
    .pipe(jadeify())
    .pipe($.ngHtml2js({
      moduleName: 'tpl'
    }))
    .pipe(gulp.dest('build/app'));
});

// useref
gulp.task('useref', function() {
  $.util.log('running useref');
  var jsFilter = $.filter('build/**/*.js');
  var cssFilter = $.filter('build/**/*.css');

  return es.merge(
    gulp.src('build/index.html', {base: 'build'})
      .pipe($.useref.assets())
      .pipe(jsFilter)
      .pipe($.uglify())
      .pipe(jsFilter.restore())
      .pipe(cssFilter)
      .pipe($.minifyCss())
      .pipe(cssFilter.restore())
      .pipe($.useref.restore())
      .pipe($.useref())
  )
  .pipe(gulp.dest('build'))
  .pipe($.if(/^((?!(index\.html)).)*$/, $.rev()))
  .pipe(gulp.dest('dist'))
  .pipe($.rev.manifest())
  .pipe(gulp.dest('build'))
  .pipe($.size());
});

// Update file version refs
gulp.task('replace', function() {
  var manifest = require('./build/rev-manifest');

  manifest['@@VERSION'] = config.VERSION

  var patters = []
  for (var k in manifest) {
    patters.push({
      pattern: k,
      replacement: manifest[k]
    });
  };

  return gulp.src([
    'dist/*.html',
    'dist/styles/**/*.css',
    'dist/scripts/main*.js'
  ], {base: 'dist'})
    .pipe($.frep(patters))
    .pipe(gulp.dest('dist'))
    .pipe($.size());
});

// Watch
gulp.task('watch', function() {
  var lr = require('tiny-lr')();

  lr.listen(LIVERELOAD_PORT);

  gulp.watch([
    'build/*.html',
    'build/assets/**/*.css',
    'build/app/**/*.js',
    'build/assets/images/**/*.*'
  ], function(event) {
    gulp.src(event.path, {read: false})
      .pipe($.livereload(lr));
  });

  // Wathch .scss files
  gulp.watch('src/assets/scss/**/*.scss', ['sass']);

  // Watch .js files
  gulp.watch('src/app/**/*.js', ['js']);

  // Watch .coffee files
  gulp.watch('src/app/**/*.coffee', ['coffee']);

  // Watch .jade files
  gulp.watch('src/index.jade', ['base-tmpl']);
  gulp.watch('src/app/**/*.jade', ['reload-js-tmpl']);

  // Watch vendor files
  gulp.watch('vendor/*', ['bowerjs', 'bowercss']);
})

// Build tasks for development
gulp.task('build-dev', function(cb) {
  seq(
    'clean',
    'transpile',
    'js-tmpl',
    'base-tmpl',
    cb
  );
});

// Dev
gulp.task('dev', function(cb) {
  seq('build-dev', 'watch', cb);
});

gulp.task('reload-js-tmpl', function(cb) {
  seq('js-tmpl', 'base-tmpl', cb);
});

gulp.task('build-prod', function(cb) {
  seq(
    'build-dev',
    'useref',
    'replace',
    cb
  );
});

// E2E Protractor tests
gulp.task('protractor', function() {
  require('coffee-script/register');
  return gulp.src('test/e2e/**/*.coffee')
    .pipe($.protractor.protractor({
      configFile: 'protractor.conf.js'
    }))
    .on('error', function(e) {
      $.util.log(e.toString());
      this.emit('end');
    });
});

gulp.task('test:e2e', ['protractor'], function() {
  gulp.watch('test/e2e/**/*.coffee', ['protractor']);
});