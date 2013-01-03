(function(views, collections) {

    //Gists collection View
    views.GistListView = views.Collection.extend({
        
        events: {
            
        },
        
        initialize: function() {
            this.template =  _.template($('#tpl-gists').html());
            this.collection = new collections.Gists();
        },
        
        render: function(callback) {
           
            this.renderCollection(callback);
            
        }

    });

}).call(this, app.views, app.collections);