(function(collections, models) {

    // Gists Collection 
    collections.Gists = Backbone.Collection.extend({
        
        model: models.Gist,

        url: '{{site.apiurl}}'
    
    });

}).call(this, app.collections, app.models);