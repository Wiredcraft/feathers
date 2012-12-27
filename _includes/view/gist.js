(function(views) {
    
    // Users' gist view
    views.Gist = Backbone.View.extend({
        
        el: '#main',

        template: _.template($('script[name=gist]').html()),
        
        initialize: function() {
            console.log('[v]gist initializing');
            this.collection.on( 'change', this.render, this );
        },        

        render: function() {
            $(this.el).html(this.template({model:this.model}));
            return this;
        }

    });

}).call(this, window.app.views);
