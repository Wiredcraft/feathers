(function(views) {

    // Users' gist collection view
    views.UserGists = Backbone.View.extend({
        
        el: '#main',

        template: _.template($('script[name=usergists]').html()),
        
        initialize: function() {
            this.collection.on( 'change', this.render, this );
        },

        render: function() {
            
            $(this.el).html(this.template({collection: this.collection.toJSON()}));
            return this;
        }
    });

}).call(this, window.app.views);
