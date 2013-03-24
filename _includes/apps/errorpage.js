App.module('ErrorPage', function(){
    var ErrorView = Backbone.Marionette.ItemView.extend({
        id: 'errorpage',
        template: JST['errorPage']
    });

    this.startWithParent = false;

    this.addInitializer(function(){
        var errorView = new ErrorView();
        App.main.show(errorView);
    });
});