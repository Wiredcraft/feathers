angular.module('feathers', [
  'ui.router'

  # pages
  'app.Home'
  'app.Login'

  # feathersPartials
  'tpl'
])

.config ($stateProvider, $urlRouterProvider, $locationProvider, $sceProvider, $httpProvider) ->

  $sceProvider.enabled(false)

  # push-state routes
  $locationProvider.html5Mode(true)

  # default to 404 if state not found
  $urlRouterProvider.otherwise('/404')

  $stateProvider
    .state 'index',
      url: '/'
      templateUrl: 'index.html'
      controller: 'IndexCtrl'

    .state '404',
      url: '/404'
      templateUrl: '404.html'


.controller 'MainCtrl', ($rootScope, $scope, $location, $state, $stateParams, $timeout) ->

  # called on page change (ui-sref)
  # $rootScope.$on '$stateChangeStart', (event, toState, toParams, fromState, fromParams) ->
    # tracking
    # ga('send', 'pageview', {'page': $location.path()})

    # set body class to state name
    # $body.attr 'class', toState.name.replace(/\./g, ' ') + ' loading'

    # show loading spinner
    # usSpinnerService.spin('main-loading')

    # close dropdown nav
    # $scope.collapse = false

  # new page, DOM has finished loading
  # $rootScope.$on '$viewContentLoaded', (event, viewConfig) ->
    # $timeout((->
      # remove loading spinner
      # usSpinnerService.stop('main-loading')

      # fade in
      # $body.removeClass('loading')
    # ), 0)

  # redraw the current page. useful for updating content when
  # data has changed server-side.
  $rootScope.refresh = ->
    $state.transitionTo($state.current, $stateParams, {
      reload: true
      inherit: false
      notify: true
    })

.controller 'IndexCtrl', ($scope) ->
  console.log 'index'