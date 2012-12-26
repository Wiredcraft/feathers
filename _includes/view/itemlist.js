(function(views) {

    //Item ItemList

    views.ItemList = Backbone.View.extend({
        el: '#main',
        events: {

        },

        template: _.template($('script[name=itemlist]').html()),
        
        initialize: function() {
            console.log('[v]itemlist',this.collection);
             this.collection.on( 'change', this.render, this );
        },

        render: function() {
            console.log('[v] rendering ItemList', this.el);
            $(this.el).html(this.template({collection: this.collection.toJSON()}));
            return this;
        }

    });

}).call(this, window.app.views);
