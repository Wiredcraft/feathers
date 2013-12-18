# Feathers

![Monit](https://f.cloud.github.com/assets/1183541/1055973/89f9ec26-114b-11e3-9c3d-d091f956aec9.png)

## Why feathers?

`Feathers` is a project build on top of
[ngBoilerplate](https://github.com/joshdmiller/ng-boilerplate) by
[joshdmiller](https://github.com/joshdmiller). This project has a lot of best
practices on coding with AngularJS. We added some more new features to meet our own
needs. Like live compile [Compass](http://compass-style.org/) (we love SASS
except it's compiled with `RUBY`), and also we may want a server sometimes as
our code need to talk with server so we added `connect`.

There's also some other tools we've added to make it even awesome! Please take
time to check the code and feel free to pull a request if you think you can do
better than us.

## Quick Start

Install Node.js and then:

```sh
$ git clone git://github.com/Wiredcraft/feathers
$ cd feathers
$ sudo npm -g install grunt-cli karma bower
$ npm install
$ bower install
```

### For development

```
$ grunt dev
```

### Livereload

```
$ grunt live
```

### For Staging

```
$ grunt staging
```

### For Production

```
$ grunt production
```

Happy hacking!


## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
