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
        
        hideError: function () {
            $.fancybox.close(true);
            this.$el.remove();
        },

        showError: function (msg) {
            var that = this;
            
            $(this.el).html(msg);

            $.fancybox( $(this.el))
        }
    });

    views.UI = new UI();

}).call(this, app.views);
