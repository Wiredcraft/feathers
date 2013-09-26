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
$ grunt dev
```

Happy hacking!

## Purpose

`ngBoilerplate` is designed to make life easy by providing a basic framework
with which to kickstart AngularJS projects. It contains a best-practice
directory structure to ensure code reusability and maximum scalability.
ngBoilerplate also comes prepackaged with the most popular design frameworks
around: [Twitter Bootstrap](http://getbootstrap.com),
[Angular UI](http://angular-ui.github.io),
[Angular Bootstrap](http://angular-ui.github.io/bootstrap),
[Font Awesome](http://fortawesome.github.com/Font-Awesome), and
[LESS](http://lesscss.org). Lastly, it contains a sophisticated
[Grunt](http://gruntjs.org)-based build system to ensure maximum productivity.
All you have to do is clone it and start coding!

## Philosophy

The principal goal of `ngBoilerplate` is to set projects up for long-term
success.  So `ngBoilerplate` tries to follow best practices everywhere it can.
These are:

- Properly orchestrated modules to encourage drag-and-drop component re-use.
- Tests exist alongside the component they are testing with no separate `test`
  directory required; the build process should be sophisticated enough to handle
  this.
- Speaking of which, the build system should work automagically, without
  involvement from the developer. It should do what needs to be done, while
  staying out of the way. Components should end up tested, linted, compiled,
  and minified, ready for use in a production environment.
- Integration with popular tools like Bower, Karma, and LESS.
- *Encourages* test-driven development. It's the only way to code.
- A directory structure that is cogent, meaningful to new team members, and
  supporting of the above points.
- Well-documented, to show new developers *why* things are set up the way they
  are.
- It should be responsive to evidence. Community feedback is therefore crucial
  to the success of `ngBoilerplate`.

But `ngBoilerplate` is not an example of an AngularJS app: this is a
kickstarter. If you're looking for an example of what a complete, non-trivial
AngularJS app that does something real looks like, complete with a REST backend
and authentication and authorization, then take a look at
[`angular-app`](http://github.com/angular-app/angular-app), which does just
that - and does it well.

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request