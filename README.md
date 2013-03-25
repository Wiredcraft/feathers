## What is feathers?

**[feathers](https://github.com/Wiredcraft/feathers)** is a [Jekyll](https://github.com/mojombo/jekyll) and [Marionette.js](http://marionettejs.com) boilerplate for building static clients for (JSON RESTful) APIs. It is intended to be bare and is originally designed as a starting point to build interface on top of APIs developed with [Carcass](http://github.com/devo-ps/carcass).

## Why Feathers?

When adopting a [service-oriented architecture](http://en.wikipedia.org/wiki/Service-oriented_architecture), the various interfaces (Web, mobile) can be built as mere static clients. With the rise of Javascript frameworks such as Backbone.js, it is possible to write very efficient [single page applications](http://en.wikipedia.org/wiki/Single-page_application).

**feathers** helps you get there with:

1. **Better code organization** which ensures you separate your structures and concepts in individual files.
1. **Common UI concepts** like lists, error display or transitions.
1. **Various utilities** which you regularly need when building static HTML clients (same origin policy workarounds for example).

## How does it work ?

**feathers** is based on [Jekyll](http://github.com/mojombo/jekyll) combined with [Marionette.js](http://marionettejs.com). It makes a few assumptions as to what you want to build and expects you to build your (Backbone.js) models, views and templates according to a set of simple convention.

Beyond the regular Jekyll files, most of the interesting code (that is Marionette apps) is located in the `/_includes` folder:

* The meat of the application is spread over the `collections`, `models`, `apps` & `core`:
    * `collections` & `models`: these are normal backbone.js models and collections, we would like to use it with [jQuery deferred](http://api.jquery.com/jQuery.Deferred/).
    * `apps`: this is a sub-application. It will reach the page following the specific url path.
    * `core`:
        * `app.js`: defines a marionette application with regions and some useful function globally,
        * `controller.js` : defines router for entire application,
        * `cors.js` : special for cross domain,
* And then some:
    * `vendor`: this is a directory for basic library for single page application.
    * `plugins`: message management and loading handler or anything else we prototyped as a module that can be implemented in any situation.
    * `templates`: templates 
    * `less`: styles
    * `gruntfile.js`: an exported module by grunt, including **watch file**,**make templates** and **complie less** so it returns automatically.
    * `package.json`: Grunt dependency

* For avoiding a conflict with jekyll, we implement this file to under the `_includes` directory.

## Getting started
As we are using grunt to automate generating things, such as change less files to css, make templates and so on.

So you should change the folder to `_includes`, and key in `npm install` to install the related dependency.

After installed, you just need to simple key in `grunt`, it will keep detecting the files and update the files automatically.

*Do not try to put `node_modules` into the root directory, otherwise will conflict with jekyll.*

### Add a template

1. Switch to `_includes/templates/template`

2. Save html as a file, the file name would be the template name under JST, such as template: JST['login']

*If the grunt is running, after save, you could see the changes in templates.js*

### Add an application (*aka* Marionnette sub-app)

1. Switch to `_includes/apps`
2. Write the code like this
	
		App.module('ErrorPage', function(){
		
		    var ErrorView = Backbone.Marionette.ItemView.extend({
		        id: 'errorpage',
		        template: JST['errorPage']
		    });
		    
		    // To prevent starting with the entire app
		    this.startWithParent = false;
		
		    this.addInitializer(function(){
		        var errorView = new ErrorView();
		        App.main.show(errorView);
		    });
		});
		
3. Add to `assets.js`
   
   
      	{% include apps/errorpage.js %}
      
### Add css
1. Switch to `_includes/less`
2. In file `colors.less` , you could define some color variable for global use
3. In file `elements.less`, gives you some less functions to use.

		@import 'elements.less';
		@import 'colors.less';
        
Normally you may want to add these to your new less file,to use their colors and funtions.

Same as template, if the grunt is running, after save, you could see the changes in `assets.css`.

### Add router
1. Switch to `_includes/core/`
2. In `controller.js`, add the router as you want under `appRoutes`. 
	

	    appRoutes: {
	         '' : 'profile',
	        'profile' : 'profile',
	        'login' : 'login',
	        '*action' : 'errorpage'
	    }

3. Dont forget to add related actions. In actions you could get data and start the sub applications.

	    this.profile = function() {
	        var profile =  new App.Model.Profile();
	
	        $.when(profile.get()).then(function (oProfile) {
	            App.startSubApp('Profile', { 
	                profile : oProfile
	            });
	
	            // router change
	            self.router.navigate('profile');
	        });
	    };
	
### About view
In fact, we have already seen in this section of the 'Add an application', but it's necessary to high light again why we use marionette since it extended the view much better.

Normally,there are three frequent changes in this area of single page, so we added it to regions as a container.
	
	App.addRegions({
   		header: '#header',
   		message: '#message',
      	main: '#main'
   	});
   		 	
If the page needs to change, it is just enough to replace the inside view, then previous rendered view will be clear promptly.

We could add a layout in one region, and this layout has its own region, and each region can add a view.

	var Layout = Backbone.Marionette.Layout.extend({
        id: 'servers',

        template: JST['mainLayout'],

        regions: {
            menu: '#menu',
            content: '#content'
        }
    });
    
And there are marionette views we can use as well.

* [**Marionette.ItemView**](https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.itemview.md): A view that renders a single item
* [**Marionette.CollectionView**](https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.collectionview.md): A view that iterates over a collection, and renders individual `ItemView` instances for each model
* [**Marionette.CompositeView**](https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.compositeview.md): A collection view and item view, for rendering leaf-branch/composite model hierarchies
* [**Marionette.View**](https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.view.md): The base View type that other Marionette views extend from (not intended to be used directly)


### Run the damn thing

1. Run jekyll --server --auto
1. Go to http://localhost:4000,
1. Great success! High five!
