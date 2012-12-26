var app = app || {};

(function() {

    //Collection
    
    app.Items = Backbone.Collection.extend({
        
        model: app.Item,

        url: '{{site.apiurl}}'
    
    });


}());
