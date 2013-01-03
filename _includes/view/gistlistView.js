(function(views, collections) {

    //Gists collection View
    views.GistListView = views.Collection.extend({
        
        events: {
            'click ul.list li a': 'listitem'
        },
        
        listitem: function() {
            console.log('slktjalkdjf;lkadjsglakd');  
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