import {
  initialiserProviders
} from '../../../../../../../../www/workspace/template-react-js/src/fonctions/initialiserProviders'
import {BarreRecherche} from '../BarreRecherche'

const ReactTestRenderer = require('react-test-renderer')

test('Rendu composant de BarreRecherche', () => {
  const testRenderer = ReactTestRenderer.create(
    initialiserProviders(<BarreRecherche />),
  )
  expect(testRenderer).not.toBeUndefined()
})
