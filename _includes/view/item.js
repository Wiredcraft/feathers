(function(views) {

    //Item View

    views.Item = Backbone.View.extend({
        
        el: '',
        
        events: {

        },

        template: $('script[name=item]').html(),

        initialize: function() {
            console.log(this.model,'vvvvvvvvvv');
            // this.model.on( 'change', this.render, this );
        },

        
        render: function() {
            // this.$el.html( this.template( this.model.toJSON() ) );
            return this;
        }

    });

}).call(this, window.app.views);
