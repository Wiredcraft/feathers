/* jshint asi: true, curly: false */
'use strict';

var metalsmith = require('metalsmith'),
    sass = require('metalsmith-sass'),
    markdown = require('metalsmith-markdown'),
    templates = require('metalsmith-templates'),
    metadata = require('metalsmith-metadata'),
    permalinks = require('metalsmith-permalinks'),
    htmlminifier = require('metalsmith-html-minifier')

metalsmith(__dirname)
  .source('./src')
  .destination('./build')
  .use(sass({
    includePaths: require('node-bourbon').includePaths,
    outputStyle: 'compressed',
    outputDir: 'css'
  }))
  .use(metadata({
    menu: 'menu.json'
  }))
  .use(permalinks({
    pattern: ':title'
  }))
  .use(markdown({
    /* Enable github-flavored-markdown */
    gfm: true,
    tables: true
  }))
  .use(templates('handlebars'))
  .use(htmlminifier({
    removeComments: true,
    collapseWhitespace: true,
    collapseBooleanAttributes: true,
    removeEmptyAttributes: true
  }))
  .build()

