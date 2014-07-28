# Feathers

![Monit](https://f.cloud.github.com/assets/1183541/1055973/89f9ec26-114b-11e3-9c3d-d091f956aec9.png)

## Why feathers?

`Feathers` wants to share a lot of best
practices on coding with AngularJS with you.

## About

This app uses the following:

#### Languages
* [jade templates](http://jade-lang.com/)
* [node-sass](https://github.com/sass/node-sass)
* [coffeescript](http://coffeescript.org/)

#### Libraries
* [angularjs](http://angularjs.org/)
* [angular-ui router](https://github.com/angular-ui/ui-router)

#### Testing
* [karma](http://karma-runner.github.io/0.12/index.html)
* [protractor](https://github.com/angular/protractor)
* [mocha](http://visionmedia.github.io/mocha/)
* [chai](http://chaijs.com/guide/installation/)
* [sinon](http://sinonjs.org/)

### Development

#### Start Dev Server
`gulp dev`

### Testing

#### Unit Tests

Unit tests use karma + mocha.

`karma start` - runs all tests in `test/unit/**/*.coffee`

#### E2E Tests

E2E Tests use protractor + mocha.


* `webdriver-manager start`
* `gulp dev`
* `gulp test:e2e` - runs all tests in `test/e2e/**/*.coffee`


## Quick Start

Install Node.js and then:

```sh
$ git clone git://github.com/Wiredcraft/feathers
$ cd feathers
$ npm install
$ bower install
```

Happy hacking!

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request


## LICENSE

MIT