(function(collections) {

    // Item Collection 
    var Items = Backbone.Collection.extend({
        
        model: app.models.Item,

        url: '{{site.apiurl}}',

        completed: function (id) {
            return this.get(id);
        }
    
    });

    collections.Items = new Items();

}).call(this, window.app.collections);