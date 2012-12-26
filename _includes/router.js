var app = app || {};

(function() {
   
    // Router
    app.Router = Backbone.Router.extend({
        
        routes:{
            '*filter': 'home'
        },

        home: function (param) {
            console.log(param,'param');
        }
    });

    app.Router = new app.Router();
    Backbone.history.start();

    new app.AppView();        
}());
