(function(views, models) {

    //PublicGist Model View
    views.PublicView = views.Model.extend({
        
        initialize: function(options) {
            this.template =  _.template($('#tpl-publicgist').html());
            this.model =  new models.PublicGist({ id: options.id});
        },
        
        render: function(callback) {
           
            this.renderModel(callback);
            
        }

    });

}).call(this, app.views, app.models);
