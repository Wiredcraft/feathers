(function(views, models) {

    views.MainView = views.Model.extend({
        
        initialize: function(options) {
            this.template =  _.template($('#tpl-main').html());
            this.model =  new models.Main({ id: options.arg});
        },
        render: function(callback) {
            this.renderModel(callback);
        }
    });

}).call(this, app.views, app.models);
