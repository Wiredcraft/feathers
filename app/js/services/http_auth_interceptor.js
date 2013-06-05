/*global angular:true, browser:true */

/**
 * @license HTTP Auth Interceptor Module for AngularJS
 * (c) 2012 Witold Szczerba
 * License: MIT
 */
(function () {
  'use strict';
  
  angular.module('http-auth-interceptor', ['http-auth-interceptor-buffer'])

  .factory('authService', ['$rootScope','httpBuffer', function($rootScope, httpBuffer) {
    return {
      loginConfirmed: function() {
        $rootScope.$broadcast('event:auth-loginConfirmed');
        httpBuffer.retryAll();
      }
    };
  }])

  /**
   * $http interceptor.
   * On 401 response (without 'ignoreAuthModule' option) stores the request 
   * and broadcasts 'event:angular-auth-loginRequired'.
   */
  .config(['$httpProvider', function($httpProvider) {
    
    var interceptor = ['$rootScope', '$q', 'httpBuffer', '$location', function($rootScope, $q, httpBuffer, $location) {
      function success(response) {
        return response;
      }
 
      function error(response) {


        if ((response.status === 403) &&
          !response.config.ignoreAuthModule &&
          $location.$$path != '/register/confirm') { // ignored route
          var deferred = $q.defer();
          httpBuffer.append(response.config, deferred);
          $location.path('/login');
          $rootScope.$broadcast('event:auth-loginRequired');
          return deferred.promise;
        }
        // otherwise, default behaviour
        return $q.reject(response);
      }
 
      return function(promise) {
        return promise.then(success, error);
      };
 
    }];
    $httpProvider.responseInterceptors.push(interceptor);
  }]);
  
  /**
   * Private module, an utility, required internally by 'http-auth-interceptor'.
   */
  angular.module('http-auth-interceptor-buffer', [])

  .factory('httpBuffer', ['$injector', function($injector) {
    /** Holds all the requests, so they can be re-requested in future. */
    var buffer = [];
    
    /** Service initialized later because of circular dependency problem. */
    var $http; 
    
    function retryHttpRequest(config, deferred) {
      $http = $http || $injector.get('$http');
      $http(config).then(function(response) {
        deferred.resolve(response);
      });
    }
    
    return {
      /**
       * Appends HTTP request configuration object with deferred response attached to buffer.
       */
      append: function(config, deferred) {
        buffer.push({
          config: config, 
          deferred: deferred
        });      
      },
              
      /**
       * Retries all the buffered requests clears the buffer.
       */
      retryAll: function() {
        for (var i = 0; i < buffer.length; ++i) {
          retryHttpRequest(buffer[i].config, buffer[i].deferred);
        }
        buffer = [];
      }
    };
  }]);
})();