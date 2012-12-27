(function(models) {
    
    // Gist
    models.Usergist = Backbone.Model.extend({
        
        urlRoot: 'https://api.github.com/users/aimeesohn/gists',

        defaults: {},

        initialize: function(){
            console.log('initializing model[Usergist]');
            // this.bind('change', function () {
            //     console.log('change', arguments);
            // });
        }

    });

}).call(this, window.app.models);

