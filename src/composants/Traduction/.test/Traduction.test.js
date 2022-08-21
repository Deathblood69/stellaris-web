import {
  initialiserProviders
} from '../../../../../../../../www/workspace/template-react-js/src/fonctions/initialiserProviders'
import {Traduction} from '../Traduction'

const ReactTestRenderer = require('react-test-renderer')

test('Rendu composant de Traduction', () => {
  const testRenderer = ReactTestRenderer.create(
    initialiserProviders(<Traduction />),
  )
  expect(testRenderer).not.toBeUndefined()
})
