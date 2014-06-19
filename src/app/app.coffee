config = ($stateProvider, $urlRouterProvider) ->
    $urlRouterProvider.when('', '/')
    $urlRouterProvider.otherwise('/')

    $stateProvider.state 'home',
        url: '/'
        views:
            '':
                templateUrl: 'templates/home.tpl.html'
                controller: 'homeCtrl'

config.$inject = ['$stateProvider', '$urlRouterProvider']

run = (
    $rootScope
    $state
    $stateParams
) ->
    # make $state and $stateParams global
    $rootScope.$state = $state
    $rootScope.$stateParams = $stateParams

run.$inject = [
    '$rootScope'
    '$state'
    '$stateParams'
]

###
Home Controller
###
homeCtrl = ($log, $scope) ->
    $scope.test = 'YES, FEATHERS IS WORKING!'
    $scope.underscore = _.range 10

homeCtrl.$inject = ['$log', '$scope']


angular.module('App', [
    'templates'
    'ngRoute'
    'ui.router'
    'jmdobry.angular-cache'
    'Filters'
]).config(config).run(run)
.controller('homeCtrl', homeCtrl)