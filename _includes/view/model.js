(function(views) {
    
    // This is the top of Model UI.
    views.Model = Backbone.View.extend({

        renderModel: function (callback) {
            var that = this;
            this.model.fetch({
                silent: true,
                success: function(model) {
                    $(that.el).html( that.template({ model: model.toJSON() }) );
                    callback($(that.el));
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
