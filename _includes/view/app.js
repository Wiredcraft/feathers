(function(views) {

    views.AppView = Backbone.View.extend({

        el: '#app',

        events: {
            
        },

        initialize: function() {
        
        },


        viewMaker: function (route, selectId, viewName, elemId, arg) {
            // view render controller
            this.loading();
            
            if (!route[viewName]) {
                route[viewName] = arg ? new views[viewName]({arg : arg}) : new views[viewName]();
            }
            route[viewName].render(function(elem) {
                
                if (selectId) {
                    // tab highlight 
                    route.footerView.select(selectId);
                }
                route.appView.render(elemId, elem);

            });
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
