import {
  initialiserProviders
} from '../../../../../../../../www/workspace/template-react-js/src/fonctions/initialiserProviders'
import {ButtonAnnulerValider} from '../ButtonAnnulerValider'

const ReactTestRenderer = require('react-test-renderer')

test('Rendu composant de ButtonAnnulerValider', () => {
  const testRenderer = ReactTestRenderer.create(
    initialiserProviders(<ButtonAnnulerValider />),
  )
  expect(testRenderer).not.toBeUndefined()
})
