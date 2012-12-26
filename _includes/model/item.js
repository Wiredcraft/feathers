(function(models) {
    
    //Model
 
    models.Item = Backbone.Model.extend({

        urlRoot: '{{site.apiurl}}',

        defaults: {},

        initialize: function(data){
            console.log('initializing model, each item ', data.id);
            // this.bind('change', function () {
            //     console.log('change', arguments);
            // });
        }

    });

}).call(this, window.app.models);
