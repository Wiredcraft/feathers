(function(views) {
    
    // This is the top of Model UI.
    views.Model = Backbone.View.extend({

        getData: function (callback) {
            var that = this;
            this.model.fetch({
                silent: true,
                success: function(res) {
                    callback(res.toJSON());
                },
                error: function(coll, res) {
                    console.log('error', arguments,res.status);
                    switch (res.status) {
                        case 403:
                            app.routers.navigate('/', {trigger: true});
                            break;
                        case 404:
                            // TODO: handle 404 Not Found
                            break;
                        case 500:
                            // TODO: handle 500 Internal Server Error
                            break;
                    }
                }
            });
        },

        renderModel: function (callback) {
            var that = this;
            that.getData(function (data) {
                $(that.el).html( that.template({ model: data }) );
                callback($(that.el));
            });
        }

    });

}).call(this, app.views);
