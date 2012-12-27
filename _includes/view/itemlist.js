(function(views) {

    //Item collection View
    views.ItemList = Backbone.View.extend({
        el: '#main',
        events: {

        },

        template: _.template($('script[name=itemlist]').html()),
        
        initialize: function() {
            this.collection.on( 'change', this.render, this );
        },
        
        // loading: function() {
        //   $('#main').html('<div class="loading"><span>Loading ...</span></div>');
        // },
        // 
        // loaded: function(){
        //   $('#main .loading').remove();
        // },
        
        render: function() {
            $(this.el).html(this.template({collection: this.collection.toJSON()}));
            return this;
        }

    });

}).call(this, window.app.views);
