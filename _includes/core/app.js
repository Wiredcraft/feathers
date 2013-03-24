// define a app
var App = (function () {
    var App = new Marionette.Application();

    App.addRegions({
        header: '#header',
        message: '#message',
        main: '#main'
    });

    App.startSubApp = function(appName, args){
        var currentApp = App.module(appName);
        if (App.currentApp === currentApp){ return; }

        if (App.currentApp){
            App.currentApp.stop();
        }

        App.currentApp = currentApp;
        currentApp.start(args);
    };

    App.on('initialize:after', function(){
        if (Backbone.history){
            Backbone.history.start();
        }
    });

    return App;
})();