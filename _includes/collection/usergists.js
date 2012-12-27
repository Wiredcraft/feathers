(function(collections) {

    // Gist Collection
    var Usergists = Backbone.Collection.extend({
        
        model: app.models.Usergist,

        url: 'https://api.github.com/users/aimeesohn/gists',

        completed: function (id) {
            return this.get(id);
        }
    
    });

    collections.Usergists = new Usergists();

}).call(this, window.app.collections);
