(function(views) {

    //Header View

    views.Header = Backbone.View.extend({
        
        el: '#header',
        
        events: {

        },

        template: _.template($('script[name=header]').html()),

        initialize: function() {
            // this.model.on( 'change', this.render, this );
        },

        select: function(item) {
            // highlight tab
            $('.nav li').removeClass('active');
            $('.' + item).addClass('active');
        },
        
        render: function() {
            $(this.el).html(this.template());
            return this;
        }

    });

}).call(this, window.app.views);
