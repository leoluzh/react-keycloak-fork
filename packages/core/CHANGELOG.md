# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [3.0.5](https://github.com/leoluzh/react-keycloak-fork/compare/@leoluzh/react-keycloak-fork-core@3.0.4...@leoluzh/react-keycloak-fork-core@3.0.5) (2026-02-25)

**Note:** Version bump only for package @leoluzh/react-keycloak-fork-core





## [3.0.4](https://github.com/leoluzh/react-keycloak-fork/compare/@leoluzh/react-keycloak-fork-core@3.0.3...@leoluzh/react-keycloak-fork-core@3.0.4) (2026-02-25)

**Note:** Version bump only for package @leoluzh/react-keycloak-fork-core





## [3.0.3](https://github.com/leoluzh/react-keycloak-fork/compare/@leoluzh/react-keycloak-fork-core@3.0.2...@leoluzh/react-keycloak-fork-core@3.0.3) (2026-02-25)

**Note:** Version bump only for package @leoluzh/react-keycloak-fork-core





## [3.0.2](https://github.com/leoluzh/react-keycloak-fork/compare/@leoluzh/react-keycloak-fork-core@3.0.1...@leoluzh/react-keycloak-fork-core@3.0.2) (2026-02-25)

**Note:** Version bump only for package @leoluzh/react-keycloak-fork-core





## [3.0.1](https://github.com/leoluzh/react-keycloak-fork/compare/@leoluzh/react-keycloak-fork-core@3.0.0...@leoluzh/react-keycloak-fork-core@3.0.1) (2026-02-24)

**Note:** Version bump only for package @leoluzh/react-keycloak-fork-core





# 3.0.0 (2026-02-24)


### chore

* **core:** Remove support for 'keycloak-js' pre-9.0.2 ([94f2d5f](https://github.com/leoluzh/react-keycloak-fork/commit/94f2d5f8f106955091c7cc8aaa6c6dd2dbb024c4))


### Features

* **core:** Add 'autoRefreshToken' prop to 'KeycloakProvider' ([e1fe4c6](https://github.com/leoluzh/react-keycloak-fork/commit/e1fe4c64ceaadac2cff626637eb64562f97a9b58))
* **core:** Add 'onInitError' event notification when 'init' call to 'keycloak' fails ([1ae1ea0](https://github.com/leoluzh/react-keycloak-fork/commit/1ae1ea022203d9dc6012fad632f6bd3efe2d78a2)), closes [#80](https://github.com/leoluzh/react-keycloak-fork/issues/80)
* **core:** Improve TS typings ([59d3553](https://github.com/leoluzh/react-keycloak-fork/commit/59d35536cfa9c37d4d0f8052ade2294fc9a63b59))
* **core:** re-render ReactKeycloakProvider if authentication state changes ([3ffa66d](https://github.com/leoluzh/react-keycloak-fork/commit/3ffa66dcd88927b0247bdaacade08f62cfd77ed2))
* **core:** remove 'token' from 'AuthProviderState' to avoid re-render on token refresh ([11f1024](https://github.com/leoluzh/react-keycloak-fork/commit/11f1024dfdabb62eac8d91cb9731722341c4f72c)), closes [#106](https://github.com/leoluzh/react-keycloak-fork/issues/106)
* **core:** Update 'react-fast-compare' dependency ([45471a8](https://github.com/leoluzh/react-keycloak-fork/commit/45471a811653d40b615b67c26cadfea7ff89ebc0))
* **core:** Update TS typings ([f5c43f1](https://github.com/leoluzh/react-keycloak-fork/commit/f5c43f17f8240c7df752218b4c277e207080ab8e))
* **core:** Update TS typings ([8a240f2](https://github.com/leoluzh/react-keycloak-fork/commit/8a240f26e495a57f70a0b54da9cfe64cf4e08002))
* update SSAuthClient type to include keycloak instance methods like .login ([d673347](https://github.com/leoluzh/react-keycloak-fork/commit/d673347b57e6607d040c0cf693de31e87ccba09c))
* update to keycloak 17 with react 18 ([48ad191](https://github.com/leoluzh/react-keycloak-fork/commit/48ad1914c22b17aaabaf79085f7b7810a319e603))


### BREAKING CHANGES

* **core:** Drop support for older KeycloakJS versions






# 2.0.0 (2025-07-14)


### chore

* **core:** Remove support for 'keycloak-js' pre-9.0.2 ([94f2d5f](https://github.com/leoluzh/react-keycloak-fork/commit/94f2d5f8f106955091c7cc8aaa6c6dd2dbb024c4))


### Features

* **core:** Add 'autoRefreshToken' prop to 'KeycloakProvider' ([e1fe4c6](https://github.com/leoluzh/react-keycloak-fork/commit/e1fe4c64ceaadac2cff626637eb64562f97a9b58))
* **core:** Add 'onInitError' event notification when 'init' call to 'keycloak' fails ([1ae1ea0](https://github.com/leoluzh/react-keycloak-fork/commit/1ae1ea022203d9dc6012fad632f6bd3efe2d78a2)), closes [#80](https://github.com/leoluzh/react-keycloak-fork/issues/80)
* **core:** Improve TS typings ([59d3553](https://github.com/leoluzh/react-keycloak-fork/commit/59d35536cfa9c37d4d0f8052ade2294fc9a63b59))
* **core:** re-render ReactKeycloakProvider if authentication state changes ([3ffa66d](https://github.com/leoluzh/react-keycloak-fork/commit/3ffa66dcd88927b0247bdaacade08f62cfd77ed2))
* **core:** remove 'token' from 'AuthProviderState' to avoid re-render on token refresh ([11f1024](https://github.com/leoluzh/react-keycloak-fork/commit/11f1024dfdabb62eac8d91cb9731722341c4f72c)), closes [#106](https://github.com/leoluzh/react-keycloak-fork/issues/106)
* **core:** Update 'react-fast-compare' dependency ([45471a8](https://github.com/leoluzh/react-keycloak-fork/commit/45471a811653d40b615b67c26cadfea7ff89ebc0))
* **core:** Update TS typings ([f5c43f1](https://github.com/leoluzh/react-keycloak-fork/commit/f5c43f17f8240c7df752218b4c277e207080ab8e))
* **core:** Update TS typings ([8a240f2](https://github.com/leoluzh/react-keycloak-fork/commit/8a240f26e495a57f70a0b54da9cfe64cf4e08002))
* update SSAuthClient type to include keycloak instance methods like .login ([d673347](https://github.com/leoluzh/react-keycloak-fork/commit/d673347b57e6607d040c0cf693de31e87ccba09c))
* update to keycloak 17 with react 18 ([48ad191](https://github.com/leoluzh/react-keycloak-fork/commit/48ad1914c22b17aaabaf79085f7b7810a319e603))


### BREAKING CHANGES

* **core:** Drop support for older KeycloakJS versions
