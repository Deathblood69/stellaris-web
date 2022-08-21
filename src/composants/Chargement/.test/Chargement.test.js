import {Chargement} from '../Chargement'
import {
  initialiserProviders
} from '../../../../../../../../www/workspace/template-react-js/src/fonctions/initialiserProviders'

const ReactTestRenderer = require('react-test-renderer')

test('Rendu composant de Chargement', () => {
  const testRenderer = ReactTestRenderer.create(
    initialiserProviders(<Chargement />),
  )
  expect(testRenderer).not.toBeUndefined()
})
