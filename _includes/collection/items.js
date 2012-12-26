(function(collections) {

    //Collection
    
    collections.Items = Backbone.Collection.extend({
        
        model: app.models.Item,

        url: '{{site.apiurl}}'
    
    });

}).call(this, window.app.collections);
