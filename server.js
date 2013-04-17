var flatiron = require('flatiron'); 
var app = flatiron.app; // Framework components for node.js and the browser
var ecstatic = require('ecstatic'); // A simple static file server middleware - Express & Flatiron
var util = require('util');
var fs = require ('fs'); //
var path = require ('path'); //  

app.use(flatiron.plugins.http, {
  buffer: false,
  before: [
    ecstatic({ root: __dirname })
  ]
});

app.start(3000);