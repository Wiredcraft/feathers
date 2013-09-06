angular.module( 'Feathers', [
    'templates-app',
    'templates-common',

    'ui.router'
])

.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function ( $stateProvider, $urlRouterProvider, $httpProvider) {
    $urlRouterProvider.otherwise( '/404' );

}])

.run(['$rootScope', '$state', '$stateParams', function($rootScope, $state, $stateParams) {

}])

.controller( 'FeathersCtrl', function FeathersCtrl ( $scope, $location, $rootScope, $timeout) {

});
