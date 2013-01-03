(function(views, collections) {

    //UserListView collection View
    views.UserListView = views.Collection.extend({
        
        initialize: function(options) {
            this.template =  _.template($('#tpl-usergists').html());
            this.collection = new collections.Usergists(options.name);
        },
        
        render: function(callback) {
           
            this.renderCollection(callback);
            
        }

    });

}).call(this, app.views, app.collections);