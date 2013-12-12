angular.module( 'Feathers', [
    'config',
    'Login',
    'Home',

    'templates-app',
    'templates-common',

    'ui.router'
])

.config(['$stateProvider', '$urlRouterProvider', function ( $stateProvider, $urlRouterProvider ) {
    $urlRouterProvider.otherwise( '/404' );

    $stateProvider.state('index', {
        url: '',
        controller: 'FeathersCtrl'
    })
}])

.run(['$rootScope', '$state', function($rootScope, $state) {

}])

.controller( 'FeathersCtrl', ['$scope', '$state', 'ENV', '$log', function FeathersCtrl ($scope, $state, ENV , $log) {

    $scope.mode = (ENV === 'development') ? ENV : 'production';
    $state.go('home');
}])

;
