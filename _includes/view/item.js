(function(views) {

    //Item View

    views.ItemView = Backbone.View.extend({
        
        el: 'li',
        
        events: {

        },

        template: $('script[name=item]').html(),

        initialize: function(data) {
            console.log('[v] item' , data  );
            this.model.on( 'change', this.render, this );
        },

        
        render: function() {
            console.log('rendering item view');
            this.$el.html( this.template( this.model.toJSON() ) );
            return this;
        }

    });

}).call(this, window.app.views);
