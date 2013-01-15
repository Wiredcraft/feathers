(function(models) {

    models.Main = Backbone.Model.extend({
        
        idAttribute: "id",
        
        urlRoot: '{{site.apiurl}}',

        defaults: {
        }

    });

}).call(this, app.models);
