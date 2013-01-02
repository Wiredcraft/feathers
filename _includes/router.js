(function(routers, views, collections) {
  
    // Router
    var Router = Backbone.Router.extend({
        
        routes:{
            ''          : 'gists',
            'gists'     : 'gists',
            'gists/:id' : 'gist',
            'public'     : 'publicgists',
            'public/:id' : 'publicgist',
            'user'      : 'usergists',
            'user/:id'  : 'usergist',
            '*actions'  : 'defaultAction'
        },

        initialize: function() {
            this.headerView = new views.Header();
            this.footerView = new views.Footer();
            this.appView = new views.AppView();
            
            // render header and footer
            this.headerView.render();
            this.footerView.render();
        },

        gists: function () {
            this.appView.loading();
            this.footerView.select('gists');

            if (!this.gistsView) {
                this.gistsView = new views.Gists();
            }

            this.appView.render('#main', this.gistsView.render().el);
        },

        gist: function (id) {
            
            this.footerView.select('gists');
            
            if (!this.gistView) {
                this.gistView = new views.Gist({id : id});
            }

            this.appView.render('#main', this.gistView.render().el);

        },

        publicgists: function () {
            
            this.footerView.select('public');

            if (!this.publicGistsView) {
                this.publicGistsView = new views.PublicGists();
            }

            this.appView.render('#main', this.publicGistsView.render().el);

        },

        publicgist: function (id) {
            
            this.footerView.select('public');
            
            if (!this.publicGistView) {
                this.publicGistView = new views.PublicGist({id : id});
            }

            this.appView.render('#main', this.publicGistView.render().el);

        },

        defaultAction: function(actions) {
            // No matching route
        }
    });

    routers = new Router();
    Backbone.history.start();

}).call(this, app.routers, app.views, app.collections);
