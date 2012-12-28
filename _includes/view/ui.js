(function(views) {

    // UI functional
    var UI = Backbone.View.extend({
        
        el: '#prompt',
        
        events: {
            
        },
        
        initialize: function () {
            
        },
        
        loading: function () {
            $.fancybox.showLoading(); 
        },

        loaded: function () {
            $.fancybox.hideLoading();
        },

        showError: function (msg) {
            $('#main').html(msg);  
        }
    });

    views.UI = new UI();

}).call(this, app.views);
