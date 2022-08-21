import {
  initialiserProviders
} from '../../../../../../../../www/workspace/template-react-js/src/fonctions/initialiserProviders'
import {DialogSupression} from '../DialogSupression'

const ReactTestRenderer = require('react-test-renderer')

// TODO: FAire fonctionner le useLocation
test('Rendu composant de DialogSupression', () => {
  const testRenderer = ReactTestRenderer.create(
    initialiserProviders(<DialogSupression />),
  )
  expect(testRenderer).not.toBeUndefined()
})
