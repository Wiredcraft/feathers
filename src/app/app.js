angular.module( 'Feathers', [
    'config',

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

.controller( 'FeathersCtrl', ['$scope', 'ENV', '$log', function FeathersCtrl ( $scope, ENV , $log) {
    if (ENV === 'development') {
        $log.log('You are under development mode!');
    }

    $scope.mode = (ENV === 'development') ? ENV : 'production';
}])

;
