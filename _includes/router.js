(function(views, collections) {
  
    // Router
    var Router = Backbone.Router.extend({
        
        routes:{
            ''             : 'gists',
            'gists'        : 'gists',
            'gists/:id'    : 'gist',
            'public'       : 'publicgists',
            'public/:id'   : 'publicgist',
            'users/:user'  : 'usergists',
            'users/:id'    : 'usergist',
            '*actions'     : 'defaultAction'
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
            
            this.appView.viewMaker(this, 'gists','GistListView', '#main');
        
        },

        gist: function (id) {

            this.appView.viewMaker(this, 'gists', 'GistView', '#main', arguments[0]);
            
        },

        publicgists: function () {
            
            this.appView.viewMaker(this, 'public', 'PublicListView', '#main');

        },

        publicgist: function (id) {
            
            this.appView.viewMaker(this, 'public', 'PublicView', '#main', arguments[0]);

        },

        usergists: function(name) {
                
            this.appView.viewMaker(this, null, 'UserListView', '#main', arguments[0]);

        },

        usergist: function(id) {
            // cant be use,this api was not restful,link to gists/:id
            this.appView.viewMaker(this, null, 'UserView', '#main', arguments[0]);
        },

        defaultAction: function(actions) {
            // No matching route
        }
    });

    app.routers = new Router();
    Backbone.history.start();

}).call(this, app.views, app.collections);
