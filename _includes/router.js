(function(routers, views, collections) {
  
    // Router
    var Router = Backbone.Router.extend({
        
        routes:{
            '': 'items',
            '/discover': 'items',
            // '/forked': 'forked',
            // '/starred': 'starred',
            'gist/:id': 'item',
            'user': 'usergists'
        },

        initialize: function() {
            // ui part
            this.headerView = new views.Header();
        },

        items: function () {
            if (collections.Items.length) {
                // the exsit collection 
                new views.ItemList({collection: collections.Items}).render();
            } else {
                // just opened this url need get the collection
                new views.AppView({
                    collection: collections.Items,
                    view: views.ItemList
                });
            }
        },
        
        usergists: function() {
            if (collections.Gists.length) {
                // the exsit collection 
                new views.Gists({collection: collections.Gists}).render();
            } else {
                // just opened this url need get the collection
                new views.AppView({
                    collection: collections.Gists,
                    view: views.Gists
                });
            }
        },

        item: function (param) {
            var model = collections.Items.completed(param);
            if (model) {
                // the exsit model in collection
                new views.Item({model: model}).render();
            } else {
                // get the latest collection to find the model or just opened this url need get the collection
                new views.AppView({
                    collection: collections.Items,
                    view: views.Item,
                    param: param
                });
            }
        }

    });

    routers = new Router();
    Backbone.history.start();

}).call(this, app.routers, app.views, app.collections);
