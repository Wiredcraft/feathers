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
            
            this.appView.viewMaker.call(this, {
                viewName: 'GistListView',
                elemId :'#main',
                selectId: 'gists'
            })
        
        },

        gist: function (id) {

            this.appView.viewMaker.call(this, {
                viewName: 'GistView',
                elemId :'#main',
                arg: id,
                selectId: 'gists'
            })
            
        },

        publicgists: function () {

            this.appView.viewMaker.call(this, {
                viewName: 'PublicListView',
                elemId :'#main',
                selectId: 'public'
            })

        },

        publicgist: function (id) {
            
            this.appView.viewMaker.call(this, {
                viewName: 'PublicView',
                elemId :'#main',
                arg: id,
                selectId: 'public'
            })

        },

        usergists: function(name) {
                
            this.appView.viewMaker.call(this, {
                viewName: 'UserListView',
                elemId :'#main',
                arg: name
            })

        },

        usergist: function(id) {
            
            // cant be use,this api was not restful,link to gists/:id
            this.appView.viewMaker.call(this, {
                viewName: 'UserView',
                elemId :'#main',
                arg: id
            })

        },

        defaultAction: function(actions) {
            // No matching route
        }
    });

    app.routers = new Router();
    Backbone.history.start();

}).call(this, app.views, app.collections);
