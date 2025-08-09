![React Keycloak](/art/react-keycloak-logo.png?raw=true 'React Keycloak Logo')

# React Keycloak (Keycloak >=v26 Fork) <!-- omit in toc -->

> React bindings for [Keycloak](https://www.keycloak.org/). Fork of https://github.com/react-keycloak/react-keycloak.git with updated packages for keycloak >=26 support.

⚠️ **IMPORTANT NOTICE**: This fork has been updated to support Keycloak 26, but it is **NOT MAINTAINED**. We strongly recommend migrating to [NextAuth.js](https://next-auth.js.org/) for new projects, as it provides better maintenance, security updates, and broader OAuth provider support.

[![NPM (scoped)](https://img.shields.io/npm/v/@react-keycloak-refork/core?label=npm%20%7C%20core)](https://www.npmjs.com/package/@react-keycloak-refork/core)
[![NPM (scoped)](https://img.shields.io/npm/v/@react-keycloak-refork/web?label=npm%20%7C%20web)](https://www.npmjs.com/package/@react-keycloak-refork/web)
[![NPM (scoped)](https://img.shields.io/npm/v/@react-keycloak-refork/ssr?label=npm%20%7C%20ssr)](https://www.npmjs.com/package/@react-keycloak-refork/ssr)
[![NPM (scoped)](https://img.shields.io/npm/v/@react-keycloak-refork/native?label=npm%20%7C%20native)](https://www.npmjs.com/package/@react-keycloak-refork/native)

[![License](https://img.shields.io/github/license/react-keycloak/react-keycloak.svg)](https://github.com/react-keycloak/react-keycloak-fork/blob/master/LICENSE.md)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
[![GitHub contributors](https://img.shields.io/github/contributors/react-keycloak/react-keycloak)](https://github.com/react-keycloak/react-keycloak-fork/graphs/contributors)
[![Github Issues](https://img.shields.io/github/issues/react-keycloak/react-keycloak.svg)](https://github.com/react-keycloak/react-keycloak/issues) ![npm](https://img.shields.io/npm/dm/@react-keycloak-refork/core)

[![Gitter](https://img.shields.io/gitter/room/react-keycloak/community)](https://gitter.im/react-keycloak/community)

---

## Table of Contents <!-- omit in toc -->

- [Integrations](#integrations)
  - [React](#react)
  - [SSR](#ssr)
  - [React Native](#react-native)
- [Support](#support)
- [Examples](#examples)
- [Alternatives](#alternatives)
- [Contributing](#contributing)
- [License](#license)

---

## Integrations

### React

React Keycloak for Web requires:

- React **16.0** or later
- `keycloak-js` **26.0.0** or later

```shell
yarn add @react-keycloak-refork/web
```

or

```shell
npm install --save @react-keycloak-refork/web
```

or as a `UMD` package through `unpkg`

See `@react-keycloak-refork/web` package [README](https://github.com/react-keycloak/react-keycloak/blob/master/packages/web/README.md) for complete documentation.

### SSR

React Keycloak for SSR frameworks requires:

- React **16.0** or later
- SSR Framework:
  - NextJS **9** or later
  - Razzle **3** or later
- `keycloak-js` **26.0.0** or later

```shell
yarn add @react-keycloak-refork/ssr
```

or

```shell
npm install --save @react-keycloak-refork/ssr
```

See `@react-keycloak-refork/ssr` package [README](https://github.com/react-keycloak/react-keycloak/blob/master/packages/ssr/README.md) for complete documentation.

### React Native

React Keycloak for React Native requires React Native **61.0** or later

To install run

```shell
yarn add @react-keycloak-refork/native
```

or

```shell
npm install --save @react-keycloak-refork/native
```

See `@react-keycloak-refork/native` package [README](https://github.com/react-keycloak/react-native-keycloak/blob/master/README.md) for complete documentation.

## Support

| version | keycloak-js version | notes  |
| ------- | ------------------- | ------ |
| v4.0.3+ | 26.0.0+             | (fork) |
| v4.0.1+ | 17.0.0+             | (fork) |
| v2.0.0+ | 9.0.2+              |
| v1.x    | >=8.0.2 <9.0.2      |

## Examples

See [`@react-keycloak-refork/react-keycloak-examples`](https://github.com/react-keycloak/react-keycloak-examples) repository for various demo implementing this library main features.

## Alternatives

If you need to connect using a more generic OIDC client instead of `keycloak.js`, consider using one of the following libraries:

- [bjerkio/oidc-react](https://github.com/bjerkio/oidc-react)
- [thchia/react-oidc](https://github.com/thchia/react-oidc)
- [@axa-fr/react-oidc](https://github.com/AxaGuilDEv/react-oidc)

## Migration Notice

⚠️ **This project is no longer maintained**. For new projects, we strongly recommend using [NextAuth.js](https://next-auth.js.org/) instead, which provides:

- ✅ Active maintenance and security updates
- ✅ Support for 50+ OAuth providers including Keycloak
- ✅ Better TypeScript support
- ✅ Modern React patterns and hooks
- ✅ Comprehensive documentation and examples
- ✅ Active community and support

### Migrating to NextAuth.js

To migrate from this library to NextAuth.js with Keycloak:

1. Install NextAuth.js: `npm install next-auth`
2. Configure Keycloak as a provider in your NextAuth configuration
3. Replace `useKeycloak()` hooks with NextAuth's `useSession()` and `signIn()`/`signOut()` functions
4. Update your authentication logic to use NextAuth's session management

See the [NextAuth.js documentation](https://next-auth.js.org/configuration/providers/keycloak) for detailed migration instructions.

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
