(function(collections) {
    // 
    // // Gist Collection
    // var Usergists = Backbone.Collection.extend({
    //     
    //     model: app.models.Usergist,
    // 
    //     // url: 'https://api.github.com/users/aimeesohn/gists',
    //     // url: function (data) {
    //     //     console.log('[collection] Usergists' , this.data);
    //     //     return 'https://api.github.com/users/' + this.data + '/gists';
    //     // },
    // 
    //     url : function(data) {
    //         console.log('asdfasdf',app.collections.Usergists);
    //         var prefix = 'https://api.github.com/users/';
    //         return prefix + this.id + '/gists';
    //     },
    //     
    //     completed: function (id) {
    //         return this.get(id);
    //     }
    // 
    // });
    // 
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
