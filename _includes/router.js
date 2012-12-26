(function(routers, views, collections) {
  
    // Router
    routers.Router = Backbone.Router.extend({
        
        routes:{
            '': 'gists',
            '/discover': 'gists',
            // '/forked': 'forked',
            // '/starred': 'starred',
            'gist/:id': 'gist'
        },

        initialize: function() {
        },

        gists: function () {
            if (collections.Items.length) {
                           console.log('router, gists' ,collections.Items);
                           new views.ItemList({collection: collections.Items}).render();
                       }
        },

        gist: function (param) {
            var model = collections.Items.completed(param);
                       if (model) {
                           new views.Item({model: model}).render();
                       }
        }
    });

    new views.AppView();

}).call(this, app.routers, app.views, app.collections);
