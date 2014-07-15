angular.module('app.Login', [
  'ui.router'
])

.config ($stateProvider) ->
  $stateProvider
    .state 'login',
      url: '/login'
      templateUrl: 'login/login.tpl.html'
      controller: 'LoginCtrl'

.controller 'LoginCtrl', ($scope) ->
  $scope.user =
    name: 'feathers'
