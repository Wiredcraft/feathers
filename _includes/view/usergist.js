(function(views) {
    
    // Users' gist view
    views.UserGist = Backbone.View.extend({
        
        el: '#main',

        template: _.template($('script[name=usergist]').html()),
        
        initialize: function() {
            console.log('[v]gist initializing');
            this.model.on( 'change', this.render, this );            
        },        

        render: function() {
            $(this.el).html(this.template({model:this.model}));
            return this;
        }

    });

}).call(this, window.app.views);
