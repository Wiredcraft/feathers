var app = app || {};

$(function() {

    //Item View

    app.ItemView = Backbone.View.extend({

        events: {

        },

        template: $('script[name=item]').html(),

        initialize: function() {
            this.model.on( 'change', this.render, this );
        },

        // Re-render the titles of the todo item.
        render: function() {
            console.log(this.template);
            // this.$el.html( this.template( this.model.toJSON() ) );
            
            return this;
        }

    });
});
