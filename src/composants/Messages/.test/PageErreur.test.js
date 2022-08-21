import {
  initialiserProviders
} from '../../../../../../../../www/workspace/template-react-js/src/fonctions/initialiserProviders'
import {PageErreur} from '../PageErreur'

const ReactTestRenderer = require('react-test-renderer')

test('Rendu composant de PageErreur', () => {
  const testRenderer = ReactTestRenderer.create(
    initialiserProviders(<PageErreur />),
  )
  expect(testRenderer).not.toBeUndefined()
})
