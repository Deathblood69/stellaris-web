import {
  initialiserProviders
} from '../../../../../../../../www/workspace/template-react-js/src/fonctions/initialiserProviders'
import {DialogUtilisateur} from '../DialogUtilisateur'

const ReactTestRenderer = require('react-test-renderer')

test('Rendu page de connexion', () => {
  const testRenderer = ReactTestRenderer.create(
    initialiserProviders(<DialogUtilisateur />),
  )
  expect(testRenderer).not.toBeUndefined()
})
