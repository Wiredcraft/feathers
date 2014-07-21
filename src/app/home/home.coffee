angular.module('app.Home', [
])

.controller 'HomeCtrl', ($scope) ->
  $scope.user =
    name: 'feathers'
