import {Accueil} from '../Accueil'
import React from 'react'
import {
  initialiserProviders
} from '../../../../../../../../www/workspace/template-react-js/src/fonctions/initialiserProviders'

const ReactTestRenderer = require('react-test-renderer')

test("Rendu page d'accueil", () => {
  const user = {
    prenom: 'Romain',
  }

  const testRenderer = ReactTestRenderer.create(
    initialiserProviders(<Accueil user={user} />),
  )
  expect(testRenderer).not.toBeUndefined()
})
