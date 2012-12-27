(function(collections) {

    // Item Collection 
    var Gists = Backbone.Collection.extend({
        
        model: app.models.Gist,

        url: '{{site.apiurl}}',

        completed: function (id) {
            return this.get(id);
        }
    
    });

    collections.Gists = new Gists();

}).call(this, window.app.collections);