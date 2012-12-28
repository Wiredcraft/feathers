(function(views) {
    
    // Application
    // This is the top of application UI.
    views.AppView = Backbone.View.extend({

        el: '#app',

        events: {
              
        },

        initialize: function(options) {
            // loading
            views.UI.loading();
            
            // cache choosen
            this.view = options.view;
            this.param = options.param;

            options.collection.on( 'all', this.render, this );
            options.collection.fetch();

        },

        render: function() {
            
            if (this.param) {
                // model
                var model = this.collection.completed(this.param);
                if (model) {
                    new this.view({model: model}).render();
                } else {
                    // no this model
                    views.UI.showError('cant find this model');
                }
            } else {
                // collection
                if (this.collection.length) {
                    // if the collection exsit
                    new this.view({collection: this.collection}).render();
                } else {
                    // no data
                    views.UI.showError('cant find any data');
                }
            }
            // loaded
            views.UI.loaded();
        }

    });

}).call(this, app.views);
