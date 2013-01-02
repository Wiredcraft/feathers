(function(views, models) {

    //Gist Model View
    views.GistView = views.Model.extend({
        
        initialize: function(options) {
            this.template =  _.template($('#tpl-gist').html());
            this.model =  new models.Gist({ id: options.id});
        },
        
        render: function(callback) {
           
            this.renderModel(callback);
            
        }

    });

}).call(this, app.views, app.models);
