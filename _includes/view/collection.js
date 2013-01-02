(function(views) {
    
    // This is the top of Collection UI.
    views.Collection = Backbone.View.extend({

        getCollection: function (callback) {
            this.collection.fetch({
                success: function(collection) {
                    callback(collection);
                },
                error: function(coll, res) {
                    if (res.status === 404) {
                        // TODO: handle 404 Not Found
                    } else if (res.status === 500) {
                        // TODO: handle 500 Internal Server Error
                    }
                }
            });
        }

    });

}).call(this, app.views);
