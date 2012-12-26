var app = app || {};

(function() {
    
    //Model
 
    app.Item = Backbone.Model.extend({

        urlRoot: '{{site.apiurl}}',

        defaults: {},

        initialize: function(){
            // this.bind('change', function () {
            //     console.log('change', arguments);
            // });
        }

    });

}());
