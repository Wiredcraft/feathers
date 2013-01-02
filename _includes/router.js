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
            // this.appView.loading();
            this.footerView.select('gists');

            if (!this.gistsView) {
                this.gistListView = new views.GistListView();
            }

            this.appView.render('#main', this.gistListView.render().el);
        },

        gist: function (id) {
            
            this.footerView.select('gists');
            
            if (!this.GistView) {
                this.GistView = new views.GistView({id : id});
            }

            this.appView.render('#main', this.GistView.render().el);

        },

        publicgists: function () {
            
            this.footerView.select('public');

            if (!this.PublicListView) {
                this.PublicListView = new views.PublicListView();
            }

            this.appView.render('#main', this.PublicListView.render().el);

        },

        publicgist: function (id) {
            
            this.footerView.select('public');
            
            if (!this.PublicView) {
                this.PublicView = new views.PublicView({id : id});
            }

            this.appView.render('#main', this.PublicView.render().el);

        },

        defaultAction: function(actions) {
            // No matching route
        }
    });

    routers = new Router();
    Backbone.history.start();

}).call(this, app.routers, app.views, app.collections);
