(function(views) {

    // This is the top of application UI.
    views.AppView = Backbone.View.extend({

        el: '#app',

        events: {
            
        },

        initialize: function() {
            
        },

        loading: function () {
            console.log('loading option');
            $('#app #prompt').html('<div class="loader"><span>Loading ...</span></div>');
        },

        loaded: function () {
            console.log('loaded');
            $('#app #prompt').css('display','none');
        },

        render: function (id, sHtml) {
            this.$(id).html(sHtml);
            // this.loaded();
        }

    });

}).call(this, app.views);
