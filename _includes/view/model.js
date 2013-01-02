(function(views) {
    
    // This is the top of Model UI.
    views.Model = Backbone.View.extend({

        getModel: function (callback) {
            this.model.fetch({
                silent: true,
                success: function(model) {
                    callback(model);
                },
                error: function(coll, res) {
                    console.log(res,'eee');
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
