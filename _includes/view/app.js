(function(views) {
    
    // The Application
    views.AppView = Backbone.View.extend({

        el: '#app',

        events: {
              
        },

        initialize: function() {
            this.headerView = new app.views.Header();
            this.headerView.render();

            app.collections.Items.fetch({
                success: function() {
                    console.log(arguments, 'ssss');
                },
                error: function() {
                    console.log(arguments, 'eeeee');
                }
            });

        },

        render: function() {
            console.log(arguments,'111');
        }

    });

}).call(this, window.app.views);
