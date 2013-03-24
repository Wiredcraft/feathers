App.module('Model', function() {
    var Model = Backbone.Model.extend({ 
        initialize: function () {
            this.urlRoot = '{{site.apiurl}}/login';
        },

        validate: function (attr) {
            if (attr.username == '') {
                return { message : 'Username can\'t be empty!' };
            }

            if (attr.password == '') {
                return { message : 'Password can\'t be empty!' };
            }
        }
    });

    this.Login = Marionette.Controller.extend({
        _save: function (options) {
            var model = new Model();

            // Catch validate error
            model.bind('invalid', function (model, error) {
                App.vent.trigger('message:error', error);
            });

            model.save(options.oAttr, {
                success : options.success,
                error : options.error
            });
        },

        save: function (oAttr) {
            var deferred = $.Deferred();

            this._save({
                oAttr : oAttr,
                success : function(model){ deferred.resolve(model); },
                error : function (model, response) {
                    if (response.status) {
                        var oMsg = { message: 'Sorry, your username or password is wrong!' };
                        App.vent.trigger('message:error', oMsg);
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