import type { AuthClient } from '@react-keycloak-fork/core'
import Keycloak from 'keycloak-js'

export interface SSRAuthClient
  extends
    Omit<Keycloak, 'init' | 'updateToken' | 'onAuthError' | 'authenticated'>,
    AuthClient {
  /** A boolean indicating if the user is authenticated or not. */
  authenticated?: boolean
}
