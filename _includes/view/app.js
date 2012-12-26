(function(views) {
    
    // The Application
    views.AppView = Backbone.View.extend({

        el: '#app',

        events: {
              
        },

        initialize: function() {

            // app.Items.on( 'all', this.render, this );

            new app.Items().fetch({
                success: function() {
                    console.log(arguments,'ssss');
                },
                error: function() {
                    console.log(arguments,'eeeeee');
                }
            });
        },

        render: function() {
            
            console.log(arguments,'111');

        }

    });

}).call(this, window.app.views);
