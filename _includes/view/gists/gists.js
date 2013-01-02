(function(views, collections) {

    //Gists collection View
    views.Gists = views.Collection.extend({
        
        initialize: function() {
            this.template =  _.template($('#tpl-gists').html());
            this.collection = new collections.Gists();
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