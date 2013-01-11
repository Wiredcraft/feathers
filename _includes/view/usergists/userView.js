(function(views, models) {

    //UserView Model View
    views.UserView = views.Model.extend({
        
        initialize: function(options) {
            this.template =  _.template($('#tpl-usergist').html());
            this.model =  new models.Usergist({ id: options.arg});
        },
        
        render: function(callback) {
           
            this.renderModel(callback);
            
        }

    });

}).call(this, app.views, app.models);
