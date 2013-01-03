(function(views, collections) {

    //PublicGists collection View
    views.PublicListView = views.Collection.extend({
        
        initialize: function() {
            this.template =  _.template($('#tpl-publicgists').html());
            this.collection = new collections.PublicGists();
        },
        
        render: function(callback) {
           
            this.renderCollection(callback);
            
        }

    });

}).call(this, app.views, app.collections);