# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 8.0.0 (2026-02-25)


### Bug Fixes

* client persistor.getTokens is not a function  ([b1180b6](https://github.com/leoluzh/react-keycloak-fork/commit/b1180b6712b1021a973befac1a216d069ea2ec4c))
* **Keycloak:** Add 'silent-check-sso' static page ([988bee6](https://github.com/leoluzh/react-keycloak-fork/commit/988bee66ff8f2a590893e5a2f8b39f0f33620014))
* **nextjs:**  Fix 'PropTypes' for 'appWithKeycloak' component ([366aa74](https://github.com/leoluzh/react-keycloak-fork/commit/366aa74a604643c9ee767e91d3eb96d640868900))
* **nextjs:** Avoid using a single 'keycloakStubInstance' for every call - reinit on first 'getKeycloakStub' ([0d058b4](https://github.com/leoluzh/react-keycloak-fork/commit/0d058b41f2d469a5281bdf4962088c6daf7f6134))
* **nextjs:** Fix 'getInitialProps' not forwarded ([81f0d84](https://github.com/leoluzh/react-keycloak-fork/commit/81f0d8409623ccabe3bb51bc6e4a7db789579cde))
* **nextjs:** Fix filename casing ([0da9e68](https://github.com/leoluzh/react-keycloak-fork/commit/0da9e68e2985632a1876f4d6115f2c3e34a95166))
* **onInitConfigChange:** Fix issue preventing Keyloak re-init when initConfig is updated ([fbb8dd0](https://github.com/leoluzh/react-keycloak-fork/commit/fbb8dd00a9290863a03452fdb14cb3c2cb22a710))
* **Provider:** Fix 'Provider' to improve coverage ([cd77fb6](https://github.com/leoluzh/react-keycloak-fork/commit/cd77fb63ffb747a3b81c4fa74ca5e9d0398b9922))
* Remove 'commonjs' plugin from main rollup config ([f577930](https://github.com/leoluzh/react-keycloak-fork/commit/f5779302518744a6882023469f70f684e373f84c))
* **ssr:** Fix TS typings ([f99c5c2](https://github.com/leoluzh/react-keycloak-fork/commit/f99c5c284bb53721ff834cb1018073479e5447f7)), closes [#75](https://github.com/leoluzh/react-keycloak-fork/issues/75)
* **Typescript:** Fix TS types ([5dff124](https://github.com/leoluzh/react-keycloak-fork/commit/5dff124e433511be0b26cb266f519d938d1e0b2a))
* **Typescript:** Update TS types ([6582774](https://github.com/leoluzh/react-keycloak-fork/commit/65827746785476dc1a045eac06b784d6360b4ee0))
* **TypeScript:** Use ReactKeycloakContextValue from core ([47ff305](https://github.com/leoluzh/react-keycloak-fork/commit/47ff30503412a57e90fce33644d3c822320908e7))
* **withKeycloak:** Fix 'withKeycloak' to improve coverage ([8af39a8](https://github.com/leoluzh/react-keycloak-fork/commit/8af39a887fe3bd42ba25dd1ca29ff468df369b68))


### chore

* **core:** Remove support for 'keycloak-js' pre-9.0.2 ([94f2d5f](https://github.com/leoluzh/react-keycloak-fork/commit/94f2d5f8f106955091c7cc8aaa6c6dd2dbb024c4))
* **nextjs:** Remove support for 'keycloak-js' pre-9.0.2 ([420c3f8](https://github.com/leoluzh/react-keycloak-fork/commit/420c3f85ade9929becd5386b515476324826c9c2))
* **razzle:** Remove support for 'keycloak-js' pre-9.0.2 ([3830422](https://github.com/leoluzh/react-keycloak-fork/commit/3830422e3ea211aba4d9b4821dacaa6e1081f951))
* **web:** Remove support for 'keycloak-js' pre-9.0.2 ([d09460a](https://github.com/leoluzh/react-keycloak-fork/commit/d09460a62ba7bb4a104eb5ac1df558466cc4b3c0))


### Features

* Add '@react-keycloak/ssr' package ([59bcaea](https://github.com/leoluzh/react-keycloak-fork/commit/59bcaea0adba45043236cfd160dc81bf9376f6e2))
* **core:** Add 'autoRefreshToken' prop to 'KeycloakProvider' ([e1fe4c6](https://github.com/leoluzh/react-keycloak-fork/commit/e1fe4c64ceaadac2cff626637eb64562f97a9b58))
* **core:** Add 'onInitError' event notification when 'init' call to 'keycloak' fails ([1ae1ea0](https://github.com/leoluzh/react-keycloak-fork/commit/1ae1ea022203d9dc6012fad632f6bd3efe2d78a2)), closes [#80](https://github.com/leoluzh/react-keycloak-fork/issues/80)
* **core:** Improve TS typings ([59d3553](https://github.com/leoluzh/react-keycloak-fork/commit/59d35536cfa9c37d4d0f8052ade2294fc9a63b59))
* **core:** re-render ReactKeycloakProvider if authentication state changes ([3ffa66d](https://github.com/leoluzh/react-keycloak-fork/commit/3ffa66dcd88927b0247bdaacade08f62cfd77ed2))
* **core:** remove 'token' from 'AuthProviderState' to avoid re-render on token refresh ([11f1024](https://github.com/leoluzh/react-keycloak-fork/commit/11f1024dfdabb62eac8d91cb9731722341c4f72c)), closes [#106](https://github.com/leoluzh/react-keycloak-fork/issues/106)
* **core:** Update 'react-fast-compare' dependency ([45471a8](https://github.com/leoluzh/react-keycloak-fork/commit/45471a811653d40b615b67c26cadfea7ff89ebc0))
* **core:** Update TS typings ([f5c43f1](https://github.com/leoluzh/react-keycloak-fork/commit/f5c43f17f8240c7df752218b4c277e207080ab8e))
* **core:** Update TS typings ([8a240f2](https://github.com/leoluzh/react-keycloak-fork/commit/8a240f26e495a57f70a0b54da9cfe64cf4e08002))
* **Examples:** Add 'GatsbyJS' example ([51a6412](https://github.com/leoluzh/react-keycloak-fork/commit/51a6412a8b374d336e992acba0a9071efe41320f))
* **Examples:** Port 'react-navi' example to monorepo ([df37960](https://github.com/leoluzh/react-keycloak-fork/commit/df37960b67b07d2f8f458d5f909efca02a45a710))
* **Examples:** Port 'react-navi' example to monorepo ([9b6f69a](https://github.com/leoluzh/react-keycloak-fork/commit/9b6f69a67befd48a952bb5658489eb012bbcd4f4))
* **Examples:** Port 'react-router' example to monorepo ([8cd996b](https://github.com/leoluzh/react-keycloak-fork/commit/8cd996b0196e45f0ed8df40b3cf9b684958147fb))
* **Hook:** Update 'useKeycloak' hook ([6928c50](https://github.com/leoluzh/react-keycloak-fork/commit/6928c5091e60e9355a35862a3b9fb0fd88f208b7))
* **isLoadingCheck:** Add 'isLoadingCheck' docs to README ([420d3cf](https://github.com/leoluzh/react-keycloak-fork/commit/420d3cfbd21de031c237c147b02d3c432da10bea))
* **isLoadingCheck:** Add 'isLoadingCheck' prop to 'KeycloakProvider' ([95c706d](https://github.com/leoluzh/react-keycloak-fork/commit/95c706d761383716222651cc3570aa2ecec8bd71))
* **isLoadingCheck:** Add 'isLoadingCheck' to TS definition ([1ebb62d](https://github.com/leoluzh/react-keycloak-fork/commit/1ebb62d07d13f5606a2abac870a827d4394a1149))
* **nextjs-app:** Improve 'nextjs-app' ([b30c1c5](https://github.com/leoluzh/react-keycloak-fork/commit/b30c1c55c41bdec11174556d134e8053e7eb2f18))
* **nextjs:** Add 'getKeycloakInitConfig' handling to allow App to pass dynamic react-keycloak initConfig parameters ([0e03190](https://github.com/leoluzh/react-keycloak-fork/commit/0e03190a5b69d416355ea3afbeb5ae9b969a512f))
* **nextjs:** Add 'nextjs-app' sample ([6fa2b05](https://github.com/leoluzh/react-keycloak-fork/commit/6fa2b057b0e6328fb8d2958e25b88ace3a860838))
* **nextjs:** Allow passing 'providerProps' to 'appWithKeycloak' ([0c1c7af](https://github.com/leoluzh/react-keycloak-fork/commit/0c1c7af567a5617dc78870af565227b3e22abd8e))
* **nextjs:** Complete rewrite ([3ce04ad](https://github.com/leoluzh/react-keycloak-fork/commit/3ce04adaeb9a1e0523c11a518e621c0c78412eb9))
* **nextjs:** Improve server-side auth status management ([643ef5e](https://github.com/leoluzh/react-keycloak-fork/commit/643ef5eabb4d4bb24f7089d89f09588cb7168729))
* **nextjs:** Improve TS typings ([f80529e](https://github.com/leoluzh/react-keycloak-fork/commit/f80529e06b756abfdcf8b816f1112d46827e1f73))
* **nextjs:** Initial 'react-keycloak/nextjs' implementation ([a5d242d](https://github.com/leoluzh/react-keycloak-fork/commit/a5d242d6da395d175864d0fd5bf4771f796ab4e7))
* **nextjs:** Persist and expose keycloak instance ([88cbd01](https://github.com/leoluzh/react-keycloak-fork/commit/88cbd0145f6d3bd6480706b4609de5dd388deda6))
* **nextjs:** Update TS typings ([b233ce2](https://github.com/leoluzh/react-keycloak-fork/commit/b233ce29826445d1f5dc89a8b8d82031c08f4cfd))
* **nextjs:** Update TS typings ([65efa34](https://github.com/leoluzh/react-keycloak-fork/commit/65efa34226de6692e85dac158b7d5782d7b400ae))
* **Provider:** Add 'onEvent' handler and deprecate 'onError' ([a128d05](https://github.com/leoluzh/react-keycloak-fork/commit/a128d0503937285b20a317fa850537d49b258cfb))
* **Provider:** Add 'onTokens' handler and deprecate 'onToken' ([699d00d](https://github.com/leoluzh/react-keycloak-fork/commit/699d00ddd708182a30dd6cc14855b7585e63b4a0))
* **razzle:** Add 'razzle-app' sample ([8c6c565](https://github.com/leoluzh/react-keycloak-fork/commit/8c6c5654889c30d1e63efa05c7125a22e1297763))
* **razzle:** Add TS typings ([ff56a3e](https://github.com/leoluzh/react-keycloak-fork/commit/ff56a3e3104d295cc1d62034b2ad64f4a1dea3a1))
* **razzle:** Add TS typings for provided persistors ([53ebf89](https://github.com/leoluzh/react-keycloak-fork/commit/53ebf89db8f6a6901fc8e0e8dd49ba29e196394b))
* **razzle:** Improve TS typings ([4cb32b3](https://github.com/leoluzh/react-keycloak-fork/commit/4cb32b3f671eea1efce3544e9f3e6ca7a123e037))
* **razzle:** Initial 'react-keycloak/razzle' implementation ([72a48ee](https://github.com/leoluzh/react-keycloak-fork/commit/72a48ee84fe91bc7416753d6f39d406628787588))
* **razzle:** Update TS typings ([267eb60](https://github.com/leoluzh/react-keycloak-fork/commit/267eb602185aed8c98854467958e31ec0a5d87da))
* **razzle:** Update TS typings ([5ae4923](https://github.com/leoluzh/react-keycloak-fork/commit/5ae492305ba00c568f4d0c439ee33d300e764bcd))
* **razzle:** Update TS typings ([7dd5afe](https://github.com/leoluzh/react-keycloak-fork/commit/7dd5afe1f441fa2a6ea6d70a2a49afc33c44da61))
* **ssr:** re-implement withKeycloak HOC ([8dcdfd5](https://github.com/leoluzh/react-keycloak-fork/commit/8dcdfd50235a7f34871066b1efa088229aeacd24)), closes [#111](https://github.com/leoluzh/react-keycloak-fork/issues/111)
* **TS:** Add 'onEvent' to TS definitions ([c207815](https://github.com/leoluzh/react-keycloak-fork/commit/c2078157869f36f6d2f81d6284100d23db2a46ef))
* **Typescript:** Add TS types ([8e9d50d](https://github.com/leoluzh/react-keycloak-fork/commit/8e9d50d612efa4676841f88e198e72cb4f4d4a38))
* update SSAuthClient type to include keycloak instance methods like .login ([d673347](https://github.com/leoluzh/react-keycloak-fork/commit/d673347b57e6607d040c0cf693de31e87ccba09c))
* update to keycloak 17 with react 18 ([48ad191](https://github.com/leoluzh/react-keycloak-fork/commit/48ad1914c22b17aaabaf79085f7b7810a319e603))
* **web:** re-implement withKeycloak HOC ([295a834](https://github.com/leoluzh/react-keycloak-fork/commit/295a834c7f3fbe3bd7fb45a73c264b224d2e53ad)), closes [#111](https://github.com/leoluzh/react-keycloak-fork/issues/111)
* **web:** update 'useKeycloak' implementation ([ef19e82](https://github.com/leoluzh/react-keycloak-fork/commit/ef19e823b33c03808de696f9e7cbac3478197e0e))
* **web:** Update TS typings ([92c1e00](https://github.com/leoluzh/react-keycloak-fork/commit/92c1e00d3737c3a361a2660b7576212a435921df))
* **web:** Update TS typings ([ab42e1e](https://github.com/leoluzh/react-keycloak-fork/commit/ab42e1e948bb89f17ae2cf5caf1626a56d0485e5))


### BREAKING CHANGES

* **razzle:** Drop support for older KeycloakJS versions
* **nextjs:** Drop support for older KeycloakJS versions
* **web:** Drop support for older KeycloakJS versions
* **core:** Drop support for older KeycloakJS versions
