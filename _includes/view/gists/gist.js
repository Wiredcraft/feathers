(function(views, models) {

    //Gist Model View
    views.Gist = views.Model.extend({
        
        initialize: function(options) {
            this.template =  _.template($('#tpl-gist').html());
            this.model =  new models.Gist({ _id: options.id});
        },
        
        render: function() {
            var that = this;
            this.getModel(function(model) {
                var tpl = that.template({ model: model.toJSON() });
                $(that.el).html(tpl);
            });

            return this;
        }

    });

}).call(this, app.views, app.models);
