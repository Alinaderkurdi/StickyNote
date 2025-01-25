
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginJest from 'eslint-plugin-jest';
import * as tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

/** @type {import('eslint').Linter.Config[]} */


export default [
  {
    files: ['**/*.js', '**/*.ts', '**/*.mjs'],
    ignores: ['node_modules/**/*', 'dist/**/*'],
    languageOptions: {
      parser: tsParser, // Use TypeScript parser
      ecmaVersion: 'latest', // Enable latest ECMAScript syntax
      sourceType: 'module', // Enable ESM syntax
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      import: eslintPluginImport,
      jest: eslintPluginJest,
    },
    rules: {
      // General Rules
      'no-console': 'warn', // Warn about console.log usage
      'eqeqeq': 'error', // Enforce strict equality (=== and !==)
      "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }], // Prevents declaring variables that are never used.
      "curly": "error", //Enforces curly braces for all control statements.
      "no-redeclare": "error", // Prevents variable redeclaration.
      "no-shadow": "warn", //Prevents variable shadowing in nested scopes
      "no-debugger": "error", //Prevents the use of debugger statements in production code


      // TypeScript Rules
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // Allow `_`-prefixed arguments to be unused
      '@typescript-eslint/no-explicit-any': 'warn', // Discourage the use of `any`
      '@typescript-eslint/explicit-module-boundary-types': 'off', // Disable enforcing return types in exported functions

      // Import Rules
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
        },
      ],

      // Jest Rules
      'jest/no-disabled-tests': 'warn', // Warn about skipped tests
      'jest/no-focused-tests': 'error', // Prevent committed `.only` tests
      'jest/no-identical-title': 'error', // Prevent duplicate test titles
    },
  },
];