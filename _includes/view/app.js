(function(views, collections) {
    
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

            console.log('ttttt');
            // console.log(collections.Items,'!!!!!!!');

            // console.log(collections.Items.completed());
        }

    });

}).call(this, app.views, app.collections);
