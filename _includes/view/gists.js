(function(views) {

    //Item collection View
    views.Gists = Backbone.View.extend({
        
        el: '#main',
        
        template: _.template($('script[name=gists]').html()),
        
        initialize: function() {
            this.collection.on( 'change', this.render, this );
        },
        
        render: function() {
            $(this.el).html(this.template({collection: this.collection.toJSON()}));
            return this;
        }

    });

}).call(this, window.app.views);
