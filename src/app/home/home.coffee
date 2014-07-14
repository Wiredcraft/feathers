angular.module('Home', [
    'ui.router'
])
  .config ($stateProvider) ->
    $stateProvider
        .state 'home',
            url: '/home'
            templateUrl: 'home/home.tpl.html'
            controller: 'HomeCtrl'

.controller 'HomeCtrl', ($scope) ->
    $scope.user =
        name: 'feathers'
