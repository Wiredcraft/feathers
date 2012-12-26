(function() {
  
    // Router
    var Router = Backbone.Router.extend({
        
        routes:{
            '': 'gists',
            '/discover': 'gists',
            // '/forked': 'forked',
            // '/starred': 'starred',
            'gist/:id': 'gist'
        },

        initialize: function() {
            new app.views.AppView();
        },

        gists: function () {
            console.log('home');
        },

        gist: function (param) {
            console.log('11111');
            console.log(param, collections.Items, 'gist');
        },
    });

    app.routers = new Router();
    Backbone.history.start();

}).call(this);
