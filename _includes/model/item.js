(function(models) {
    
    //Model
 
    models.Item = Backbone.Model.extend({
        
        urlRoot: '{{site.apiurl}}',

        defaults: {},

        initialize: function(){
            console.log('initializing model');
            // this.bind('change', function () {
            //     console.log('change', arguments);
            // });
        }

    });

}).call(this, window.app.models);
