import { createAuthContext } from '@react-keycloak-refork/core'
import type { KeycloakInstance } from 'keycloak-js'

export const reactKeycloakWebContext = createAuthContext<KeycloakInstance>()

export const ReactKeycloakWebContextConsumer = reactKeycloakWebContext.Consumer
