angular.module('Login', [
    'ui.router'
])

.config(function($stateProvider) {
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'login/login.tpl.html',
            controller: 'LoginCtrl'
        })
})

.controller('LoginCtrl', ['$scope', function($scope) {
    $scope.user = {
        name: 'feathers'
    }
}])

;