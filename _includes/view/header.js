(function(views) {

    // Header View
    views.Header = views.AppView.extend({
        
        el : this.$('#header'),

        events: {
            
        },

        initialize: function () {
            this.template = _.template($('#tpl-header').html());
        },

        render: function() {
            this.$el.html(this.template());
            return this;
        }

    });

}).call(this, app.views);
