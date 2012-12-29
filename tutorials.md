## Getting started


Here, we create a simple example based on **feather** what we built. 

This will show you how **feathers** can handle your MVC framework, every time you build an app, you need to spend too many time to figure the structure out and that was the point where we started from. 

[Backbone](http://backbonejs.org) provides can use those basic infrastructure, and [feathers](https://github.com/Wiredcraft/feathers/wiki/) provides real usable and handy structure. Now, we can start building application based on **feathers** without considering how to combine those basic infrastructure. 



## Example: Listing a Github user's gists

We want to assume that **feathers** can handle model and collection in easy way, and make sure it can interact with real API what we build or public API so we will show you how it works through this example. 


### How to load the application
	

For easy to maintain, We separate model and collection and as you can see below the box, here is the way to load application. After initializing application it renders each views through the router.

	init.js -> router.js -> app.js -> MVC
	


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

There are two different models, first model is one that named **gist.js** (render latest gists) and other model is named **usergist.js** (render user's gists).


This example interacts with [Github API](http://developer.github.com), especially focused on [Github API:Gists](http://developer.github.com/v3/gists/) so we render the latest gists list and simply we add search bar to search and list specific users' gists history. 

* Models 
	- gist.js
    - usergist.js
    
    
* Collections :
	- gists.js
	- usergists.js


Here are the APIs what we used for each model : 

* `gist.js` : https://api.github.com/gists
* `usergist.js` : https://api.github.com/users/:username/gists

