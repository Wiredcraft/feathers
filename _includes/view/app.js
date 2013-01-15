(function(views) {

    views.AppView = Backbone.View.extend({

        el: '#app',

        events: {
            
        },

        initialize: function() {
        
        },

        viewMaker: function (config) {
            var that = this,
                arg = config.arg,
                elemId = config.elemId,
                viewName = config.viewName,
                selectId = config.selectId;
            
            // loading
            this.appView.loading();
            

            if (arg) {
                // model view
                // insurance the old view could be remove
                // if (route[viewName]) { 
                //     route[viewName].remove();
                // };
                this[viewName] = new views[viewName]({arg : arg});
            } else {
                // collection view
                this[viewName] = new views[viewName]();
            }
            
            // tab highlight 
            if (selectId) {
                this.footerView.select(selectId);
            }

            this[viewName].render(function(elem) {
                // loading
                that.appView.loaded();
                that.appView.render(elemId, elem);
            });
        },

        loading: function () {
            this.$('#prompt').show();
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
