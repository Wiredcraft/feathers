(function(views, models) {

    //PublicGist Model View
    views.PublicView = views.Model.extend({
        
        initialize: function(options) {
            this.template =  _.template($('#tpl-publicgist').html());
            this.model =  new models.PublicView({ id: options.id});
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
