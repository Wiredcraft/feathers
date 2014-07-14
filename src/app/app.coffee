angular.module('feathers', [

])
  .config ($stateProvider, $urlRouterProvider, $locationProvider, $sceProvider, $httpProvider) ->

    $sceProvider.enabled(false)

    # push-state routes
    $locationProvider.html5Mode(true)

    # default to 404 if state not found
    $urlRouterProvider.otherwise('/404')