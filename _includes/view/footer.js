(function(views) {

    // Footer View
    views.Footer = views.AppView.extend({

        el : this.$('#footer'),
        
        events: {

        },

        initialize: function () {
            this.template = _.template($('#tpl-footer').html());
        },
        
        render: function() {
            this.$el.html(this.template());
            return this;
        }

    });

}).call(this, app.views);
