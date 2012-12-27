(function(models) {
    
    //Model
    models.Item = Backbone.Model.extend({
        
        url: '{{site.apiurl}}',

        defaults: {},

        initialize: function(){
            console.log('initializing model[item]');
            // this.bind('change', function () {
            //     console.log('change', arguments);
            // });
        }

    });

}).call(this, window.app.models);
