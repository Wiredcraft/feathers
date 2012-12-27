(function(models) {
    
    // Gist
    models.Gist = Backbone.Model.extend({
        
        urlRoot: 'https://api.github.com/users/aimeesohn/gists',

        defaults: {},

        initialize: function(){
            console.log('initializing model[gist]');
            // this.bind('change', function () {
            //     console.log('change', arguments);
            // });
        }

    });

}).call(this, window.app.models);

