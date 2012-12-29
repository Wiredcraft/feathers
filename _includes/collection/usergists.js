(function(collections) {
    // 
    // // Gist Collection

     collections.Usergists = function (id) {
        console.log('getting user name and Usergists collection', id);
        
        var url = 'https://api.github.com/users/' + id + '/gists';
        var Usergists = Backbone.Collection.extend({
        
            model: app.models.Usergist,
    
            url: url,
    
            completed: function (id) {
                return this.get(id);
            }
        });
        return  new Usergists();
    }
    
    // collections.Usergists = new Usergists();

}).call(this, window.app.collections);
