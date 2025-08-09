import { createAuthProvider } from '@react-keycloak-refork/core'

import { reactKeycloakWebContext } from './context'

export const ReactKeycloakProvider = createAuthProvider(reactKeycloakWebContext)
