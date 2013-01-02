(function(views, collections) {

    //PublicGists collection View
    views.PublicListView = views.Collection.extend({
        
        initialize: function() {
            this.template =  _.template($('#tpl-publicgists').html());
            this.collection = new collections.PublicListView();
        },
        
        render: function() {
            var that = this;
            this.getCollection(function(collection) {
                var tpl = that.template({ collection: collection.toJSON() });
                $(that.el).html(tpl);
            });

            return this;
        }

    });

}).call(this, app.views, app.collections);