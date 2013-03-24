App.module('Model', function() {
    var Model = Backbone.Model.extend({ 
        initialize: function () {
            this.urlRoot = '{{site.apiurl}}/user';
        }
    });

    this.User = Marionette.Controller.extend({
        _get: function(options){
            var model = new Model();
            
            model.fetch({
                success : options.success,
                error : options.error
            });
        },

        get: function(){
            var deferred = $.Deferred();

            this._get({
                success : function(model){ deferred.resolve(model); },
                error : function (model, response) {
                    if (response.status) {
                        deferred.resolve();
                    } else {
                        // Exception: can't connect to server
                        App.vent.trigger('error', response);
                    }
                }
            });

            return deferred.promise();
        }
    });
});