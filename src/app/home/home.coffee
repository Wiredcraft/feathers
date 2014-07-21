angular.module('app.Home', [
])

.controller 'HomeCtrl', ($scope) ->
  $scope.CONFIG = window.CONFIG

  $scope.user =
    name: 'feathers'
