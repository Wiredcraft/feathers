(function(views, collections) {
  
    // Router
    var Router = Backbone.Router.extend({
        
        routes:{
            ''             : 'main',
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

        main: function () {
            
            this.appView.viewMaker.call(this, {
                viewName: 'MainView', // view name 
                elemId :'#main' // element Id 
            })
        
        },

        defaultAction: function(actions) {
            // No matching route
        }
    });

    app.routers = new Router();
    Backbone.history.start();

}).call(this, app.views, app.collections);
