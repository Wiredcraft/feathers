(function(collections, models) {

    // PublicGists Collection 
    collections.PublicGists = Backbone.Collection.extend({
        
        model: models.PublicGist,

        url: '{{site.apiurl}}/public'
    
    });

}).call(this, app.collections, app.models);