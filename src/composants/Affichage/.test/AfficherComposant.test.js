import {
  initialiserProviders
} from '../../../../../../../../www/workspace/template-react-js/src/fonctions/initialiserProviders'
import {AfficherComposant} from '../AfficherComposant'

const ReactTestRenderer = require('react-test-renderer')

test('Rendu composant de Affichage', () => {
  const testRenderer = ReactTestRenderer.create(
    initialiserProviders(<AfficherComposant />),
  )
  expect(testRenderer).not.toBeUndefined()
})
