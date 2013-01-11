(function(views) {
    
    // This is the top of Model UI.
    views.Model = Backbone.View.extend({

        renderModel: function (callback) {
            var that = this;
            this.model.fetch({
                silent: true,
                success: function(res) {

                    var model = res.toJSON();
                    $(that.el).html( that.template({ model: model }) );

                    callback($(that.el), model);
                },
                error: function(coll, res) {
                    
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
        }

    });

}).call(this, app.views);
