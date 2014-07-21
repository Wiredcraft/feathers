angular.module('feathers', [
  'ui.router'

  # pages
  'app.Home'

  # templates
  'tpl'
])

.config ($stateProvider, $urlRouterProvider, $locationProvider, $sceProvider, $httpProvider) ->

  # $sceProvider.enabled(false)

  # push-state routes
  # $locationProvider.html5Mode(true)

  # default to 404 if state not found
  $urlRouterProvider.otherwise('/404')

  $stateProvider
    .state 'index',
      url: '/'
      templateUrl: 'home/home.tpl.html'
      controller: 'IndexCtrl'

    .state 'home',
      url: '/home'
      templateUrl: 'home/home.tpl.html'

    .state 'docs',
      url: '/docs'
      templateUrl: 'docs/docs.tpl.html'

    .state 'about',
      url: '/about'
      templateUrl: 'about/about.tpl.html'

    .state '404',
      url: '/404'
      templateUrl: 'static/404.html'
