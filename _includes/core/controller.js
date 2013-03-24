App.module('Controller', function() {
    var self = this;

    var HeaderView = Backbone.Marionette.ItemView.extend({
        className: 'header-inner',

        template: JST['loggedHeader'],
        
        events: {
            'click #logout': 'logout'
        },

        getTemplate: function(){
            if (this.model){
                return JST['loggedHeader'];
            } else {
                return JST['loginHeader'];
            }
        },

        logout: function () {
            var logout = new App.Model.Logout();

            $.when(logout.get()).then(function (model) {
                self.updateHeader();
            });
        }
    });

    this.profile = function() {
        var profile =  new App.Model.Profile();

        $.when(profile.get()).then(function (oProfile) {
            App.startSubApp('Profile', { 
                profile : oProfile
            });

            // router change
            self.router.navigate('profile');
        });
    };

    this.login = function () {
        // This is a part of user information, we get the login and off states here
        var user =  new App.Model.User();

        $.when(user.get()).then(function (oUser) {
            var headerView = new HeaderView({ model : oUser});
            App.header.show(headerView);
            
            if (oUser) {
                /* If user has been logged-in, it directs to the profile page 
                   else it still reaches the login page */ 
                if (location.hash == '#login') { self.profile(); }
            } else {
                App.startSubApp('Login');
                // Changing router
                self.router.navigate('login');
            }
        });  
    };

    this.errorpage = function() {
        App.startSubApp('ErrorPage');
    };

    this.Router = Marionette.AppRouter.extend({
        appRoutes: {
             '' : 'profile',
            'profile' : 'profile',
            'login' : 'login',
            '*action' : 'errorpage'
        }
    });

    this.addInitializer(function(){
        this.login();

        this.router = new this.Router({
            controller: this
        });
    });
});