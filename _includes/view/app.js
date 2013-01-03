(function(views) {

    views.AppView = Backbone.View.extend({

        el: '#app',

        events: {
            
        },

        initialize: function() {
        
        },

        loading: function () {
            this.$('#prompt').show().html('<div class="loader"><span>Loading ...</span></div>');
        },

        loaded: function () {
            this.$('#prompt').hide();
        },

        render: function (id, sHtml) {
            this.$(id).html(sHtml);
            this.loaded();
        }

    });

}).call(this, app.views);
