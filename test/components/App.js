import test from 'tape'
import App from '../../src/components/App'
import createComponent from '../utils/create-component'

test('App component', function (assert) {

  const app = createComponent(App)

  assert.equal(app.props.className, 'app', 'app should have the app className.')

  assert.end()
})
