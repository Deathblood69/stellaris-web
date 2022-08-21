import EnhancedTable from '../EnhancedTable'
import {
  initialiserProviders
} from '../../../../../../../../www/workspace/template-react-js/src/fonctions/initialiserProviders'

const ReactTestRenderer = require('react-test-renderer')

test('Rendu composant de Template', () => {
  const testRenderer = ReactTestRenderer.create(
    initialiserProviders(<EnhancedTable />),
  )
  expect(testRenderer).not.toBeUndefined()
})
