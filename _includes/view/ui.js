(function(views) {

    // UI functional
    var UI = Backbone.View.extend({
        
        el: '#prompt',
        
        events: {
            
        },
        
        initialize: function () {
            
        },
        
        loading: function () {
            console.log('loading option');
            $('#app .base').html('<div class="loading"><span>Loading ...</span></div>');
        },

        loaded: function () {
            console.log('loaded');
            $('#app .base').css('display','none');
        },

        showError: function (msg) {
            $('#main').html(msg);  
        }
    });

    views.UI = new UI();

}).call(this, app.views);
