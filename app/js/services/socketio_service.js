var SIO = angular.module('Socketio', []);

SIO.value('version', '0.2');

SIO.factory('Socket', function ($rootScope) {
  var socket = null;
  return {
    init : function(url) {
      socket = io.connect(url || '/');
    },
    close : function() {
      socket.disconnect();
    },
    on: function (eventName, callback) {
      if (!socket) throw 'Socket not initialized'
        socket.on(eventName, function () {  
          var args = arguments;
          $rootScope.$apply(function () {if (!socket) throw 'Socket not initialized'
            callback.apply(socket, args);
          });
        });
    },
    emit: function (eventName, data, callback) {
      if (!socket) throw 'Socket not initialized'
        socket.emit(eventName, data, function () {
          var args = arguments;
          $rootScope.$apply(function () {
            if (callback) {
              callback.apply(socket, args);
            }
          });
        })
    }
  };
});
