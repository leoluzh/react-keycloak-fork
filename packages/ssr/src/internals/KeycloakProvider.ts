import { createAuthProvider } from '@react-keycloak-refork/core'

import { reactKeycloakSsrContext } from './context'

export const KeycloakProvider = createAuthProvider(reactKeycloakSsrContext)
