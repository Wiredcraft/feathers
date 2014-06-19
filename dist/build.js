(function() {
  var config, homeCtrl, run;

  config = function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise('/');
    return $stateProvider.state('home', {
      url: '/',
      views: {
        '': {
          templateUrl: 'templates/home.tpl.html',
          controller: 'homeCtrl'
        }
      }
    });
  };

  config.$inject = ['$stateProvider', '$urlRouterProvider'];

  run = function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    return $rootScope.$stateParams = $stateParams;
  };

  run.$inject = ['$rootScope', '$state', '$stateParams'];


  /*
  Home Controller
   */

  homeCtrl = function($log, $scope) {
    $scope.test = 'YES, FEATHERS IS WORKING!';
    return $scope.underscore = _.range(10);
  };

  homeCtrl.$inject = ['$log', '$scope'];

  angular.module('App', ['templates', 'ngRoute', 'ui.router', 'jmdobry.angular-cache', 'Filters']).config(config).run(run).controller('homeCtrl', homeCtrl);

}).call(this);

(function() {
  angular.module('Filters', []).filter('uppercase', function() {
    return function(text) {
      return text.toUpperCase();
    };
  }).filter('lowercase', function() {
    return function(text) {
      return text.toLowerCase();
    };
  });

}).call(this);
