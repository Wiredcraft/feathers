## Getting started


Here, we create a simple example based on **feather** what we built. 

This will show you how **feathers** can handle your MVC framework, every time you build an app, you need to spend too many time to figure the structure out and that was the point where we started from. 

[Backbone](http://backbonejs.org) provides can use those basic infrastructure, and [feathers](https://github.com/Wiredcraft/feathers/wiki/) provides real usable and handy structure. Now, we can start building application based on **feathers** without considering how to combine those basic infrastructure. 



## Example: Listing a Github user's gists

We want to assume that **feathers** can handle model and collection in easy way, and make sure it can interact with real API what we build or public API so we will show you how it works through this example. 


### How to load the application
	

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


###  Workflow

In the router, it initializes and renders header and footer views first after this it renders specific models or collection accroding to the page. 

Here, we will take a quick view of **gists**(rendering collectio view) part of router.js. 


    gists: function () {
        this.appView.loading();
        
        this.footerView.select('gists');

        if (!this.gistsView) {
            this.gistListView = new views.GistListView();
        }

        this.appView.render('#main', this.gistListView.render().el);
    },
    
  
We also set loading option in light way with pure css, we tried not to rely on plugins.  It renders loading option effect through a view named `app.js` also in `footer` view it can be selected specific tab of footer. 

We get the proper model or collection and it is rendered by appView after all. First parameter is *id* which is used for rendering template and the second parameter is *view* which is used for rendering each view. 

  

	(function(views, collections) {

		//Gists collection View
    	views.GistListView = views.Collection.extend({
        
        	events: {
        	},
        	
        	initialize: function() {
            	this.template =  _.template($('#tpl-gists').html());
            	this.collection = new collections.Gists();
        	},
        
        	render: function() {
            	var that = this;
            	this.getCollection(function(collection) {
                	var tpl = that.template({ collection: collection.toJSON() });
                	$(that.el).html(tpl);
            	});
            	return this;
        	}

    	});

	}).call(this, app.views, app.collections);
	

Fetching model and collection are fetched by **model.js** and **collection.js** , so each view is rendered by collection and model's extend view.
