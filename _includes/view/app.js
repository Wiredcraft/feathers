(function(views) {

    // This is the top of application UI.
    views.AppView = Backbone.View.extend({

        el: '#app',

        events: {
            
        },

        initialize: function() {
            
        },

        loading: function () {
        
        },

        loaded: function () {
         
        },

        render: function (id, sHtml) {
            this.$(id).html(sHtml);
        }

    });

}).call(this, app.views);
