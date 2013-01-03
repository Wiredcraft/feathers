(function(views) {

    // Header View
    views.Footer = views.AppView.extend({
        
        el : this.$('#footer'),

        events: {
            'click ul li a' : '_loader'
        },

        initialize: function () {
            this.template = _.template($('#tpl-footer').html());
        },

        _loader: function() {
            console.log('_loader');
            // this.appView = new views.AppView();
            // this.appView.loading();
        },

        select: function(className) {
            // highlight tab
            this.$('.nav li').removeClass('active');
            this.$('.' + className).addClass('active');
        },
        
        render: function() {
            this.$el.html(this.template());
            return this;
        }

    });

}).call(this, app.views);
