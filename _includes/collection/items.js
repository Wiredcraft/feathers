(function(collections) {

    //Collection
    
    var Items = Backbone.Collection.extend({
        
        model: app.models.Item,

        url: '{{site.apiurl}}',

        completed: function() {
            console.log(arguments,'11111');
            // return this.filter(function( todo ) {
            //     return todo.get('completed');
            // });
        }
    
    });

    collections.Items = new Items();

}).call(this, window.app.collections);
