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

        select: function(item) {
            // highlight tab
            $('.nav li').removeClass('active');
            $('.' + item).addClass('active');
        },
        
        _search: function() {
            var temp = $('#search_username').attr('value');
            console.log('search user:', temp);
            
            // GET /users/:user/gists
            var url = _.compact(['#user']);
            
            // var urljoin = url.join('/');
            // console.log('url : ' , urljoin);
            window.location.replace('http://localhost:4000/'+url);
        },
        
        render: function() {
            $(this.el).html(this.template());
            return this;
        }

    });

}).call(this, window.app.views);
