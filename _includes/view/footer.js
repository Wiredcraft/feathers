(function(views) {

    // Header View
    views.Footer = Backbone.View.extend({
        
        el: '#footer',
        
        events: {
       
        },

        template: _.template($('script[name=footer]').html()),

        initialize: function() {
            this.render();
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
