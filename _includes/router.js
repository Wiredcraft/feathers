(function(routers, views, collections) {
  
    // Router
    routers.Router = Backbone.Router.extend({
        
        routes:{
            '': 'gists',
            '/discover': 'gists',
            // '/forked': 'forked',
            // '/starred': 'starred',
            'gist/:id': 'gist',
            'user': 'usergists'
        },

        initialize: function() {
        },

        gists: function () {
            
            console.log('[Router] gists');
            
            if (collections.Items.length) {
                console.log('router, gists' ,collections.Items);
                new views.ItemList({collection: collections.Items}).render();
            }
        },

        gist: function (param) {
            console.log('[Router] gist');
            var model = collections.Items.completed(param);
            if (model) {
                new views.Item({model: model}).render();
            }
                      
        },
        
        usergists: function() {
            console.log('[Router] usergists');
            // if (model) {
            //     new views.Gist({model: model}).render();
            // }
            // 
            // if (collections.Gists.length) {
            //     console.log('router, usergists' ,collections.Gists);
            //     new views.Gists({collection: collections.Gists}).render();
            // }
            
            // if (collections.Usergists.length) {
            //     console.log('router, Usergists' ,collections.Usergists);
            //     new views.UserGists({collection: collections.Usergists}).render();
            // }
        }
    });

    new views.AppView();

}).call(this, app.routers, app.views, app.collections);
