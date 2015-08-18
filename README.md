# Feathers[![Travis-CI](https://travis-ci.org/Wiredcraft/feathers.svg)](https://travis-ci.org/Wiredcraft/feathers)
[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## Features

* **Babel** ES6 transcompiler
* **Webpack** to manage and bundle code(for hot-reload...)
* **Standard** for code style
* **Tape** for testing
* **Travis CI** integration
* **React** the UI

## Getting Started

### Clone the repo

```
git clone git@github.com:Wiredcraft/feathers.git <your-new-repo-name>
cd <your-repo-name>
rm -rf <.git> # strip the boilerplate .git config
git init # create your own .git config
git add .
git commit -m 'Inital commit'
```

### Run the code

To make sure the code style is consistence, run `npm run check`, we use [standard](https://github.com/feross/standard) here.

`npm install` to install all dependencies

`npm start` to start develop

`npm test` to start front-end test for react component

`npm run dist` to build for production
