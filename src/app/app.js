angular.module( 'Feathers', [
    'config',
    'Login',
    'Home',

    'templates-app',
    'templates-common',

    'ui.router'
])

.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function ( $stateProvider, $urlRouterProvider, $httpProvider) {

    /**
    * custom httpProvider response
    */
    $httpProvider.interceptors.push(function($rootScope, $q) {
        return {
            'response': function(response) {
                return response;
            },

            'responseError': function(rejection) {
                switch (rejection.status) {
                    case 401 :
                        $rootScope.$emit('httperror', {
                            code : 401
                        })
                        break;
                    case 404 :
                        $rootScope.$emit('httperror', {
                            code : 404
                        })
                        break;
                    case 0 :
                    case 500 :
                        $rootScope.$emit('httperror', {
                            code : 500
                        })
                        break;
                    case 502 :
                        $rootScope.$emit('httperror', {
                            code : 502
                        })
                        break;
                    default :
                        $rootScope.$emit('httperror', {
                            code : 404
                        })
                        break;
                }

                return $q.reject(rejection);
            }
        };
    });

    // if its a wrong url will force redirect to login page
    $urlRouterProvider.otherwise( '/login' );

    $stateProvider.state('index', {
        url: '',
        controller: 'FeathersCtrl'
    })
}])

.run(['$rootScope', '$state', function($rootScope, $state) {

}])

.controller( 'FeathersCtrl', ['$rootScope', '$scope', '$state', 'ENV', '$log', function FeathersCtrl ($rootScope, $scope, $state, ENV , $log) {

    $scope.mode = (ENV === 'development') ? ENV : 'production';
    $state.go('home');

    // when http error
    $rootScope.$on('httperror', function(listener, params) {
        location.href = '/' + params.code + '.html';
    })
}])

;
