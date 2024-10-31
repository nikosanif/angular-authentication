// @ts-check
const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');
const importPlugin = require('eslint-plugin-import');

module.exports = tseslint.config(
  {
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    plugins: {
      import: importPlugin,
    },
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'aa',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'aa',
          style: 'kebab-case',
        },
      ],

      // Import rules
      'import/order': [
        'error',
        {
          alphabetize: {
            order: 'asc',
          },
          pathGroupsExcludedImportTypes: ['internal'],
          groups: [['builtin', 'external'], 'internal', 'type', 'parent'],
          'newlines-between': 'always',
        },
      ],
      'import/first': ['error'],
      'import/no-duplicates': ['error'],

      // Member ordering
      '@typescript-eslint/member-ordering': [
        'error',
        {
          default: [
            'signature',
            'public-static-field',
            'protected-static-field',
            'private-static-field',
            'public-abstract-field',
            'protected-abstract-field',
            'private-decorated-field',
            'private-instance-field',
            'protected-decorated-field',
            'protected-instance-field',
            'public-decorated-field',
            'public-instance-field',
            'public-constructor',
            'protected-constructor',
            'private-constructor',
            'public-static-method',
            'protected-static-method',
            'private-static-method',
            'public-abstract-get',
            'public-abstract-set',
            'protected-abstract-get',
            'protected-abstract-set',
            'public-abstract-method',
            'protected-abstract-method',
            'public-decorated-method',
            'public-instance-method',
            'protected-decorated-method',
            'protected-instance-method',
            'private-decorated-method',
            'private-instance-method',
          ],
        },
      ],

      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        {
          accessibility: 'no-public',
        },
      ],
    },
  },
  {
    files: ['**/*.html'],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {
      '@angular-eslint/template/prefer-self-closing-tags': ['error'],
    },
  }
);
