(function(views) {

    //Item View
    views.Gist = Backbone.View.extend({
        
        el: '#main',

        template: _.template($('script[name=gist]').html()),
        
        initialize: function() {
            this.model.on( 'change', this.render, this );
        },
        
        render: function() {
            $(this.el).html(this.template({model:this.model}));
            return this;
        }

    });

}).call(this, window.app.views);
