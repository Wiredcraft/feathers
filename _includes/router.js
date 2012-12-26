(function(routers) {
    // Router
    var Router = Backbone.Router.extend({
        
        routes:{
            '*filter': 'home'
        },

        home: function (param) {
            console.log(param,'param');
        }
    });

    routers = new Router();
    Backbone.history.start();

}).call(this, window.app.routers);
