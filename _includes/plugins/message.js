App.module('Message', function(){
    var MessageView = function (className, oInfo) {
        var View = Backbone.Marionette.ItemView.extend({
            tagName: 'p',

            className: className,

            events: {
                'click .close': 'close'
            },

            initialize: function () {
                // For hiding message
                var self = this;
                
                $(window).bind('hashchange', function() {
                    self.close();
                })
            },

            close: function() {
                this.$el.hide();
            },

            render: function () {
                this.$el.html(Backbone.Marionette.Renderer.render(JST['message'], oInfo));
                return this;
            }
        });

        return new View();
    }
    // Error management
    App.vent.on('error', function(response){
        var messageView;
        
        switch (response.status) {
            case 401:
                App.Controller.login();
                break;

            case 403:
                App.Controller.login();
                break;
            
            case 404:
                messageView = new MessageView('error', JSON.parse(response.responseText));
                break;
            
            case 500:
                messageView = new MessageView('error', JSON.parse(response.responseText));
                break;
            
            case 0:
                messageView = new MessageView('error', {
                    message: 'Sorry, can\'t connect the server!'
                });
        }
        
        if (messageView) App.message.show(messageView);
    });

    // The way of triggering each type of messages 
    App.vent.on('message:normal', function(oInfo){
        var messageView = new MessageView('normal', oInfo);
        App.message.show(messageView);
    });

    App.vent.on('message:error', function(oInfo){
        var messageView = new MessageView('error', oInfo);
        App.message.show(messageView);
    });

    App.vent.on('message:success', function(oInfo){
        var messageView = new MessageView('success', oInfo);
        App.message.show(messageView);
    });
});