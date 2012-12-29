(function(views) {

    // Header View
    views.Header = Backbone.View.extend({
        
        el: '#header',
        
        events: {
            'click #search' : '_search'
        },

        template: _.template($('script[name=header]').html()),

        initialize: function() {
            this.render();
        },
        
        _search: function() {
            var temp = $('#search_username').attr('value');
            console.log('search user:', temp);
            
            // GET /users/:user/gists
            // var url = _.compact(['#user','aimeesohn']);
            
            // var urljoin = url.join('/');
            // console.log('url : ' , urljoin);
            // window.location.replace('http://localhost:4000/'+url);
            // 
            // Models.Usergist = new Usergist({
            //     url : function() {
            //         var prefix = 'https://api.github.com/users/';
            //         return prefix + temp + '/gists';
            //     }
            // });
            app.collections.Usergists = new app.collections.Usergists(temp);
            
            app.collections.Usergists.fetch({
                success: function () {
                    console.log(arguments, 'sssss')
                },
                error: function () {
                    console.log(arguments, 'eeeeeeee')
                }
            });
            
            setTimeout(function(){
                window.location.replace('http://localhost:4000/#user');
            },8000);
            
        },
        
        render: function() {
            $(this.el).html(this.template());
            return this;
        }
    });

}).call(this, window.app.views);
