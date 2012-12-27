(function(views) {

    // UI functional
    var UI = Backbone.View.extend({
        
        el: '#prompt',
        
        events: {
            
        },
        
        initialize: function (msg) {
            $(this.el).html(msg);
        },
        
        loading: function () {
            $.fancybox.showLoading(); 
        },

        loaded: function () {
            $.fancybox.hideLoading();
        },
        
        hideError: function () {
            $.fancybox.close(true);
        },

        showError: function () {
            var that = this;
            
            $.fancybox( $(this.el), {
                padding: 0,
                closeBtn: false,
                afterClose: function() {
                    that.hideError();
                }
            })
        }
    });

    views.UI = new UI();

}).call(this, app.views);
