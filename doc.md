# A quick overview of structure 

    .
    | feathers  
    |____________________________________________
    |
    | | _includes
    |		| collection
    |				   | collection.js 
    |
    |		| lib
    |		    | css
    |		    | js
    |
    |		| model
    |			  | model.js
    |
    |		| template
    |		 		 | model._
    |		 		 | collection._
    |
    |		| view
    |		 	 | modelView.js
    |		 	 | collectionView.js
    |
    |		| init.js
    |		| router.js
    |		| template.html
    |
    | | _layout
    | | _site
    |
    |  …
    |
    |  _config.yml
    |  app.css
    |  app.js
    |  index.html
    |____________________________________________
	
* `_includes` : It contains MVC framework, template and libraries.
	* MVC framework : initializing application in `init.js` and setting router in `router.js`, views, models and colleciont have their own folder.
	* css/ theme : Add css files to the css folder below the lib folder and add the links' path to the `app.css` therefore it will be loaded at once.
	* js/ libraries :  Add js files to the js folder below the lib folder and add the links' path to the `app.js` therefore it will be loaded at once.
	* template : Add specific template file to the template folder and link to the `templates.html`, this will combine and load all templates.	
* `_layouts` : Layout templates
* `_site` : Automatically generated site by jekyll

This shows where you should put those files to start also may want to create specific and appropriate `_config.yml` file follow the [jekyll configuration](https://github.com/mojombo/jekyll/wiki/configuration), it also should contain a brief description of application/project. 

We tried to find it much easier to maintain and organize, it wrapped up all MVC framework based on jekyll automatic generation, it set up the way to build therefore it would be as simple as creating new model or collection even the views, well-associated templates, themes and plugins too.





# A model definition

    .
    | feathers - Model
    |____________________________________________
    |
    | | _includes
    |		| model
    |			  | model.js
    |
    |		| template
    |		 		 | model._
    |
    |		| view
    |		 	 | modelView.js
    |
    |		| router.js
    | …
    |____________________________________________
    
 
Mostly model shows a detail for a model and collection shows list of model, so each model will have these funtion at least such as model.js, modelView.js and template for that model. Here is the simplest structure of model below:
	
**e.g. model.js**
	
	(function(models) {
    
    	models.modelname = Backbone.Model.extend({
        
        	idAttribute: "id",
        
        	urlRoot: '{{site.apiurl}}',
        
        	defaults: {
            	id  : '',
            	name   : ''
        	}
    	});

	}).call(this, app.models);
	

# A collection definition

    .
    | feathers - Collection
    |____________________________________________
    |
    | | _includes
    |		| collection
    |			  | collection.js
    |
    |		| template
    |		 		 | collection._
    |
    |		| view
    |		 	 | collectionView.js
    |
    |		| router.js
    | …
    |____________________________________________
    
    
**e.g. collection.js**

	(function(collections, models) {

    	collections.collectionname = Backbone.Collection.extend({
        
        	model: models.modelname,

        	url: '{{site.apiurl}}'
    	});

	}).call(this, app.collections, app.models);









# A view definition

    .
    | feathers - View
    |____________________________________________
    |
    | | _includes
    |		| model
    |			  | model.js
    |
    |		| collection
    |			  	   | collection.js
    |
    |		| template
    |		 		 | model._
    |		 		 | collection._
    |
    |		| view
    |		 	 | modelView.js
    |		 	 | collectionView.js
    |
    |		| router.js
    | …
    |____________________________________________
    
	
**e.g. modelView.js**

	(function(views, models) {
    
		views.ModelView = views.Model.extend({        
        	initialize: function(options) {
            	this.template =  _.template($('#tpl-model').html());
            	this.model =  new models.modelname({ id: options.id});
        	},
        
        	render: function(callback) {
            	this.renderModel(callback);
        	}
    	});

	}).call(this, app.views, app.models);


**e.g. collectionView.js**

	(function(views, collections) {

    	views.CollectionView = views.Collection.extend({
        
        	events: {},
        
        	initialize: function() {
            	this.template =  _.template($('#tpl-collection').html());
            	this.collection = new collections.collectioname();
        	},
        
        	render: function(callback) {
            	this.renderCollection(callback);
        	}
    	});

	}).call(this, app.views, app.collections);



# A router(controller) definition

    .
    | feathers - View
    |____________________________________________
    |
    | | _includes
    |		| model
    |
    |		| collection
    |
    |		| template
    |
    |		| view
    |
    |		| router.js
    | …
    |____________________________________________
    

**e.g. router.js**

	(function(routers, views, collections) {

    var Router = Backbone.Router.extend({
        
        routes:{
            ''             : 'main',
            'list'        	: 'collection',
            'list/:id'    	: 'model',
            …
        },

        initialize: function() {
            this.headerView = new views.Header();
            this.footerView = new views.Footer();
            this.appView = new views.AppView();
            
            // render header and footer
            this.headerView.render();
            this.footerView.render();
        },

        collection: function () {
            this.appView.loading(); // loader

            if (!this.CollectionView) {
                this.CollectionView = new views.CollectionView();
            }

            var that = this;
            this.collectionView.render(function(elem) {
                that.appView.render('#main', elem);
            });
        },

        model: function (id) {
            this.appView.loading();
            
            if (!this.ModelView) {
                this.ModelView = new views.ModelView({id : id});
            }

            var that = this;
            this.ModelView.render(function(elem) {
                that.appView.render('#main', elem);
            });
            
        },
        
        …

    });

    routers = new Router();
    Backbone.history.start();

	}).call(this, app.routers, app.views, app.collections);






