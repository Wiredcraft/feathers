import React from 'react'

export default class App extends React.Component {

  displayName: 'App'

  render () {
    return (
      <div className='app'>
        <h1> Feathers - A front-end starter kit. </h1>

        <h3>### What are used here</h3>
        <ul>
          <li>**Babel** ES6 transcompiler</li>
          <li>**Webpack** to manage and bundle code</li>
          <li>**Standard** for code style</li>
          <li>**Mocha** for testing</li>
        </ul>

        <h3>### Notes for development</h3>
        <ul>
          <p>
          To make sure the code style is consistence, run `npm run check`, we use [standard](https://github.com/feross/standard) here.
          </p>

          <li>`npm install` to install all dependencies</li>
          <li>`npm start` to start develop</li>
          <li>`npm test` to start front-end test for react component</li>
          <li>`npm run dist` to build for production</li>
        </ul>
      </div>
    )
  }

}
