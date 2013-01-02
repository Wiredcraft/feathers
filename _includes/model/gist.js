(function(models) {
    
    //Gist Model
    models.Gist = Backbone.Model.extend({
        
        idAttribute: "_id",
        
        urlRoot: '{{site.apiurl}}',

        
        defaults: {
            // name    : '',
            // email   : '',
            // company : '',
            // born    : new Date()
        },

        validate: function(attrs) {
            console.log(attrs,'~~~');
            // var fields = ['name', 'email', 'company', 'born'],
            //     len = fields.length,
            //     nameLenth = attrs.name ? attrs.name.length : null,
            //     compLenth = attrs.company ? attrs.company.length : null;
            //     errors = {};
            
            // for (var i = 0; i < len; i++) {
            //     if (!attrs[fields[i]]) {
            //         errors[fields[i]] = fields[i] + ' required';
            //     }
            // }

            // // check valid name
            // if (!nameLenth || (nameLenth < 2 || nameLenth > 100)) {
            //     errors.name = "invalid name";
            // }

            // // check valid company
            // if (!compLenth || (compLenth < 7 || compLenth > 100)) {
            //     errors.company = "invalid company";
            // }

            // // check valid email
            // if (!(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(attrs.email))) {
            //     errors.email = "invalid email";
            // }

            // if (_.keys(errors).length) {
            //     console.log(errors,'11');
            //     return {
            //         errors: errors
            //     };
            // }
        }

    });

}).call(this, app.models);
