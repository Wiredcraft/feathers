(function(views) {
    
    // This is the top of Collection UI.
    views.Collection = Backbone.View.extend({

        renderCollection: function (callback) {
            var that = this;
            this.collection.fetch({
                success: function(res) {
                    
                    var collection = res.toJSON();
                    $(that.el).html( that.template({ collection: collection }) );

                    callback($(that.el), collection);
                    
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
