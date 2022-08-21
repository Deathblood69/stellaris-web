import React from 'react'
import {Providers} from '../provider/Providers'

export function initialiserProviders(composant) {
  return <Providers>{composant}</Providers>
}
