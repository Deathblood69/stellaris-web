import {Connexion} from '../Connexion'
import {
  initialiserProviders
} from '../../../../../../../../www/workspace/template-react-js/src/fonctions/initialiserProviders'

const ReactTestRenderer = require('react-test-renderer')

test('Rendu page de connexion', () => {
  const testRenderer = ReactTestRenderer.create(
    initialiserProviders(<Connexion />),
  )
  expect(testRenderer).not.toBeUndefined()
})
