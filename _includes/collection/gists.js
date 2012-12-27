(function(collections) {

    // Gist Collection
    var Gists = Backbone.Collection.extend({
        
        model: app.models.Gist,

        url: 'https://api.github.com/users/aimeesohn/gists',

        completed: function (id) {
            return this.get(id);
        }
    
    });

    collections.Gists = new Gists();

}).call(this, window.app.collections);
