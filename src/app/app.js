angular.module( 'Feathers', [
    'templates-app',
    'templates-common',

    'Feathers.auth',
    'Feathers.navbar',
    'Feathers.profile',
    'Feathers.server',
    'Feathers.job',

    'utils.filters',
    'ui.router'
])

.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function ( $stateProvider, $urlRouterProvider, $httpProvider) {
    $urlRouterProvider.otherwise( '/404' );

}])

.run(['$rootScope', '$state', '$stateParams', '$cookieStore', '$http', function($rootScope, $state, $stateParams, $cookieStore, $http) {

}])

.controller( 'FeathersCtrl', function FeathersCtrl ( $scope, $location, $rootScope, $timeout) {
    $rootScope.$on('globalMsg', function(listener, msg) {
        $rootScope.globalMsg = msg;
        $timeout(function() {
            $rootScope.globalMsg = null;
        }, 2500)
    });
})
