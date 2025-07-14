import { useContext } from 'react'
import { KeycloakContext } from './context'

export function useKeycloak() {
  const context = useContext(KeycloakContext)

  if (!context) {
    throw new Error('useKeycloak must be used within a ReactKeycloakProvider')
  }

  const result = {
    keycloak: context.authClient || context.keycloak,
    initialized: context.initialized,
  }

  console.log('useKeycloak returning:', result)

  return result
}
