(function(views) {

    //Item View

    views.Item = Backbone.View.extend({
        
        el: '#item',
        
        events: {

        },

        template: _.template($('script[name=item]').html()),
        
        initialize: function() {
            console.log('[v]item',this.model);
            this.model.on( 'change', this.render, this );
        },

        render: function() {
            console.log('rendering item view', this.el);
            $(this.el).html(this.template());
            return this;
        }

    });

}).call(this, window.app.views);
