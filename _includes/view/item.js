(function(views) {

    //Item View
    views.Item = Backbone.View.extend({
        
        el: '#main',
        
        events: {

        },

        template: _.template($('script[name=item]').html()),
        
        initialize: function() {
            this.model.on( 'change', this.render, this );
        },
        
        render: function() {
            $(this.el).html(this.template({model:this.model}));
            return this;
        }

    });

}).call(this, window.app.views);
