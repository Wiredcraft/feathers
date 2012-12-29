(function(models) {

    models.Usergist = Backbone.Model.extend({
        
        // urlRoot: 'https://api.github.com/users/aimeesohn/gists',
        url: function(){
            return 'https://api.github.com/users/'+this.get('id')+'/gists';
        },
        
        defaults: {},

        initialize: function(){
            // console.log('[m] , initialize' , data );
            // this.bind('change', function () {
            //     console.log('change', arguments);
            // });
        }
    });
    
}).call(this, window.app.models);

