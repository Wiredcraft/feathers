(function(models) {
    
    // Gist
    models.Usergist = Backbone.Model.extend({
        
        urlRoot: 'https://api.github.com/users/aimeesohn/gists',

        defaults: {},

        initialize: function(){
            // this.bind('change', function () {
            //     console.log('change', arguments);
            // });\
             // new Usergist({url: 'https://api.github.com/users/'+data.user.login+'/gists'});
        }

    });

}).call(this, window.app.models);

