---
name: feathers
template: default.hbt
---

## Why feathers

feathers is a starting point for your next [Angularjs](https://angularjs.org/)
project. Here we'd like to share a lot of best practices on coding with AngularJS
with you.

feathers use the following open sources projects:
- [AngularJS](https://github.com/angular/angular.js)
  AngularJS lets you write client-side web applications as if you had a smarter
  browser.
- [Angular-ui Router](https://github.com/angular-ui/ui-router)
  The de-facto solution to flexible routing with nested views
- [karma](https://github.com/karma-runner/karma)
  A simple tool that allows you to execute JavaScript code in multiple real
  browsers.
- [protractor](https://github.com/angular/protractor)
  Protractor is an end-to-end test framework for AngularJS applications
- [mocha](https://github.com/visionmedia/mocha)
  Mocha is a simple, flexible, fun JavaScript test framework for node.js and the
  browser. For more information view the documentation.
- [chai](https://github.com/chaijs/chai)
  Chai is a BDD / TDD assertion library for node and the browser that can be
  delightfully paired with any javascript testing framework.
- [sinon](https://github.com/cjohansen/Sinon.JS)
  Standalone and test framework agnostic JavaScript test spies, stubs and mocks.

Moreover, with these cool things.
- [jade](https://github.com/visionmedia/jade)
- [node-sass](https://github.com/sass/node-sass)
- [coffeescript](https://github.com/jashkenas/coffeescript)

---

## Getting Start

### Quick Start

```
$ git clone https://github.com/Wiredcraft/feathers.git
$ cd feathers
$ npm install && bower install
$ gulp dev
```

### Development

First of all, you should start an *dev server*.

```
$ gulp dev
```

### Tests

#### Unit Tests

libs:
- [karma](https://github.com/karma-runner/karma)
- [mocha](https://github.com/visionmedia/mocha)

```
$ karma start
```

#### e2e Tests

libs:
- [protractor](https://github.com/angular/protractor)
- [mocha](https://github.com/visionmedia/mocha)

```
$ webdriver-manager start
$ gulp dev
$ gulp test:e2e
```

### Build Documentation
- [metalsmith](https://github.com/segmentio/metalsmith)

```
$ cd docs
$ npm install
$ node metalsmith.js
$ node web-server.js
```

Now go to [http://localhost:3000](http://localhost:3000).

### Deploy Document

```
$ cd ..
$ pwd
~/workspace/feathers
$ git add -f docs/build && git commit -m "commit for gh-pages"
$ git sutree push --prefix docs/build origin gh-pages
```

---

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

---

## About

- [Versions](https://github.com/Wiredcraft/feathers/releases)
- [Change log](https://github.com/Wiredcraft/feathers/commits/master)
- [Authors](https://github.com/Wiredcraft/feathers/graphs/contributors)

<footer id='footer'>
  <p>Built by <a href='http://wiredcraft.com'
      target='_blank' id='wiredcraft-logo'><i class='icon-wiredcraft'></i></a>.</p>
</footer>
