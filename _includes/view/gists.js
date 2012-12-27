(function(views) {

    // Users' gist collection view
    views.Gists = Backbone.View.extend({
        
        el: '#main',

        template: _.template($('script[name=gists]').html()),
        
        initialize: function() {
            // this.loading();
            // console.log('[v]usergists',this.collection);
            // this.collection.on( 'change', this.render, this );
            // this.loaded();
        },
        
        // loading: function() {
        //   $('#main').html('<div class="loading"><span>Loading ...</span></div>');
        // },
        // 
        // loaded: function(){
        //   $('#main .loading').remove();
        // },
        

        render: function() {
            console.log('[v] rendering Gists', this.el);
            $(this.el).html(this.template({collection: this.collection.toJSON()}));
            return this;
        }

    });

}).call(this, window.app.views);
