import {Template} from '../Template'
import {
  initialiserProviders
} from '../../../../../../../www/workspace/template-react-js/src/fonctions/initialiserProviders'

const ReactTestRenderer = require('react-test-renderer')

test('Rendu page de Template', () => {
  const testRenderer = ReactTestRenderer.create(
    initialiserProviders(<Template />),
  )
  expect(testRenderer).not.toBeUndefined()
})
