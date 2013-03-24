App.module('Login', function(){
    var LoginView = Backbone.Marionette.ItemView.extend({
        id: 'login',
        
        tagName: 'form',
        
        template: JST['loginForm'],
        
        events: {
            'click .button': 'login'
        },
    
        login: function () {
            var login = new App.Model.Login(),
                oData = {
                    username: this.$('#username').val(),
                    password: this.$('#password').val()
                };

            $.when(login.save(oData)).then(function () {
                App.Controller.login();
            });
        }
    });

    this.startWithParent = false;

    this.addInitializer(function(){
        var loginView = new LoginView();
        App.main.show(loginView);
    });
});