import {
  initialiserProviders
} from '../../../../../../../../www/workspace/template-react-js/src/fonctions/initialiserProviders'
import {MediaCard} from '../MediaCard'

const ReactTestRenderer = require('react-test-renderer')

test('Rendu composant de MediaCard', () => {
  const testRenderer = ReactTestRenderer.create(
    initialiserProviders(<MediaCard />),
  )
  expect(testRenderer).not.toBeUndefined()
})
