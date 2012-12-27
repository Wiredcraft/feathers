(function(views) {

    //Item View
    views.Item = Backbone.View.extend({
        
        el: '#main',
        
        events: {

        },

        template: _.template($('script[name=item]').html()),
        
        initialize: function() {
            console.log('[v]item',this.model);
            this.model.on( 'change', this.render, this );
        },
        
        render: function() {
            console.log('[v] rendering Item', this.el);
            $(this.el).html(this.template({model:this.model}));
            return this;
        }

    });

}).call(this, window.app.views);
