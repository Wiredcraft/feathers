(function(models) {
    
    //Model
    models.Gist = Backbone.Model.extend({
        
        url: '{{site.apiurl}}',

        defaults: {},

        initialize: function(){
            console.log('initializing model[Gist]');
            // this.bind('change', function () {
            //     console.log('change', arguments);
            // });
        }

    });

}).call(this, window.app.models);
