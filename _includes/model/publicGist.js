(function(models) {
    
    //PublicGist Model
    models.PublicGist = Backbone.Model.extend({
        
        idAttribute: "id",
        
        urlRoot: '{{site.apiurl}}',

        
        defaults: {
            public  : '',
            created_at   : '',
            updated_at : '',
            html_url    : ''
        },

        validate: function(attrs) {
            var fields = ['public', 'created_at', 'updated_at', 'html_url'],
                errors = {};
            
            for (var i = 0; i < fields.length; i++) {
                if (!attrs[fields[i]]) {
                    errors[fields[i]] = fields[i] + ' required';
                }
            }

            if (_.keys(errors).length) {
                return {
                    errors: errors
                };
            }
        }

    });

}).call(this, app.models);
