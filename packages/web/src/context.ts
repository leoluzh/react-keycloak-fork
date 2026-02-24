import { createAuthContext } from '@react-keycloak-fork/core'
import Keycloak from 'keycloak-js'

export const reactKeycloakWebContext = createAuthContext<Keycloak>()

export const ReactKeycloakWebContextConsumer = reactKeycloakWebContext.Consumer
