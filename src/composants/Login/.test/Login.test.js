import {
  initialiserProviders
} from '../../../../../../../../www/workspace/template-react-js/src/fonctions/initialiserProviders'
import {Login} from '../Login'

const ReactTestRenderer = require('react-test-renderer')

test('Rendu composant de Login', () => {
  const testRenderer = ReactTestRenderer.create(initialiserProviders(<Login />))
  expect(testRenderer).not.toBeUndefined()
})
