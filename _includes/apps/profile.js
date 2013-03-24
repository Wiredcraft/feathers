App.module('Profile', function(){
    var ProfileFormView = Backbone.Marionette.ItemView.extend({
        id: 'profile',

        tagName: 'form',

        template: JST['profileForm'],
        
        events: {
            'click .button': 'save'
        },

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        save: function () {
            var oData = {
                    'name' : this.$('#name').val(),
                    'email' : this.$('#email').val()
                };
        
            this.model.save(oData, {
                success: function (argument) {
                    console.log(arguments,'success');
                },
                error: function (argument) {
                    console.log(arguments, 'error');
                }
            })
        }
    });

    // To prevent starting with the entire app
    this.startWithParent = false;

    this.addInitializer(function(options){
        this.profile = options.profile;

        var profileFormView = new ProfileFormView({ model : this.profile });
        App.main.show(profileFormView);
    });
});