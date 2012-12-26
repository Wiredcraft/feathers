(function(views) {

    //Item View

    views.ItemListView = Backbone.View.extend({
        
        el: '#itemlist',
        
        events: {

        },

        template: $('script[name=itemlist]').html(),

        initialize: function() {
            console.log('initialize view, ItemListView')
            // this.model.on( 'change', this.render, this );
        },

        
        render: function() {
            
            // this.$el.html( this.template( this.model.toJSON() ) );
            return this;
        }

    });

}).call(this, window.app.views);
