import React, { PropTypes } from 'react'
import { Router, Route } from 'react-router'

import * as components from './components'

const {
  App
} = components

export default class Root extends React.Component {
  render () {
    const { history } = this.props
    return (
      <Router history={history}>
        <Route path='/' component={App} />
      </Router>
    )
  }
}

Root.propTypes = {
  history: PropTypes.object.isRequired
}
