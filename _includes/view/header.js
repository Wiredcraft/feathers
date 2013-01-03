(function(views) {

    // Header View
    views.Header = views.AppView.extend({
        
        el : this.$('#header'),

        events: {
            'keydown #search_username': 'filter'
        },

        initialize: function () {
            this.template = _.template($('#tpl-header').html());
        },
        
        filter: function (e) {
            var that = this;
            setTimeout(function () {
                var sVal = $(e.currentTarget).val(),
                    sUrl = '#users/' + sVal;
                if (sVal) {
                    that.$('#search').attr('href', sUrl);
                } else {
                    that.$('#search').attr('href', 'javascript:;');
                }
            },100)
        },

        render: function() {
            this.$el.html(this.template());
            return this;
        }

    });

}).call(this, app.views);
