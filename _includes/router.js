(function() {
  
    // Router
    var Router = Backbone.Router.extend({
        
        routes:{
            '*filter': 'home'
        },

        initialize: function() {
            new app.views.AppView();
        },

        home: function (param) {
            console.log(param,'param');
        }
    });

    app.routers = new Router();
    Backbone.history.start();

}).call(this);
