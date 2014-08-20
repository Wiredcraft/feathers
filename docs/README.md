feathers
========

**feathers** wants to share a lot of best practices on coding with AngularJS with you.

## Build

```
$ npm install
$ node metalsmith.js
$ node web-server.js
```

Now go to [http://localhost:3000](http://localhost:5000)

## Deploy

```
$ git add -f docs/build
$ git commit -m "commit for gh-pages"
$ git subtree push --prefix docs/build origin gh-pages
```

