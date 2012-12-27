(function(views) {

    //Item ItemList

    views.ItemList = Backbone.View.extend({
        el: '#main',
        events: {

        },

        template: _.template($('script[name=itemlist]').html()),
        
        initialize: function() {
            this.collection.on( 'change', this.render, this );
        },

        render: function() {
            $(this.el).html(this.template({collection: this.collection.toJSON()}));
            return this;
        }

    });

}).call(this, window.app.views);
