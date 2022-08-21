import {
  initialiserProviders
} from '../../../../../../../../www/workspace/template-react-js/src/fonctions/initialiserProviders'
import {AlertSnackBar} from '../AlertSnackBar'

const ReactTestRenderer = require('react-test-renderer')

test('Rendu composant de AlertSnackBar', () => {
  const testRenderer = ReactTestRenderer.create(
    initialiserProviders(<AlertSnackBar />),
  )
  expect(testRenderer).not.toBeUndefined()
})
