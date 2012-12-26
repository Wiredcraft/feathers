(function(routers, views, collections) {
    
    // The Application
    views.AppView = Backbone.View.extend({

        el: '#app',

        events: {
              
        },

        initialize: function() {
            collections.Items.on( 'all', this.render, this );
            collections.Items.fetch();
        },

        render: function() {
            
            this.headerView = new views.Header();
            this.headerView.render();
            

            routers = new routers.Router();
            Backbone.history.start();

        }

    });

}).call(this, app.routers, app.views, app.collections);
