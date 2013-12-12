angular.module('Home', [
    'ui.router'
])

.config(function($stateProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'home/home.tpl.html',
            controller: 'HomeCtrl'
        })
})

.controller('HomeCtrl', ['$scope', function($scope) {
    $scope.user = {
        name: 'feathers'
    }
}])

;