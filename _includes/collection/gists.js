(function(collections) {

    // Gist Collection
    
    var Gists = Backbone.Collection.extend({
        
        model: app.models.Gist,

        url: 'https://api.github.com/users/aimeesohn/gists',

        completed: function (id) {
            return this.get(id);
        }
    
    });

    new Gists().fetch({
        success: function(res) {
            console.log('fetch Usergists success', res.models);
            // $.each(res.models, function(i, index){
            //     $('#main ul').append('<li>'+ res.models.id + '</li>');
            // });   
        },
        error: function(argument) {
            console.log('fetch model error', arguments);
        }
    });

}).call(this, window.app.collections);
