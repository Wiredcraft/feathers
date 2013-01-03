(function(collections, models) {

    // Usergists Collection 
    collections.Usergists = function (name) {
        
        var url = 'https://api.github.com/users/' + name + '/gists',
            Usergists = Backbone.Collection.extend({
                
                url: url,
                model: models.Usergist

            });
        
        return new Usergists;
    }

}).call(this, app.collections, app.models);