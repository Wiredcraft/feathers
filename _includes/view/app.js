(function(routers, views, collections) {
    
    // Application
    // This is the top of application UI.
    views.AppView = Backbone.View.extend({

        el: '#app',

        events: {
              
        },

        initialize: function() {
            console.log('Initializing Application');
            
            this.headerView = new views.Header();
            this.headerView.render();
            
            collections.Items.on( 'all', this.render, this );
            collections.Items.fetch();
            
            // collections.Usergists.on( 'all', this.render, this );
            // collections.Gists.fetch();
            
        },

        render: function() {
            routers = new routers.Router();
            Backbone.history.start();
        }

    });

}).call(this, app.routers, app.views, app.collections);
