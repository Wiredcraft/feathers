angular.module('feathers', ['ui.router', 'app.Home', 'app.Login', 'tpl']).config(function($stateProvider, $urlRouterProvider, $locationProvider, $sceProvider, $httpProvider) {
  $urlRouterProvider.otherwise('/404');
  return $stateProvider.state('index', {
    url: '/',
    templateUrl: 'index.html',
    controller: 'IndexCtrl'
  }).state('404', {
    url: '/404',
    templateUrl: '404.html'
  });
}).controller('MainCtrl', function($rootScope, $scope, $location, $state, $stateParams, $timeout) {
  return $rootScope.refresh = function() {
    return $state.transitionTo($state.current, $stateParams, {
      reload: true,
      inherit: false,
      notify: true
    });
  };
}).controller('IndexCtrl', function($scope) {
  return console.log('index page');
});

angular.module('app.Home', ['ui.router']).config(function($stateProvider) {
  return $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'home/home.tpl.html',
    controller: 'HomeCtrl'
  });
}).controller('HomeCtrl', function($scope) {
  return $scope.user = {
    name: 'feathers'
  };
});

(function(module) {
try {
  module = angular.module('tpl');
} catch (e) {
  module = angular.module('tpl', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('home/home.tpl.html',
    '\n' +
    '<p>welcome to the home page.</p>');
}]);
})();

angular.module('app.Login', ['ui.router']).config(function($stateProvider) {
  return $stateProvider.state('login', {
    url: '/login',
    templateUrl: 'login/login.tpl.html',
    controller: 'LoginCtrl'
  });
}).controller('LoginCtrl', function($scope) {
  return $scope.user = {
    name: 'feathers'
  };
});

(function(module) {
try {
  module = angular.module('tpl');
} catch (e) {
  module = angular.module('tpl', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('login/login.tpl.html',
    '\n' +
    '<p>Welcome to the login page!</p>');
}]);
})();

(function(module) {
try {
  module = angular.module('tpl');
} catch (e) {
  module = angular.module('tpl', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('static/404.html',
    '<!DOCTYPE html>\n' +
    '<html class="no-js">\n' +
    '  <head>\n' +
    '    <meta charset="utf-8">\n' +
    '    <title>404</title>\n' +
    '    <meta name="description" content="">\n' +
    '    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
    '    <base href="/">\n' +
    '    <meta name="fragment" content="!">\n' +
    '    <link rel="shortcut icon" href="/favicon.ico?v=2">\n' +
    '  </head>\n' +
    '  <body>\n' +
    '    <p>404</p>\n' +
    '  </body>\n' +
    '</html>');
}]);
})();
