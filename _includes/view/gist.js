(function(views) {
    
    // Users' gist view
    views.Gist = Backbone.View.extend({
        
        el: '#main',

        template: _.template($('script[name=gist]').html()),
        
        initialize: function() {
            console.log('[v]gist initializing')
            // this.collection.on( 'change', this.render, this );
        },        

        render: function() {
            // console.log('[v] rendering Gist', this.el);
            // $(this.el).html(this.template({collection: this.collection.toJSON()}));
            // return this;
        }

    });

}).call(this, window.app.views);
