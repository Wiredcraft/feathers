(function(collections) {

    //Collection
    
    var Items = Backbone.Collection.extend({
        
        model: app.models.Item,

        url: '{{site.apiurl}}',

        completed: function() {
            return this.get('4378833');
        }
    
    });

    collections.Items = new Items();

}).call(this, window.app.collections);
