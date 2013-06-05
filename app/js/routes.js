
// DEBUG
if (window.location.host.indexOf('localhost') > -1)
  DEBUG = true;

var FEATHERS = angular.module('FEATHERS', ['MainController']);

FEATHERS.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl : 'templates/home.html',
      controller : 'NopCtrl',
      menu : {
	title : 'Home',
	left : true
      }
    })
    .when('/foundation4', {
      templateUrl : 'templates/foundation4.html',
      controller : 'NopCtrl',
      menu : {
	title : 'Foundation 4',
	right : true
      }
    })
    .otherwise({
      redirectTo : '/404'
    });
}]);

FEATHERS.run(['$log', function($log) {
  // Disable all log when production
  if (!DEBUG) {
    // Can be forwarded to Logman
    $log.log = function(arguments) {};
    $log.error = function(arguments) {};
    $log.info = function(arguments) {};
    $log.warn = function(arguments) {};
  }
  $log.log('Init app');
}]);

