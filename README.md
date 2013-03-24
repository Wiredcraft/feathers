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

### Add a template

This rely on grunt, switch to `_includes/templates/template`

1. Save html as a file, the file name would be the template name under JST, such as template: JST['login']
1. Press npm install in terminal
1. Press grunt in terminal,you could see the changes in templates.js

### Adding an application (*aka* Marionnette sub-app)


### Run the damn thing

1. Run jekyll --server --auto
1. Go to http://localhost:4000,
1. Great success! High five!
