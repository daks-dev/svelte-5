import js from '@eslint/js';
import ts from 'typescript-eslint';
import globals from 'globals';

import prettier from 'eslint-config-prettier';
import svelte from 'eslint-plugin-svelte';
// import tailwind from 'eslint-plugin-tailwindcss';

// import svelteConfig from './svelte.config.js';

export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  ...svelte.configs.recommended,
  // tailwind.configs.recommended,
  prettier,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
  {
    files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],
    ignores: ['eslint.config.js', 'svelte.config.js'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        extraFileExtensions: ['.svelte'],
        parser: ts.parser
        // svelteConfig
      }
    },
    rules: {
      'no-undef': 'off',
      'svelte/no-at-html-tags': 'off',
      'svelte/require-each-key': 'off'
    }
  },
  {
    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { args: 'after-used', argsIgnorePattern: '^_' }
      ]
      // 'tailwindcss/no-custom-classname': 'off',
      /*'tailwindcss/classnames-order': [
        'warn',
        {
          'callees': ['twMerge', 'twJoin', 'classnames', 'clsx', 'ctl']
        }
      ]*/
    }
  },
  {
    ignores: [
      '**/.svelte-kit/',
      '**/build/',
      '**/dist/',
      '**/dist-ssr/',
      '**/static',
      '**/test-results/',
      '**/.master/',
      '**/.vscode/'
    ]
  }
];
