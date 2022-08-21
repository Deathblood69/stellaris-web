import {
  initialiserProviders
} from '../../../../../../../../www/workspace/template-react-js/src/fonctions/initialiserProviders'
import TableauUtilisateurs from '../TableauUtilisateurs'

const ReactTestRenderer = require('react-test-renderer')

test('Rendu page de connexion', () => {
  const testRenderer = ReactTestRenderer.create(
    initialiserProviders(<TableauUtilisateurs />),
  )
  expect(testRenderer).not.toBeUndefined()
})
