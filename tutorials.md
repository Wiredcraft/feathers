## Getting started


Here, we create a simple example based on **feather** what we built. 

This will show you how **feathers** can handle your MVC framework, every time you build an app, you need to spend too many time to figure the structure out and that was the point where we started from. 

[Backbone](http://backbonejs.org) provides can use those basic infrastructure, and [feathers](https://github.com/Wiredcraft/feathers/wiki/) provides real usable and handy structure. Now, we can start building application based on **feathers** without considering how to combine those basic infrastructure. 



## Example: Listing a Github user's gists

We want to assume that **feathers** can handle model and collection in easy way, and make sure it can interact with real API what we build or public API so we will show you how it works through this example. 


### Workflow
	

For easy to maintain, We separate model and collection and as you can see the box below, here is the way to load application. 

	init.js -> router.js -> app.js -> MVC

After initializing application it renders each views through the router.
	

#### init.js

Initializing the app which has data that we want to handle. Here, we have those models, collections ,views and routers: 

	window.app = {
    	collections: {},
    	models: {},
    	views: {},
    	routers: {},
    	states: {}
    };


#### router.js 

Application renders partial views through the router to show the result. It gets the status of url then gets the right data and change the page views.

	(function(routers, views, collections) {
		
		…
	
	}).call(this, app.routers, app.views, app.collections);
	


#### app.js

This is the middle of interaction between views, it renders proper view what should be rendered. 


router.js - 

#### models and collections with interacting Github API


This example interacts with [Github API](http://developer.github.com), especially focused on [Github API:Gists](http://developer.github.com/v3/gists/) so we render the latest gists list and public gists lists, basically we add search bar to search and list specific users' gists history. We set few different models and it shows how easy it can be loaded :

**Models** what we set : 

1. gist.js : rendering the latest gists
2. publicGist.js : rendering the public gists
3. user.js : rendering specific users gists

**Collections** matched with these models the list below : 

1. gists.js 
2. publicGists.js
3. users.js

Here are the APIs what we used for each model : 

* `gist.js` : https://api.github.com/gists
* `usergist.js` : https://api.github.com/users/:username/gists


### Setting up application

In the router, it initializes and renders header and footer views first after this it renders specific models or collection accroding to the page. 

Here, we will take a quick view how the gists' list(collection) rendered, e.g. **gists** part of application.



	  C	 	   router.js (controller)
    _______________|___________________________________________________
     		       |
		         app.js
	  V            | 
	          collection.js --- gistlistView.js 
	___________________________________|_______________________________
		 							   |
						   		     gists.js (collection)
	  M 							   |
	 						   	      gist.js (model)


	
#### router.js 
**router** : *../_includes/router.js*


	(function(routers, views, collections) {
		var Router = Backbone.Router.extend({

    	routes:{
        	'gists'     : 'gists',
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
            
    	gists: function () {
			this.appView.loading();
        	this.footerView.select('gists');

        	if (!this.gistListView) {
            	this.gistListView = new views.GistListView();
        	}

        	var that = this;
        	this.gistListView.render(function(elem) {
            	that.appView.render('#main', elem);
        	});
    	}, 
    	…
    
    	routers = new Router();
    	Backbone.history.start();

	}).call(this, app.routers, app.views, app.collections);


From router starts, it will take few seconds since it loads items from github, so you may see a **loading** event, `this.appView.loading();`,  

This is loaded in light way with pure css(not to rely on plugins) It renders through a view named `app.js` also in `footer` view it can be selected specific tab of footer. 

`gistListView` renders a correct data and elements send to `appView`. At first `gistListView` gets data and renders template and then callsback element contained. After this `appView` renders function then posts to the page to should be rendered. We will keep looking into this view, `app.js` :

#### app.js
**view** : *../_includes/view/app.js*

	(function(views) {

    views.AppView = Backbone.View.extend({

        el: '#app',

        loading: function () { ... },

        loaded: function () { ... },
        
        render: function (id, sHtml) {
            this.$(id).html(sHtml);
            this.loaded();
        }

    });

	}).call(this, app.views);


We can get the proper model or collection since it is rendered by appView after all so we can easily understand what `appView` is exactly doing between those views and router, it is a kind of middle controller also it exchanges those common function. Let's take a close look at other views`collection.js` and `gistlistView.js` below:


#### collection.js 
**view** : *../_includes/view/collection.js*

In the router, it knows that the application should get through the `model.js` of `collection.js` so able to fetch model or collection so it rendered `collection.js` in this case. 


	(function(views) {
    
    views.Collection = Backbone.View.extend({

        renderCollection: function (callback) {
            var that = this;
            this.collection.fetch({
                success: function(collection) {
                    if (collection.length) {
                        $(that.el).html( that.template({ collection: collection.toJSON() }) );
                    } else {
                        $(that.el).html( 'Can\'t find the data you want.' );
                    }
                    callback($(that.el));
                },
                error: function(coll, res) {
                    if (res.status === 404) {
                        // TODO: handle 404 Not Found
                    } else if (res.status === 500) {
                        // TODO: handle 500 Internal Server Error
                    }
                }
            });
        }
    });

	}).call(this, app.views);



#### gistlistView.js
** view ** : *../_includes/view/gists/gistlistView.js*

This view initializes model and template here we can handle the specific events of handling view. 
  

	(function(views, collections) {

    	views.GistListView = views.Collection.extend({
        
        	events: {},
        
        	initialize: function() {
            	this.template =  _.template($('#tpl-gists').html());
            	this.collection = new collections.Gists();
        	},
        
        	render: function(callback) {
            	this.renderCollection(callback);
			}
    });

	}).call(this, app.views, app.collections);
	
#### gists.js 
**model(collection)** : *../_includes/collection/gists.js*

This is a collection but as we know this is a collection of its model, so it is come from model-`Gist` so here we may need to take a look at its model too. 

	(function(collections, models) {

    	// Gists Collection 
    	collections.Gists = Backbone.Collection.extend({
        
        	model: models.Gist,

        	url: '{{site.apiurl}}'
        
    	});

	}).call(this, app.collections, app.models);
	
	
#### gist.js 
**model** : *../_includes/model/gist.js*
    
    models.Gist = Backbone.Model.extend({
     
     	idAttribute: "id",
     
     	urlRoot: '{{site.apiurl}}',
     	     
     	defaults: {
         	public  : '',
         	created_at   : '',
         	updated_at : '',
         	html_url    : ''
     	},
		… 
    });

As a default setting, we have the idAttribute, url location and defaults values.


#### Template
**template**:../_includes/template/

	|-------------------------------------------
	| ./_includes/template/
	|     			   |-footer._
	|     			   |-header._
	|				   | … 
	|      			    \__________________
	|
	| ./_includes/template/gists
	|     			   		 |-gist._
	|     			   		 |-gists._
	|      			    	  \__________________
	|  … 
	|-------------------------------------------

This is the way how to create the template file and those files should be included in `_includes/templates.html` then it will be rendered automatically. Here is the example below:

	<script id='tpl-header' type='text/html'>{% include template/header._ %}</script>

#### Themes and plugins
**css**:../_includes/lib/css/

	|-------------------------------------------
	| ./_includes/lib/css/
	|     			   |-normalize.css
	|     			   |-style.css
	|     			   | … 
	|      			    \__________________
	|
	|-------------------------------------------

**plugins**:../_includes/lib/js/

	|-------------------------------------------
	| ./_includes/lib/js/
	|     			   |-backbone-min.js
	|     			   |-jquety-1.8.2-min.js
	|     			   |-underscore-min.js 
	|				   | … 
	|      			    \__________________
	|
	| ./_includes/lib/js/plugin/
	|     			   		|-fancybox.js
	|     			   		|-transtion.js
	|				   		| … 
	|      			    	 \__________________
	|  	
	|-------------------------------------------

 