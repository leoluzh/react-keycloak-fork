import babelParser from '@babel/eslint-parser'
import prettierPlugin from 'eslint-plugin-prettier'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'

export default [
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ['@babel/preset-react', '@babel/preset-typescript'],
        },
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
      },
      globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        fixture: true,
        test: true,
        browser: true,
        node: true,
        es6: true,
        jest: true,
      },
    },
    plugins: {
      prettier: prettierPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'no-unused-vars': 'error',
      'linebreak-style': ['error', 'unix'],
    },
    settings: {
      react: {
        version: '19.0',
      },
    },
  },
  {
    files: [
      '**/*.d.ts',
      '**/*.spec.tsx',
      '**/*.spec.ts',
      '**/*.tsx',
      '**/*.ts',
      '**/*.js',
    ],
    rules: {
      'no-unused-vars': 'off',
    },
  },
]
