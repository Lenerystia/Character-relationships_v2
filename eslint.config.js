import cspell from '@cspell/eslint-plugin';
import js from '@eslint/js';
import json from '@eslint/json';
import markdown from '@eslint/markdown';
import html from '@html-eslint/eslint-plugin';
import htmlParser from '@html-eslint/parser';
import panda from '@pandacss/eslint-plugin';
import stylistic from '@stylistic/eslint-plugin';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import vitest from '@vitest/eslint-plugin';
import prettier from 'eslint-config-prettier';
import drizzle from 'eslint-plugin-drizzle';
import esEs from 'eslint-plugin-eslint-plugin';
import functional from 'eslint-plugin-functional';
import esImport from 'eslint-plugin-import';
import alias from 'eslint-plugin-import-alias';
import node from 'eslint-plugin-n';
import perfectionist from 'eslint-plugin-perfectionist';
import promise from 'eslint-plugin-promise';
import regex from 'eslint-plugin-regexp';
import security from 'eslint-plugin-security';
import sonarjs from 'eslint-plugin-sonarjs';
import svelte from 'eslint-plugin-svelte';
import tailwind from 'eslint-plugin-tailwindcss';
import tsDoc from 'eslint-plugin-tsdoc';
import unicorn from 'eslint-plugin-unicorn';
import yml from 'eslint-plugin-yml';
import parseYAML from "yaml-eslint-parser";
import svelteParser from 'svelte-eslint-parser'; // Just on version 0.43.0 - above doesn't work

// IMPORTANT! If you want see what rules is in use, just run in terminal: npx @eslint/config-inspector
// For most plugins you can check their docs via this tool

// Toggles for enabling/disabling rule groups
const aliasFlag = true; // Checked
const cspellFlag = true; // Checked
const drizzleFlag = true; // Checked
const esEsFlag = true; // Checked
const esImportFlag = false; // Checked
// Recommend when you only use functional programming, or you have separate space for functional code in project
const functionalFlag = false;
const htmlFlag = true; // Checked
const jsFlag = true; // Checked
const jsonFlag = false; // Checked
const markdownFlag = true; // Checked
const nodeFlag = true; // Checked
const pandacssFlag = false;
const perfectionistFlag = true; // Checked
// "Turns off all rules that are unnecessary or might conflict with Prettier." (most from stylistic)
const prettierFlag = true; // Checked
const promiseFlag = true; // Checked
const regexFlag = true;
const securityFlag = true; // Checked
const sonarjsFlag = true; // Checked
const stylisticFlag = true; // Checked
const svelteFlag = true; // Checked
const tailwindFlag = false;
const tsDocFlag = true; // Checked
const typescriptFlag = true; // Checked
const unicornFlag = true; // TODO
const vitestFlag = false; // Checked (almost, I check it when I write tests, I promise)
const yamlFlag = true; // TODO

const aliasRules = {
	'alias/import-alias': [
		'error',
		{
			relativeDepth: 1,
			rootDir: import.meta.dirname,
			aliases: [
				{ alias: '@src', matcher: '^src' }, // src/modules/app/test -> @src/modules/app/test
				{ alias: '@routes', matcher: '^src/routes' }, // src/routes/modules/app/test -> @routes/modules/app/test
				{ alias: '@test', matcher: '^test/unit' }, // test/unit/modules/app -> @test/modules/app
				{ alias: '@testRoot', matcher: '^(test)/e2e' }, // test/e2e/modules/app -> @testRoot/e2e/modules/app
			],
		},
	],
};
const cspellRules = {
	'cspell/spellchecker': 'warn',
};
const drizzleRules = {
	'drizzle/enforce-delete-with-where': 'error',
	'drizzle/enforce-update-with-where': 'error',
};
const esEsRules = {
	'esEs/consistent-output': 'error',
	'esEs/fixer-return': 'error',
	'esEs/meta-property-ordering': 'error',
	'esEs/no-deprecated-context-methods': 'error',
	'esEs/no-deprecated-report-api': 'error',
	'esEs/no-meta-schema-default': 'error',
	'esEs/no-missing-message-ids': 'error',
	'esEs/no-missing-placeholders': 'error',
	'esEs/no-property-in-node': 'error',
	'esEs/no-unused-message-ids': 'error',
	'esEs/no-unused-placeholders': 'error',
	'esEs/no-useless-token-range': 'error',
	'esEs/prefer-message-ids': 'error',
	'esEs/prefer-object-rule': 'error',
	'esEs/prefer-placeholders': 'error',
	'esEs/prefer-replace-text': 'error',
	'esEs/report-message-format': 'error',
	'esEs/require-meta-default-options': 'error',
	'esEs/require-meta-docs-description': 'error',
	'esEs/require-meta-docs-recommended': 'error',
	'esEs/require-meta-docs-url': 'error',
	'esEs/require-meta-fixable': 'error',
	'esEs/require-meta-has-suggestions': 'error',
	'esEs/require-meta-schema': 'error',
	'esEs/require-meta-schema-description': 'error',
	'esEs/require-meta-type': 'error',
	'esEs/no-identical-tests': 'error',
	'esEs/no-only-tests': 'error',
	'esEs/prefer-output-null': 'error',
	'esEs/test-case-property-ordering': 'error',
	'esEs/test-case-shorthand-strings': 'error',
};
const esImportRules = {
	// To check
	'import/no-namespace': 'error',
	'import/no-internal-modules': 'error',
	'import/group-exports': 'error',
	'import/no-relative-packages': 'error',
	'import/no-relative-parent-imports': 'error',
	'import/consistent-type-specifier-style': 'error',
	'import/no-self-import': 'error',
	'import/no-cycle': 'error',
	'import/no-named-default': 'error',
	'import/no-unused-modules': 'error',
	'import/no-commonjs': 'error',
	'import/no-amd': 'error',
	'import/first': 'error',
	'import/max-dependencies': 'error',
	'import/no-nodejs-modules': 'error',
	'import/no-webpack-loader-syntax': 'error',
	'import/newline-after-import': 'error',
	'import/prefer-default-export': 'error',
	'import/no-default-export': 'error',
	'import/no-named-export': 'error',
	'import/no-dynamic-require': 'error',
	'import/unambiguous': 'error',
	'import/no-unassigned-import': 'error',
	'import/dynamic-import-chunkname': 'error',
	'import/no-import-module-exports': 'error',
	'import/no-empty-named-blocks': 'error',
	'import/exports-last': 'error',
	'import/no-deprecated': 'error',

	// Recomended
	'import/named': 'error',
	'import/default': 'error',
	'import/namespace': 'error',
	'import/export': 'error',
	'import/no-named-as-default': 'error',
	'import/no-named-as-default-member': 'error',
	'import/no-duplicates': 'error',
	//"If you're using a module bundler other than Node or Webpack, you may end up with a lot of false positive reports of missing dependencies."
	//https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-unresolved.md
	'import/no-unresolved': 'off',

	'import/no-anonymous-default-export': 'error',
	'import/no-absolute-path': 'error',
	'import/no-useless-path-segments': ['error', { noUselessIndex: true }],

	// Useless
	'import/extensions': 'off',
	'import/no-restricted-paths': 'off',
	'import/order': 'off',
	'import/no-mutable-exports': 'off',
	'import/no-extraneous-dependencies': 'off',
};
const functionalRules = {
	// Recommended
	'functional/functional-parameters': 'error',
	'functional/immutable-data': 'error',
	'functional/no-classes': 'error',
	'functional/no-class-inheritance': 'error',
	'functional/no-conditional-statements': 'error',
	'functional/no-expression-statements': 'error',
	'functional/no-let': 'error',
	'functional/no-loop-statements': 'error',
	'functional/no-mixed-types': 'error',
	'functional/no-return-void': 'error',
	'functional/no-this-expressions': 'error',
	'functional/no-throw-statements': 'error',
	'functional/no-try-statements': 'error',
	'functional/prefer-immutable-types': 'error',
	'functional/type-declaration-immutability': 'error',
	// Other
	'functional/no-promise-reject': 'error',
	'functional/prefer-property-signatures': 'error',
	'functional/prefer-tacit': 'error',
	'functional/readonly-type': 'error',
};
const htmlRules = {
	// Recommended
	'@html-eslint/require-lang': 'error',
	'@html-eslint/require-img-alt': 'error',
	'@html-eslint/require-doctype': 'error',
	'@html-eslint/require-title': 'error',
	'@html-eslint/no-duplicate-id': 'error',
	'@html-eslint/no-multiple-h1': 'error',
	'@html-eslint/attrs-newline': 'error',
	'@html-eslint/element-newline': 'error',
	'@html-eslint/require-li-container': 'error',
	'@html-eslint/indent': ['error', 'tab'],
	'@html-eslint/quotes': 'error',
	'@html-eslint/no-obsolete-tags': 'error',
	'@html-eslint/require-closing-tags': ['error', { selfClosing: 'always' }],
	'@html-eslint/no-duplicate-attrs': 'error',
	'@html-eslint/no-extra-spacing-attrs': 'off',
	// Other
	'@html-eslint/require-meta-charset': 'error',
	'@html-eslint/lowercase': 'error',
	'@html-eslint/require-input-label': 'error',
	'@html-eslint/require-explicit-size': 'error',
	'@html-eslint/no-trailing-spaces': 'error',
	'@html-eslint/no-extra-spacing-text': 'error',
	'@html-eslint/require-meta-description': 'error',
	'@html-eslint/require-frame-title': 'error',
	'@html-eslint/no-non-scalable-viewport': 'error',
	'@html-eslint/no-target-blank': 'error',
	'@html-eslint/require-button-type': 'error',
	'@html-eslint/no-heading-inside-button': 'error',
	'@html-eslint/require-form-method': 'error',
	'@html-eslint/sort-attrs': 'error',
	'@html-eslint/no-inline-styles': 'error',
	'@html-eslint/no-skip-heading-levels': 'error',
	'@html-eslint/id-naming-convention': 'error',
	'@html-eslint/require-attrs': 'error',
	'@html-eslint/no-positive-tabindex': 'error',
	'@html-eslint/require-meta-viewport': 'error',
	'@html-eslint/no-abstract-roles': 'error',
	'@html-eslint/no-aria-hidden-body': 'error',
	'@html-eslint/no-multiple-empty-lines': 'error',
	'@html-eslint/no-accesskey-attrs': 'error',
	'@html-eslint/no-restricted-attrs': 'error',
	'@html-eslint/no-restricted-attr-values': 'error',
	'@html-eslint/no-script-style-type': 'error',
	'@html-eslint/no-invalid-role': 'error',
	'@html-eslint/no-nested-interactive': 'error',
	'@html-eslint/require-open-graph-protocol': 'error',
	'@html-eslint/prefer-https': 'error',
	'@html-eslint/max-element-depth': 'error',
};
const jsRules = {
	'constructor-super': 'error',
	'for-direction': 'error',
	'getter-return': 'error',
	'no-async-promise-executor': 'error',
	'no-class-assign': 'error',
	'no-compare-neg-zero': 'error',
	'no-cond-assign': ['error', 'always'],
	'no-const-assign': 'error',
	'no-constant-binary-expression': 'error',
	'no-constant-condition': 'error',
	'no-constructor-return': 'error',
	'no-control-regex': 'error',
	'no-debugger': 'error',
	'no-dupe-args': 'error',
	'no-dupe-else-if': 'error',
	'no-dupe-keys': 'error',
	'no-duplicate-case': 'error',
	'no-empty-character-class': 'error',
	'no-empty-pattern': 'error',
	'no-ex-assign': 'error',
	'no-fallthrough': 'error',
	'no-func-assign': 'error',
	'no-import-assign': 'error',
	'no-inner-declarations': ['error', 'both'],
	'no-invalid-regexp': 'error',
	'no-irregular-whitespace': [
		'error',
		{
			skipStrings: false,
			skipTemplates: false,
			skipJSXText: false,
		},
	],
	'no-loss-of-precision': 'error',
	'no-misleading-character-class': 'error',
	'no-new-native-nonconstructor': 'error',
	'no-obj-calls': 'error',
	'no-prototype-builtins': 'error',
	'no-self-assign': 'error',
	'no-self-compare': 'error',
	'no-setter-return': 'error',
	'no-sparse-arrays': 'error',
	'no-template-curly-in-string': 'error',
	'no-this-before-super': 'error',
	'no-unmodified-loop-condition': 'error',
	'no-unreachable': 'error',
	'no-unsafe-finally': 'error',
	'no-unsafe-negation': [
		'error',
		{
			enforceForOrderingRelations: true,
		},
	],
	'no-unsafe-optional-chaining': [
		'error',
		{
			disallowArithmeticOperators: true,
		},
	],
	'no-unused-private-class-members': 'error',
	'no-useless-backreference': 'error',
	'use-isnan': 'error',
	'valid-typeof': 'error',
	'func-names': ['error', 'never'],
	'no-bitwise': 'error',
	'no-case-declarations': 'error',
	'no-delete-var': 'error',
	'no-else-return': 'error',
	'no-empty': 'error',
	'no-empty-static-block': 'error',
	'no-eval': 'error',
	'no-extend-native': 'error',
	'no-extra-bind': 'error',
	'no-extra-boolean-cast': [
		'error',
		{
			enforceForLogicalOperands: true,
		},
	],
	'no-global-assign': 'error',
	'no-implicit-coercion': 'error',
	'no-implicit-globals': 'error',
	'no-invalid-this': [
		'error',
		{
			capIsConstructor: false,
		},
	],
	'no-labels': 'error',
	'no-lone-blocks': 'error',
	'no-multi-assign': 'error',
	'no-new': 'error',
	'no-new-func': 'error',
	'no-new-wrappers': 'error',
	'no-nonoctal-decimal-escape': 'error',
	'no-object-constructor': 'error',
	'no-octal': 'error',
	'no-octal-escape': 'error',
	'no-proto': 'error',
	'no-redeclare': 'error',
	'no-regex-spaces': 'error',
	'no-return-assign': ['error', 'always'],
	'no-script-url': 'error',
	'no-sequences': [
		'error',
		{
			allowInParentheses: false,
		},
	],
	'no-shadow-restricted-names': 'error',
	'no-useless-call': 'error',
	'no-useless-catch': 'error',
	'no-useless-computed-key': [
		'error',
		{
			enforceForClassMembers: true,
		},
	],
	'no-useless-concat': 'error',
	'no-useless-escape': 'error',
	'no-useless-rename': 'error',
	'no-useless-return': 'error',
	'no-var': 'error',
	'no-with': 'error',
	'one-var': ['error', 'never'],
	'operator-assignment': 'error',
	'prefer-arrow-callback': 'error',
	'prefer-const': 'error',
	'prefer-numeric-literals': 'error',
	'prefer-object-spread': 'error',
	'prefer-rest-params': 'error',
	'prefer-spread': 'error',
	'prefer-template': 'error',
	'require-yield': 'error',
	'no-console': 'off', // TODO TEMP
	'func-name-matching': 'error',
	'accessor-pairs': 'error',
	'grouped-accessor-pairs': 'error',
	'prefer-exponentiation-operator': 'error',
	'no-unneeded-ternary': 'error',
	'default-case': 'error',
	'default-case-last': 'error',
	'array-callback-return': 'error',
	'block-scoped-var': 'error',
	'guard-for-in': 'error',
	'no-unreachable-loop': 'error',
	'no-useless-assignment': 'error',
	'object-shorthand': 'error',
	curly: 'error',
	'no-unexpected-multiline': 'error',
	'no-await-in-loop': 'error',
	'prefer-regex-literals': 'error',
	'no-param-reassign': 'error',
	'no-restricted-syntax': ['error', 'WithStatement'],
	'max-depth': ['error', 4],
	'no-negated-condition': 'error',
	'new-cap': 'error',
	'prefer-object-has-own': 'error',
	radix: ['error', 'as-needed'],

	// Disable for some reason
	'no-continue': 'off',
	'max-nested-callbacks': 'off',
	'prefer-named-capture-group': 'off',
	yoda: 'off',
	'no-div-regex': 'off',
	'consistent-this': 'off', // TS check this better than eslint (supposedly)
	'no-extra-label': 'off',
	'no-label-var': 'off',
	'no-promise-executor-return': 'off',
	'no-restricted-exports': 'off',
	'no-restricted-globals': 'off',
	'no-restricted-properties': 'off',
	'sort-vars': 'off',
	'unicode-bom': 'off',
	'max-lines': 'off',
	'no-unused-labels': 'off', // In TypeScript? Where?
	'max-lines-per-function': 'off',
	'max-statements': 'off', // Irritating
	complexity: 'off', // Have in sonarjs
	'func-style': 'off',
	'require-atomic-updates': 'off', // TypeScript already warns about incorrect use of await.
	'no-void': 'off', // That's not error
	'no-undef-init': 'off',
	'no-multi-str': 'off', // TypeScript supports template literals – prohibiting \ makes no sense.
	'no-caller': 'off', // Old construct in JavaScript
	'no-iterator': 'off', // Old construct in JavaScript
	'symbol-description': 'off',
	'logical-assignment-operators': 'off',
	'id-denylist': 'off', // Useless
	'id-length': 'off',
	'id-match': 'off',
	eqeqeq: 'off', // For elastic equals like != null, disable null and undefined - for short code
	'no-eq-null': 'off',
	'no-duplicate-imports': 'off', // I allow to duplicate imports for separate import types and other parts
	'sort-keys': 'off', // Can be frustrating
	camelcase: 'off', // It may be disturbing
	'no-alert': 'off', // I use it (yet)
	'no-lonely-if': 'off', // I use it
	'no-ternary': 'off', // ternary is useful
	'no-nested-ternary': 'off', // Sometimes ternary within ternary is useful – a matter of style.
	'require-unicode-regexp': 'off', // not always use Unicode in regex
	'vars-on-top': 'off', // TS prefer let or const
	'arrow-body-style': 'off', // It's not always worth forcing {} in arrow functions.
	strict: 'off', // TS already use strict
	'no-inline-comments': 'off', // useless
	'no-plusplus': 'off', // Safe in TypeScript
	'max-classes-per-file': 'off', //TypeScript supports multiple classes in one file
	'no-undefined': 'off', // undefined is usefull in TypeScript
	'no-undef': 'off', // TS already check undef variables
	'no-underscore-dangle': 'off', // Disabled: TypeScript has `private`, ORMs use `_id`, and some APIs use `__typename`.
	'capitalized-comments': 'off', // useless when I have commented code
	'no-warning-comments': 'off', // off, because sonarjs have
	'sort-imports': 'off', // Disabled due to a conflict with a rule from eslint-plugin-import

	// Off because typescript
	'class-methods-use-this': 'off',
	'consistent-return': 'off',
	'default-param-last': 'off',
	'dot-notation': 'off',
	'init-declarations': 'off',
	'max-params': 'off',
	'no-array-constructor': 'off',
	'no-dupe-class-members': 'off',
	'no-empty-function': 'off',
	'no-implied-eval': 'off',
	'no-loop-func': 'off',
	'no-magic-numbers': 'off',
	'no-restricted-imports': 'off',
	'no-shadow': 'off',
	'no-throw-literal': 'off',
	'no-unused-expressions': 'off',
	'no-unused-vars': 'off',
	'no-use-before-define': 'off',
	'no-useless-constructor': 'off',
	'prefer-destructuring': 'off',
	'prefer-promise-reject-errors': 'off',
	'require-await': 'off',
};
const jsonRules = {
	// Recommended
	'json/no-duplicate-keys': 'error',
	'json/no-empty-keys': 'error',
	'json/no-unsafe-values': 'error',
	'json/no-unnormalized-keys': 'error',
	// Other
	'json/sort-keys': 'error',
	'json/top-level-interop': 'error',
};
const markdownRules = {
	'markdown/fenced-code-language': 'error',
	'markdown/heading-increment': 'error',
	'markdown/no-duplicate-headings': 'error',
	'markdown/no-empty-links': 'error',
	'markdown/no-html': 'error',
	'markdown/no-invalid-label-refs': 'error',
	'markdown/no-missing-label-refs': 'error',
};
const nodeRules = {
	'node/callback-return': 'error',
	'node/exports-style': ['error', 'exports'],
	'node/global-require': 'error',
	'node/handle-callback-err': 'error',
	'node/hashbang': 'error',
	'node/no-callback-literal': 'error',
	'node/no-deprecated-api': 'error',
	'node/no-exports-assign': 'error',
	'node/no-extraneous-import': 'error',
	'node/no-extraneous-require': 'error',
	'node/no-missing-require': 'error',
	'node/no-mixed-requires': 'error',
	'node/no-new-require': 'error',
	'node/no-path-concat': 'error',
	'node/no-sync': 'warn',
	'node/no-unpublished-bin': 'error',
	'node/no-unpublished-import': 'error',
	'node/no-unpublished-require': 'error',
	'node/no-unsupported-features/es-builtins': 'error',
	'node/no-unsupported-features/es-syntax': 'error',
	'node/prefer-global/buffer': ['error', 'always'],
	'node/prefer-global/console': ['error', 'always'],
	'node/prefer-global/process': ['error', 'always'],
	'node/prefer-global/text-decoder': ['error', 'always'],
	'node/prefer-global/text-encoder': ['error', 'always'],
	'node/prefer-global/url': ['error', 'always'],
	'node/prefer-global/url-search-params': ['error', 'always'],
	'node/prefer-node-protocol': 'error',
	'node/prefer-promises/dns': 'error',
	'node/prefer-promises/fs': 'error',
	'node/process-exit-as-throw': 'error',

	// Possible useless
	'node/no-unsupported-features/node-builtins': 'off',
	'node/no-restricted-import': 'off',
	'node/no-restricted-require': 'off',
	'node/no-missing-import': 'off',
	'node/no-hide-core-modules': 'off', // deprecated
	'node/no-process-env': 'off',
	'node/no-process-exit': 'off',
	'node/file-extension-in-import': 'off',
};
const pandacssRules = {
	'@pandacss/file-not-included': 'error',
	'@pandacss/no-config-function-in-source': 'error',
	'@pandacss/no-debug': 'error',
	'@pandacss/no-dynamic-styling': 'error',
	'@pandacss/no-escape-hatch': 'error',
	'@pandacss/no-hardcoded-color': 'error',
	'@pandacss/no-important': 'error',
	'@pandacss/no-invalid-token-paths': 'error',
	'@pandacss/no-invalid-nesting': 'error',
	'@pandacss/no-margin-properties': 'error',
	'@pandacss/no-physical-properties': 'error',
	'@pandacss/no-property-renaming': 'error',
	'@pandacss/no-unsafe-token-fn-usage': 'error',
	'@pandacss/prefer-longhand-properties': 'error',
	'@pandacss/prefer-shorthand-properties': 'error',
	'@pandacss/prefer-atomic-properties': 'error',
	'@pandacss/prefer-composite-properties': 'error',
	'@pandacss/prefer-unified-property-style': 'error',
};
const perfectionistRules = {
	// Recommended-natural
	'perfectionist/sort-variable-declarations': [
		'error',
		{
			type: 'natural',
			order: 'asc',
		},
	],
	'perfectionist/sort-intersection-types': [
		'error',
		{
			type: 'natural',
			order: 'asc',
		},
	],
	'perfectionist/sort-heritage-clauses': [
		'error',
		{
			type: 'natural',
			order: 'asc',
		},
	],
	'perfectionist/sort-array-includes': [
		'error',
		{
			type: 'natural',
			order: 'asc',
		},
	],
	'perfectionist/sort-named-imports': [
		'error',
		{
			type: 'natural',
			order: 'asc',
		},
	],
	'perfectionist/sort-named-exports': [
		'error',
		{
			type: 'natural',
			order: 'asc',
		},
	],
	'perfectionist/sort-union-types': [
		'error',
		{
			type: 'natural',
			order: 'asc',
		},
	],
	'perfectionist/sort-switch-case': [
		'error',
		{
			type: 'natural',
			order: 'asc',
		},
	],
	'perfectionist/sort-decorators': [
		'error',
		{
			type: 'natural',
			order: 'asc',
		},
	],
	'perfectionist/sort-jsx-props': [
		'error',
		{
			type: 'natural',
			order: 'asc',
		},
	],
	'perfectionist/sort-modules': [
		'error',
		{
			type: 'natural',
			order: 'asc',
		},
	],
	'perfectionist/sort-exports': [
		'error',
		{
			type: 'natural',
			order: 'asc',
		},
	],
	'perfectionist/sort-enums': [
		'error',
		{
			type: 'natural',
			order: 'asc',
		},
	],
	'perfectionist/sort-sets': [
		'error',
		{
			type: 'natural',
			order: 'asc',
		},
	],
	'perfectionist/sort-maps': [
		'error',
		{
			type: 'natural',
			order: 'asc',
		},
	],
	'perfectionist/sort-imports': [
		'error',
		{
			type: 'natural',
			order: 'asc',
		},
	],
	'perfectionist/sort-object-types': 'off',
	'perfectionist/sort-interfaces': 'off',
	'perfectionist/sort-objects': 'off',
	'perfectionist/sort-classes': 'off',
};
const prettierRules = { ...prettier.rules };
const promiseRules = {
	'promise/always-return': 'error',
	'promise/no-return-wrap': 'error',
	'promise/param-names': 'error',
	'promise/catch-or-return': 'error',
	'promise/no-native': 'off',
	'promise/no-nesting': 'error',
	'promise/no-promise-in-callback': 'error',
	'promise/no-callback-in-promise': 'error',
	'promise/avoid-new': 'error',
	'promise/no-new-statics': 'error',
	'promise/no-return-in-finally': 'error',
	'promise/valid-params': 'error',
	'promise/no-multiple-resolved': 'error',
	'promise/prefer-await-to-callbacks': 'error',
	'promise/prefer-await-to-then': 'error',
	'promise/prefer-catch': 'error',
	'promise/spec-only': 'error',
};
const regexRules = {
	'regex/optimal-quantifier-concatenation': 'error',
	'regex/prefer-range': 'error',
	'regex/prefer-result-array-groups': 'error',
	'regex/prefer-set-operation': 'error',
	'regex/prefer-star-quantifier': 'error',
	'regex/prefer-unicode-codepoint-escapes': 'error',
	'regex/prefer-w': 'error',
	'regex/match-any': 'error',
	'regex/no-useless-set-operand': 'error',
	'regex/no-useless-string-literal': 'error',
	'regex/no-useless-two-nums-quantifier': 'error',
	'regex/no-zero-quantifier': 'error',
	'regex/optimal-lookaround-quantifier': 'error',
	'regex/prefer-character-class': 'error',
	'regex/prefer-d': 'error',
	'regex/prefer-escape-replacement-dollar-char': 'error',
	'regex/prefer-lookaround': 'error',
	'regex/prefer-named-backreference': 'error',
	'regex/prefer-named-capture-group': 'error',
	'regex/prefer-named-replacement': 'error',
	'regex/prefer-plus-quantifier': 'error',
	'regex/prefer-predefined-assertion': 'error',
	'regex/prefer-quantifier': 'error',
	'regex/prefer-question-quantifier': 'error',
	'regex/prefer-regexp-exec': 'error',
	'regex/prefer-regexp-test': 'error',
	'regex/confusing-quantifier': 'error',
	'regex/control-character-escape': 'error',
	'regex/grapheme-string-literal': 'error',
	'regex/hexadecimal-escape': 'error',
	'regex/letter-case': 'error',
	'regex/negation': 'error',
	'regex/no-contradiction-with-assertion': 'error',
	'regex/no-control-character': 'error',
	'regex/no-dupe-characters-character-class': 'error',
	'regex/no-dupe-disjunctions': 'error',
	'regex/no-empty-alternative': 'error',
	'regex/no-empty-capturing-group': 'error',
	'regex/no-empty-character-class': 'error',
	'regex/no-empty-group': 'error',
	'regex/no-empty-lookarounds-assertion': 'error',
	'regex/no-empty-string-literal': 'error',
	'regex/no-escape-backspace': 'error',
	'regex/no-extra-lookaround-assertions': 'error',
	'regex/no-invalid-regexp': 'error',
	'regex/no-invisible-character': 'error',
	'regex/no-lazy-ends': 'error',
	'regex/no-legacy-features': 'error',
	'regex/no-misleading-capturing-group': 'error',
	'regex/no-misleading-unicode-character': 'error',
	'regex/no-missing-g-flag': 'error',
	'regex/no-non-standard-flag': 'error',
	'regex/no-obscure-range': 'error',
	'regex/no-octal': 'error',
	'regex/no-optional-assertion': 'error',
	'regex/no-potentially-useless-backreference': 'error',
	'regex/no-standalone-backslash': 'error',
	'regex/no-super-linear-backtracking': 'error',
	'regex/no-super-linear-move': 'error',
	'regex/no-trivially-nested-assertion': 'error',
	'regex/no-trivially-nested-quantifier': 'error',
	'regex/no-unused-capturing-group': 'error',
	'regex/no-useless-assertions': 'error',
	'regex/no-useless-backreference': 'error',
	'regex/no-useless-character-class': 'error',
	'regex/no-useless-dollar-replacements': 'error',
	'regex/no-useless-escape': 'error',
	'regex/no-useless-flag': 'error',
	'regex/no-useless-lazy': 'error',
	'regex/no-useless-non-capturing-group': 'error',
	'regex/no-useless-quantifier': 'error',
	'regex/no-useless-range': 'error',
	'regex/require-unicode-regexp': 'error',
	'regex/require-unicode-sets-regexp': 'error',
	'regex/simplify-set-operations': 'error',
	'regex/sort-alternatives': 'error',
	'regex/sort-character-class-elements': 'error',
	'regex/sort-flags': 'error',
	'regex/strict': 'error',
	'regex/unicode-escape': 'error',
	'regex/unicode-property': 'error',
	'regex/use-ignore-case': 'error',
};
const securityRules = {
	// Recommended
	'security/detect-unsafe-regex': 'error',
	'security/detect-non-literal-regexp': 'error',
	'security/detect-non-literal-require': 'error',
	'security/detect-non-literal-fs-filename': 'error',
	'security/detect-eval-with-expression': 'error',
	'security/detect-pseudoRandomBytes': 'error',
	'security/detect-possible-timing-attacks': 'error',
	'security/detect-no-csrf-before-method-override': 'error',
	'security/detect-buffer-noassert': 'error',
	'security/detect-child-process': 'error',
	'security/detect-disable-mustache-escape': 'error',
	'security/detect-object-injection': 'error',
	'security/detect-new-buffer': 'error',
	'security/detect-bidi-characters': 'error',
};
const sonarjsRules = {
	// TODO: Check
	'sonarjs/class-name': 'error',
	'sonarjs/no-fallthrough': 'error',
	'sonarjs/no-equals-in-for-termination': 'error',
	'sonarjs/no-extra-arguments': 'error',
	'sonarjs/no-labels': 'error',
	'sonarjs/no-nested-assignment': 'error',
	'sonarjs/no-redundant-boolean': 'error',
	'sonarjs/prefer-single-boolean-return': 'error',
	'sonarjs/unused-import': 'error',
	'sonarjs/fixme-tag': 'error',
	'sonarjs/no-case-label-in-switch': 'error',
	'sonarjs/no-parameter-reassignment': 'error',
	'sonarjs/prefer-while': 'error',
	'sonarjs/no-small-switch': 'error',
	'sonarjs/no-hardcoded-ip': 'error',
	'sonarjs/label-position': 'error',
	'sonarjs/public-static-readonly': 'error',
	'sonarjs/call-argument-line': 'error',
	'sonarjs/max-switch-cases': 'error',
	'sonarjs/no-unused-vars': 'error',
	'sonarjs/function-inside-loop': 'error',
	'sonarjs/code-eval': 'error',
	'sonarjs/future-reserved-words': 'error',
	'sonarjs/bitwise-operators': 'error',
	'sonarjs/no-primitive-wrappers': 'error',
	'sonarjs/no-skipped-tests': 'error',
	'sonarjs/no-one-iteration-loop': 'error',
	'sonarjs/no-identical-expressions': 'error',
	'sonarjs/constructor-for-side-effects': 'error',
	'sonarjs/no-dead-store': 'error',
	'sonarjs/no-identical-conditions': 'error',
	'sonarjs/no-duplicated-branches': 'error',
	'sonarjs/no-inverted-boolean-check': 'error',
	'sonarjs/misplaced-loop-counter': 'error',
	'sonarjs/no-nested-functions': 'error',
	'sonarjs/no-hardcoded-passwords': 'error',
	'sonarjs/sql-queries': 'error',
	'sonarjs/insecure-cookie': 'error',
	'sonarjs/no-useless-increment': 'error',
	'sonarjs/no-globals-shadowing': 'error',
	'sonarjs/no-ignored-return': 'error',
	'sonarjs/arguments-order': 'error',
	'sonarjs/pseudo-random': 'error',
	'sonarjs/for-loop-increment-sign': 'error',
	'sonarjs/null-dereference': 'error',
	'sonarjs/no-selector-parameter': 'error',
	'sonarjs/updated-loop-counter': 'error',
	'sonarjs/block-scoped-var': 'error',
	'sonarjs/no-ignored-exceptions': 'error',
	'sonarjs/no-gratuitous-expressions': 'error',
	'sonarjs/file-uploads': 'error',
	'sonarjs/file-permissions': 'error',
	'sonarjs/no-empty-character-class': 'error',
	'sonarjs/no-unenclosed-multiline-block': 'error',
	'sonarjs/index-of-compare-to-positive-number': 'error',
	'sonarjs/assertions-in-tests': 'error',
	'sonarjs/no-implicit-global': 'error',
	'sonarjs/no-useless-catch': 'error',
	'sonarjs/xml-parser-xxe': 'error',
	'sonarjs/non-existent-operator': 'error',
	'sonarjs/post-message': 'error',
	'sonarjs/no-array-delete': 'error',
	'sonarjs/no-alphabetical-sort': 'error',
	'sonarjs/no-incomplete-assertions': 'error',
	'sonarjs/no-global-this': 'error',
	'sonarjs/new-operator-misuse': 'error',
	'sonarjs/no-delete-var': 'error',
	'sonarjs/cookie-no-httponly': 'error',
	'sonarjs/no-nested-conditional': 'error',
	'sonarjs/different-types-comparison': 'error',
	'sonarjs/inverted-assertion-arguments': 'error',
	'sonarjs/updated-const-var': 'error',
	'sonarjs/no-invariant-returns': 'error',
	'sonarjs/generator-without-yield': 'error',
	'sonarjs/no-associative-arrays': 'error',
	'sonarjs/comma-or-logical-or-case': 'error',
	'sonarjs/no-redundant-jump': 'error',
	'sonarjs/inconsistent-function-call': 'error',
	'sonarjs/no-use-of-empty-return-value': 'error',
	'sonarjs/void-use': 'error',
	'sonarjs/cognitive-complexity': 'error',
	'sonarjs/argument-type': 'error',
	'sonarjs/in-operator-type-error': 'error',
	'sonarjs/array-callback-without-return': 'error',
	'sonarjs/function-return-type': 'error',
	'sonarjs/super-invocation': 'error',
	'sonarjs/no-all-duplicated-branches': 'error',
	'sonarjs/no-same-line-conditional': 'error',
	'sonarjs/no-collection-size-mischeck': 'error',
	'sonarjs/no-unthrown-error': 'error',
	'sonarjs/no-unused-collection': 'error',
	'sonarjs/no-os-command-from-path': 'error',
	'sonarjs/no-misleading-array-reverse': 'error',
	'sonarjs/no-invalid-await': 'error',
	'sonarjs/no-element-overwrite': 'error',
	'sonarjs/no-identical-functions': 'error',
	'sonarjs/no-empty-collection': 'error',
	'sonarjs/no-redundant-assignments': 'error',
	'sonarjs/prefer-type-guard': 'error',
	'sonarjs/use-type-alias': 'error',
	'sonarjs/no-useless-intersection': 'error',
	'sonarjs/weak-ssl': 'error',
	'sonarjs/no-weak-keys': 'error',
	'sonarjs/csrf': 'error',
	'sonarjs/production-debug': 'error',
	'sonarjs/prefer-default-last': 'error',
	'sonarjs/no-in-misuse': 'error',
	'sonarjs/no-duplicate-in-composite': 'error',
	'sonarjs/no-undefined-argument': 'error',
	'sonarjs/no-nested-template-literals': 'error',
	'sonarjs/prefer-promise-shorthand': 'error',
	'sonarjs/os-command': 'error',
	'sonarjs/no-redundant-optional': 'error',
	'sonarjs/hashing': 'error',
	'sonarjs/no-try-promise': 'error',
	'sonarjs/unverified-certificate': 'error',
	'sonarjs/no-unsafe-unzip': 'error',
	'sonarjs/cors': 'error',
	'sonarjs/link-with-target-blank': 'error',
	'sonarjs/disabled-auto-escaping': 'error',
	'sonarjs/table-header': 'error',
	'sonarjs/no-table-as-layout': 'error',
	'sonarjs/table-header-reference': 'error',
	'sonarjs/object-alt-content': 'error',
	'sonarjs/no-clear-text-protocols': 'error',
	'sonarjs/publicly-writable-directories': 'error',
	'sonarjs/unverified-hostname': 'error',
	'sonarjs/encryption-secure-mode': 'error',
	'sonarjs/no-weak-cipher': 'error',
	'sonarjs/no-intrusive-permissions': 'error',
	'sonarjs/insecure-jwt-token': 'error',
	'sonarjs/x-powered-by': 'error',
	'sonarjs/hidden-files': 'error',
	'sonarjs/content-length': 'error',
	'sonarjs/disabled-resource-integrity': 'error',
	'sonarjs/content-security-policy': 'error',
	'sonarjs/no-mixed-content': 'error',
	'sonarjs/frame-ancestors': 'error',
	'sonarjs/no-mime-sniff': 'error',
	'sonarjs/no-referrer-policy': 'error',
	'sonarjs/strict-transport-security': 'error',
	'sonarjs/confidential-information-logging': 'error',
	'sonarjs/no-ip-forward': 'error',
	'sonarjs/empty-string-repetition': 'error',
	'sonarjs/regex-complexity': 'error',
	'sonarjs/anchor-precedence': 'error',
	'sonarjs/slow-regex': 'error',
	'sonarjs/no-invalid-regexp': 'error',
	'sonarjs/unused-named-groups': 'error',
	'sonarjs/no-same-argument-assert': 'error',
	'sonarjs/no-misleading-character-class': 'error',
	'sonarjs/duplicates-in-character-class': 'error',
	'sonarjs/session-regeneration': 'error',
	'sonarjs/test-check-exception': 'error',
	'sonarjs/stable-tests': 'error',
	'sonarjs/no-empty-after-reluctant': 'error',
	'sonarjs/single-character-alternation': 'error',
	'sonarjs/no-code-after-done': 'error',
	'sonarjs/disabled-timeout': 'error',
	'sonarjs/chai-determinate-assertion': 'error',
	'sonarjs/aws-s3-bucket-insecure-http': 'error',
	'sonarjs/aws-s3-bucket-versioning': 'error',
	'sonarjs/aws-s3-bucket-granted-access': 'error',
	'sonarjs/no-angular-bypass-sanitization': 'error',
	'sonarjs/aws-iam-public-access': 'error',
	'sonarjs/aws-ec2-unencrypted-ebs-volume': 'error',
	'sonarjs/aws-s3-bucket-public-access': 'error',
	'sonarjs/aws-iam-all-privileges': 'error',
	'sonarjs/aws-rds-unencrypted-databases': 'error',
	'sonarjs/aws-opensearchservice-domain': 'error',
	'sonarjs/aws-iam-privilege-escalation': 'error',
	'sonarjs/aws-sagemaker-unencrypted-notebook': 'error',
	'sonarjs/aws-restricted-ip-admin-access': 'error',
	'sonarjs/no-empty-alternatives': 'error',
	'sonarjs/no-control-regex': 'error',
	'sonarjs/no-regex-spaces': 'error',
	'sonarjs/aws-sns-unencrypted-topics': 'error',
	'sonarjs/existing-groups': 'error',
	'sonarjs/aws-ec2-rds-dms-public': 'error',
	'sonarjs/aws-sqs-unencrypted-queue': 'error',
	'sonarjs/no-empty-group': 'error',
	'sonarjs/aws-efs-unencrypted': 'error',
	'sonarjs/aws-apigateway-public-api': 'error',
	'sonarjs/stateful-regex': 'error',
	'sonarjs/concise-regex': 'error',
	'sonarjs/single-char-in-character-classes': 'error',
	'sonarjs/no-hardcoded-secrets': 'error',
	'sonarjs/no-exclusive-tests': 'error',
	'sonarjs/jsx-no-leaked-render': 'error',
	'sonarjs/no-hook-setter-in-body': 'error',
	'sonarjs/no-useless-react-setstate': 'error',
	'sonarjs/redundant-type-aliases': 'error',
	'sonarjs/prefer-regexp-exec': 'error',
	'sonarjs/no-internal-api-use': 'error',
	'sonarjs/prefer-read-only-props': 'error',
	'sonarjs/no-literal-call': 'error',
	'sonarjs/reduce-initial-value': 'error',
	'sonarjs/no-async-constructor': 'error',
	'sonarjs/no-uniq-key': 'error',

	// ...sonarjs.configs.recommended.rules,

	'sonarjs/no-empty-test-file': 'off', // TODO TEMP
	'sonarjs/todo-tag': 'off', // TODO TEMP
	'sonarjs/no-commented-code': 'off', // TODO TEMP
	'sonarjs/no-return-type-any': 'error',
	'sonarjs/no-collapsible-if': 'error',
	'sonarjs/prefer-immediate-return': 'error',
	'sonarjs/no-duplicate-string': 'error',
	'sonarjs/nested-control-flow': 'error', // default: 3
	'sonarjs/elseif-without-else': 'error',
	'sonarjs/cyclomatic-complexity': 'error',
	'sonarjs/expression-complexity': 'error',
	'sonarjs/no-unused-function-argument': 'error',
	'sonarjs/operation-returning-nan': 'error',
	'sonarjs/non-number-in-arithmetic-expression': 'error',
	'sonarjs/no-require-or-define': 'error',
	'sonarjs/prefer-object-literal': 'error',
	'sonarjs/destructuring-assignment-syntax': 'error',
	'sonarjs/strings-comparison': 'error',
	'sonarjs/no-inconsistent-returns': 'error',
	'sonarjs/max-union-size': 'error',
	'sonarjs/bool-param-default': 'error',
	'sonarjs/values-not-convertible-to-numbers': 'error',
	'sonarjs/no-nested-incdec': 'error',
	'sonarjs/no-built-in-override': 'error',
	'sonarjs/no-incorrect-string-concat': 'error',
	'sonarjs/unicode-aware-regex': 'error',
	'sonarjs/no-nested-switch': 'error', // It may be necessary, then disable it
	'sonarjs/no-wildcard-import': 'error',
	'sonarjs/no-variable-usage-before-declaration': 'error',

	/* off rules */
	'sonarjs/file-name-differ-from-class': 'off',
	'sonarjs/comment-regex': 'off',
	'sonarjs/no-sonar-comments': 'off',
	'sonarjs/aws-iam-all-resources-accessible': 'off',
	'sonarjs/function-name': 'off',
	'sonarjs/variable-name': 'off',
	'sonarjs/max-lines': 'off',
	'sonarjs/max-lines-per-function': 'off',
	'sonarjs/file-header': 'off',
	'sonarjs/deprecation': 'off', // Rule doesn't work correctly
	'sonarjs/no-implicit-dependencies': 'off', // Disabled because SvelteKit aliases (e.g., `$lib`) and monorepos can cause false positives.
	'sonarjs/too-many-break-or-continue-in-loop': 'off', // Should not contain a break or continuation at all
	'sonarjs/for-in': 'off', // In Typescript more use 'for of' and we have rule for this
	'sonarjs/no-for-in-iterable': 'off', // In Typescript more use 'for of' and we have rule for this
	'sonarjs/array-constructor': 'off', // Is similar rule for one for TS
	'sonarjs/declarations-in-global-scope': 'off', // Useless for typescript, because typescript have scopes instead of javascript

	// possible problems
	'sonarjs/no-function-declaration-in-block': 'off', // In Svelte we often define functions in onMount or inside effects ($: ...).
	'sonarjs/no-undefined-assignment': 'off', // In TypeScript let x: string | undefined is correct and useful.
	'sonarjs/arguments-usage': 'off', // In TypeScript, you use rest parameters (...args), but arguments are sometimes needed.
	'sonarjs/arrow-function-convention': 'off', // TypeScript formatuje to automatycznie (Prettier/ESLint ma lepszą kontrolę nad tym).
	'sonarjs/class-prototype': 'off', // In TypeScript and Svelte prototype is rarely used – if someone uses it, it is done consciously
	'sonarjs/no-reference-error': 'off', // Possible problem when use 'console' od 'process'
	'sonarjs/shorthand-property-grouping': 'error',
};
const stylisticRules = {
	'@stylistic/lines-between-class-members': 'error',
	'@stylistic/spaced-comment': 'error',
	'@stylistic/jsx-function-call-newline': 'error',
	'@stylistic/jsx-curly-brace-presence': 'error',
	'@stylistic/curly-newline': 'error',
	'@stylistic/max-statements-per-line': ['warn', { max: 1 }],
	'@stylistic/member-delimiter-style': 'error',
	'@stylistic/array-bracket-newline': ['error', 'consistent'],
	'@stylistic/array-bracket-spacing': ['error', 'never'],
	'@stylistic/array-element-newline': ['error', 'consistent'],
	'@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
	'@stylistic/comma-spacing': [
		'error',
		{
			after: true,
			before: false,
		},
	],
	'@stylistic/indent': ['error', 'tab'],
	'@stylistic/keyword-spacing': [
		'error',
		{
			after: true,
			before: true,
		},
	],
	'@stylistic/multiline-comment-stylistic': 'off',
	'@stylistic/no-multiple-empty-lines': [
		'error',
		{
			max: 1,
			maxEOF: 1,
		},
	],

	'@stylistic/no-trailing-spaces': [
		'error',
		{
			ignoreComments: true,
			skipBlankLines: false,
		},
	],
	'@stylistic/object-curly-spacing': ['error', 'always'],
	'@stylistic/padded-blocks': ['error', 'never', { allowSingleLineBlocks: true }],
	'@stylistic/quote-props': ['error', 'consistent-as-needed'],
	'@stylistic/quotes': ['error', 'single', { allowTemplateLiterals: true, avoidEscape: true }],
	'@stylistic/semi': ['error', 'always'],
	'@stylistic/function-call-spacing': ['error', 'never'],
	'@stylistic/function-call-argument-newline': ['error', 'consistent'],
	'@stylistic/jsx-self-closing-comp': 'error',
	'@stylistic/jsx-props-no-multi-spaces': 'error',
	'@stylistic/newline-per-chained-call': ['error', { ignoreChainWithDepth: 3 }],
	'@stylistic/object-property-newline': ['error', { allowAllPropertiesOnSameLine: false }],
	'@stylistic/switch-colon-spacing': ['error', { after: true, before: false }],
	'@stylistic/function-paren-newline': ['error', 'consistent'],
	'@stylistic/object-curly-newline': ['error', { multiline: true, consistent: true }],
	'@stylistic/padding-line-between-statements': [
		'error',
		{ blankLine: 'always', prev: '*', next: 'return' },
	],
	'@stylistic/semi-style': ['error', 'last'],
	// '@stylistic/linebreak-style': ['error', 'unix'], // Can be problematic
	'@stylistic/linebreak-style': 'off',
	'@stylistic/max-len': ['error', { code: 130, ignoreUrls: true }],
	// '@stylistic/max-len': 'off',

	// Disabled because Prettier/impractical
	'@stylistic/func-call-spacing': 'off', // same as `@stylistic/function-call-spacing`
	'@stylistic/no-extra-semi': 'off',
	'@stylistic/multiline-ternary': 'off',
	'@stylistic/one-var-declaration-per-line': 'off',
	'@stylistic/no-tabs': 'off',
	'@stylistic/jsx-child-element-spacing': 'off',
	'@stylistic/implicit-arrow-linebreak': 'off',
	'@stylistic/generator-star-spacing': 'off',
	'@stylistic/jsx-newline': 'off',
	'@stylistic/jsx-sort-props': 'off',
	'@stylistic/jsx-pascal-case': 'off',
	'@stylistic/line-comment-position': 'off',
	'@stylistic/multiline-comment-style': 'off',
	'@stylistic/lines-around-comment': 'off',
	'@stylistic/no-confusing-arrow': 'off',
	'@stylistic/wrap-regex': 'off',
	'@stylistic/nonblock-statement-body-position': 'off',
};
const svelteRules = {
	// To check TODO
	'svelte/comment-directive': 'error',
	'svelte/consistent-selector-style': 'error',
	'svelte/no-at-debug-tags': 'error',
	'svelte/no-at-html-tags': 'error',
	'svelte/no-dupe-else-if-blocks': 'error',
	'svelte/no-dupe-style-properties': 'error',
	'svelte/no-inner-declarations': 'error',
	'svelte/no-navigation-without-base': 'error',
	'svelte/no-not-function-handler': 'error',
	'svelte/no-object-in-text-mustaches': 'error',
	'svelte/no-raw-special-elements': 'error',
	'svelte/no-shorthand-style-property-overrides': 'error',
	'svelte/no-unknown-style-directive-property': 'error',
	'svelte/no-unused-svelte-ignore': 'error',
	'svelte/no-useless-children-snippet': 'error',
	'svelte/prefer-const': 'error',
	'svelte/system': 'error',
	'svelte/valid-compile': 'error',
	'svelte/valid-style-parse': 'error',
	// Possible Errors
	'svelte/infinite-reactive-loop': 'error',
	'svelte/no-dom-manipulating': 'error',
	'svelte/no-dupe-on-directives': 'error',
	'svelte/no-dupe-use-directives': 'error',
	'svelte/no-export-load-in-svelte-module-in-kit-pages': 'error',
	'svelte/no-reactive-reassign': 'error',
	'svelte/no-store-async': 'error',
	'svelte/require-store-callbacks-use-set-param': 'error',
	'svelte/require-store-reactive-access': 'error',
	'svelte/valid-prop-names-in-kit-pages': 'error',

	// Security
	'svelte/no-target-blank': 'error',

	// Stylistic issues in svelte
	'svelte/derived-has-same-inputs-outputs': 'error',
	'svelte/first-attribute-linebreak': 'error',
	'svelte/html-closing-bracket-spacing': 'error',
	'svelte/html-quotes': 'error',
	'svelte/html-self-closing': 'error',
	'svelte/mustache-spacing': 'error',
	'svelte/no-extra-reactive-curlies': 'error',
	'svelte/no-spaces-around-equal-signs-in-attribute': 'error',
	'svelte/prefer-class-directive': 'error',
	'svelte/prefer-style-directive': 'error',
	'svelte/shorthand-attribute': 'error',
	'svelte/shorthand-directive': 'error',
	'svelte/sort-attributes': 'error',
	'svelte/spaced-html-comment': 'error',
	'svelte/no-trailing-spaces': 'off', // Stylistic has same rule

	// Best Practices
	'svelte/no-useless-mustaches': 'error',
	'svelte/prefer-destructured-store-props': 'error',
	'svelte/require-each-key': 'error',
	'svelte/require-event-dispatcher-types': 'error',
	'svelte/require-optimized-style-attribute': 'error',
	'svelte/require-stores-init': 'error',
	'svelte/valid-each-key': 'error',
	'svelte/no-ignored-unsubscribe': 'error',
	'svelte/no-immutable-reactive-statements': 'error',
	'svelte/no-inspect': 'error',
	'svelte/no-reactive-functions': 'error',
	'svelte/no-reactive-literals': 'error',
	'svelte/no-svelte-internal': 'error',
	'svelte/block-lang': ['error', { script: ['ts'], style: 'css' }],
	'svelte/button-has-type': 'error',

	// Off
	'svelte/no-unused-class-name': 'off', // Broken rule
	'svelte/no-inline-styles': 'off',
	'svelte/indent': 'off',
	'svelte/max-attributes-per-line': 'off',
	'svelte/html-closing-bracket-new-line': 'off', // Collision with prettier
	'svelte/no-restricted-html-elements': 'off',
	// 'svelte/experimental-require-slot-types': 'error',
	// 'svelte/experimental-require-strict-events': 'off',
};
const tailwindRules = {
	'tailwind/classnames-order': 'error',
	'tailwind/enforces-negative-arbitrary-values': 'error',
	'tailwind/enforces-shorthand': 'error',
	'tailwind/migration-from-tailwind-2': 'error',
	'tailwind/no-arbitrary-value': 'error',
	'tailwind/no-contradicting-classname': 'error',
	'tailwind/no-custom-classname': 'error',
	'tailwind/no-unnecessary-arbitrary-value': 'error',
};
const tsDocRules = { 'tsDoc/syntax': 'warn' };
const typescriptRules = {
	/* TypeScript rules */

	/* Non configurable */
	'@typescript-eslint/no-dynamic-delete': 'error',
	'@typescript-eslint/no-empty-object-type': 'error',
	'@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
	'@typescript-eslint/no-unnecessary-type-constraint': 'error',
	'@typescript-eslint/no-unsafe-declaration-merging': 'error',
	'@typescript-eslint/no-unsafe-function-type': 'error',
	'@typescript-eslint/no-wrapper-object-types': 'error',
	'@typescript-eslint/prefer-namespace-keyword': 'error',
	'@typescript-eslint/prefer-optional-chain': 'error',
	'@typescript-eslint/ban-tslint-comment': 'error',
	'default-param-last': 'off',
	'@typescript-eslint/default-param-last': 'error',
	'@typescript-eslint/await-thenable': 'error',
	'@typescript-eslint/adjacent-overload-signatures': 'error',
	'@typescript-eslint/no-extra-non-null-assertion': 'error',
	'@typescript-eslint/no-floating-promises': 'error',
	'@typescript-eslint/no-for-in-array': 'error',
	'@typescript-eslint/no-invalid-this': 'error',
	'@typescript-eslint/no-invalid-void-type': 'error',
	'@typescript-eslint/no-misused-new': 'error',
	'@typescript-eslint/no-mixed-enums': 'error',
	'@typescript-eslint/no-namespace': 'error',
	'@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
	'@typescript-eslint/no-non-null-assertion': 'error',
	'@typescript-eslint/no-this-alias': 'error',
	'@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
	'@typescript-eslint/no-unnecessary-condition': 'error',
	'@typescript-eslint/no-unnecessary-qualifier': 'error',
	'@typescript-eslint/no-unnecessary-type-arguments': 'error',
	'@typescript-eslint/no-unnecessary-type-assertion': 'error',
	'@typescript-eslint/no-unsafe-argument': 'error',
	'@typescript-eslint/no-unsafe-call': 'error',
	'@typescript-eslint/no-unsafe-member-access': 'error',
	'@typescript-eslint/no-unsafe-return': 'error',
	'no-useless-constructor': 'off',
	'@typescript-eslint/no-useless-constructor': 'error',
	'@typescript-eslint/no-confusing-non-null-assertion': 'error',
	'@typescript-eslint/no-deprecated': 'error',
	'no-loop-func': 'off',
	'@typescript-eslint/no-loop-func': 'error',
	'@typescript-eslint/no-redundant-type-constituents': 'error',
	'@typescript-eslint/no-duplicate-enum-values': 'error',
	'@typescript-eslint/no-array-delete': 'error',
	'@typescript-eslint/no-meaningless-void-operator': 'error',
	'@typescript-eslint/no-unsafe-unary-minus': 'error',
	'@typescript-eslint/no-useless-empty-export': 'error',
	'@typescript-eslint/no-unnecessary-template-expression': 'error',
	'@typescript-eslint/no-unnecessary-type-parameters': 'error',
	'@typescript-eslint/no-unsafe-enum-comparison': 'error',
	'@typescript-eslint/use-unknown-in-catch-callback-variable': 'error',
	'@typescript-eslint/no-unnecessary-parameter-property-assignment': 'error',
	'@typescript-eslint/prefer-reduce-type-parameter': 'error',
	'@typescript-eslint/prefer-find': 'error',
	'@typescript-eslint/non-nullable-type-assertion-style': 'error',
	'@typescript-eslint/no-unsafe-type-assertion': 'error',
	'@typescript-eslint/prefer-function-type': 'error',
	'@typescript-eslint/prefer-regexp-exec': 'error',
	'@typescript-eslint/prefer-includes': 'error',
	'@typescript-eslint/prefer-for-of': 'error',
	'@typescript-eslint/prefer-enum-initializers': 'error',
	'@typescript-eslint/no-import-type-side-effects': 'error',
	'no-implied-eval': 'off',
	'@typescript-eslint/no-implied-eval': 'error',
	'no-array-constructor': 'off',
	'@typescript-eslint/no-array-constructor': 'error',
	'@typescript-eslint/prefer-as-const': 'error',
	'@typescript-eslint/related-getter-setter-pairs': 'error',
	'@typescript-eslint/prefer-return-this-type': 'error',
	'@typescript-eslint/no-unsafe-assignment': 'error',

	/* Configurable */
	'@typescript-eslint/no-inferrable-types': [
		'error',
		{
			ignoreParameters: true,
			ignoreProperties: true,
		},
	], // Disable when you want explicit types
	'@typescript-eslint/no-extraneous-class': ['error', { allowStaticOnly: true }],
	'@typescript-eslint/no-misused-spread': 'error',
	'@typescript-eslint/explicit-module-boundary-types': [
		'error',
		{
			allowHigherOrderFunctions: true,
			allowTypedFunctionExpressions: true,
			allowedNames: ['setup'],
		},
	],
	'@typescript-eslint/consistent-generic-constructors': ['error', 'constructor'],
	'@typescript-eslint/switch-exhaustiveness-check': 'error',
	'@typescript-eslint/promise-function-async': ['error', { allowAny: false }],
	'@typescript-eslint/prefer-string-starts-ends-with': [
		'error',
		{ allowSingleElementEquality: 'always' },
	],
	'@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
	'@typescript-eslint/consistent-type-assertions': [
		'error',
		{
			assertionStyle: 'as',
			objectLiteralTypeAssertions: 'allow-as-parameter',
		},
	],
	'dot-notation': 'off',
	'@typescript-eslint/dot-notation': ['error', { allowKeywords: true, allowPattern: '' }],
	'@typescript-eslint/method-signature-style': ['error', 'method'],
	'@typescript-eslint/class-literal-property-style': ['error', 'fields'],
	'@typescript-eslint/array-type': ['error', { default: 'array-simple', readonly: 'array' }],
	'@typescript-eslint/ban-ts-comment': ['error', { 'ts-expect-error': 'allow-with-description' }],
	'prefer-promise-reject-errors': 'off',
	'@typescript-eslint/prefer-promise-reject-errors': 'error',
	'@typescript-eslint/no-base-to-string': 'error',
	'@typescript-eslint/no-explicit-any': ['error', { fixToUnknown: false }],
	'no-unused-vars': 'off',
	'@typescript-eslint/no-unused-vars': [
		'error',
		{
			vars: 'all',
			args: 'after-used',
			caughtErrors: 'all',
			ignoreRestSiblings: false,
			reportUsedIgnorePattern: false,
		},
	],
	'@typescript-eslint/no-require-imports': ['error', { allowAsImport: false }],
	'no-unused-expressions': 'off',
	'@typescript-eslint/no-unused-expressions': [
		'error',
		{
			enforceForJSX: false,
			allowShortCircuit: true,
			allowTernary: true,
			allowTaggedTemplates: true,
		},
	],
	'no-use-before-define': 'off',
	'@typescript-eslint/no-use-before-define': 'error',
	'no-shadow': 'off',
	'@typescript-eslint/no-shadow': 'error',
	'@typescript-eslint/no-misused-promises': 'error',
	'@typescript-eslint/no-confusing-void-expression': 'error',
	'@typescript-eslint/no-duplicate-type-constituents': 'error',
	'no-empty-function': 'off',
	'@typescript-eslint/no-empty-function': 'error',
	'no-magic-numbers': 'off',
	'@typescript-eslint/no-magic-numbers': [
		'error',
		{
			ignoreEnums: true,
			ignoreTypeIndexes: true,
			ignoreArrayIndexes: true,
		},
	],
	'@typescript-eslint/prefer-literal-enum-member': 'error',
	'@typescript-eslint/prefer-nullish-coalescing': 'error',

	'@typescript-eslint/prefer-readonly-parameter-types': [
		'error',
		{
			ignoreInferredTypes: true,
		},
	],
	'@typescript-eslint/unbound-method': 'error',
	'class-methods-use-this': 'off',
	'@typescript-eslint/class-methods-use-this': 'error',
	'@typescript-eslint/consistent-type-exports': [
		'error',
		{ fixMixedExportsWithInlineTypeSpecifier: true },
	],
	'@typescript-eslint/consistent-type-imports': [
		'error',
		{
			disallowTypeAnnotations: true,
			fixStyle: 'inline-type-imports',
			prefer: 'type-imports',
		},
	],
	'@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
	'@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'explicit' }],
	'require-await': 'off',
	'@typescript-eslint/require-await': 'error',
	'@typescript-eslint/explicit-function-return-type': [
		'error',
		{
			allowExpressions: true,
			allowTypedFunctionExpressions: true,
			allowHigherOrderFunctions: true,
			allowIIFEs: true,
		},
	],
	'@typescript-eslint/unified-signatures': ['error', { ignoreDifferentlyNamedParameters: false }],
	'@typescript-eslint/triple-slash-reference': [
		'error',
		{ lib: 'never', path: 'never', types: 'never' },
	],
	'@typescript-eslint/strict-boolean-expressions': [
		'error',
		{
			allowNullableBoolean: false,
			allowNullableObject: false,
		},
	],
	'no-return-await': 'off',
	'@typescript-eslint/return-await': ['error', 'in-try-catch'],
	'@typescript-eslint/restrict-plus-operands': [
		'error',
		{
			allowAny: false,
			allowBoolean: false,
			allowNullish: false,
			allowNumberAndString: false,
			allowRegExp: false,
		},
	],
	'max-params': 'off',
	'@typescript-eslint/max-params': ['error', { max: 4 }],
	'@typescript-eslint/parameter-properties': [
		'error',
		{ allow: ['public readonly'], prefer: 'parameter-property' },
	],
	'prefer-destructuring': 'off',
	'@typescript-eslint/prefer-destructuring': [
		'error',
		{
			object: true,
			array: false,
		},
		{
			enforceForRenamedProperties: false,
			enforceForDeclarationWithTypeAnnotation: false,
		},
	],
	'@typescript-eslint/restrict-template-expressions': [
		'error',
		{
			allowNumber: true,
			allowBoolean: true,
			allowNullish: true,
			allowAny: false,
			allowArray: false,
			allowRegExp: false,
		},
	],
	'@typescript-eslint/prefer-readonly': ['error', { onlyInlineLambdas: true }],

	// Disabled for some reason
	'no-throw-literal': 'off',
	'@typescript-eslint/only-throw-error': 'off', // Because detect sveltekit errors as bad
	'@typescript-eslint/typedef': 'off', // If you use strict: true, you don't need this rule!
	'init-declarations': 'off',
	'@typescript-eslint/init-declarations': 'off',
	'@typescript-eslint/member-ordering': 'off', // perfectionist
	'@typescript-eslint/naming-convention': 'off',
	'@typescript-eslint/no-restricted-types': 'off',
	'no-restricted-imports': 'off',
	'@typescript-eslint/no-restricted-imports': 'off',
	// "The code problem checked by this ESLint rule is automatically checked by the TypeScript compiler.
	// Thus, it is not recommended to turn on this rule in new TypeScript projects."
	// https://typescript-eslint.io/rules/no-redeclare/
	'@typescript-eslint/no-redeclare': 'off',
	'@typescript-eslint/require-array-sort-compare': 'off',
	// "If possible, it is recommended to use tsconfig's noImplicitReturns option rather than this rule."
	// https://typescript-eslint.io/rules/consistent-return/
	'consistent-return': 'off',
	'@typescript-eslint/consistent-return': 'off',
	// "The code problem checked by this ESLint rule is automatically checked by the TypeScript compiler.
	// Thus, it is not recommended to turn on this rule in new TypeScript projects.
	// You only need to enable this rule if you prefer the ESLint error messages over the TypeScript compiler error messages."
	// https://typescript-eslint.io/rules/no-dupe-class-members/
	'no-dupe-class-members': 'off',
	'@typescript-eslint/no-dupe-class-members': 'off',
};
const unicornRules = {
	'unicorn/filename-case': [
		'error',
		{
			cases: {
				camelCase: true,
				kebabCase: true,
				pascalCase: true,
			},
			ignore: ['README.md'],
		},
	],

	'unicorn/no-array-for-each': 'error',
	'unicorn/prevent-abbreviations': [
		'error',
		{ allowList: { req: true, res: true, db: true, rel: true, char: true, env: true } },
	],
	'unicorn/no-empty-file': 'off', // TODO TEMP
	'unicorn/error-message': 'error',
	// Disabled: `null` is standard in databases, APIs, and explicit absence of value is clearer than `undefined`.
	'unicorn/no-null': 'off',

	// TODO: Check
	'unicorn/better-regex': 'error',
	'unicorn/catch-error-name': 'error',
	'unicorn/consistent-assert': 'error',
	'unicorn/consistent-date-clone': 'error',
	'unicorn/consistent-destructuring': 'error',
	'unicorn/consistent-empty-array-spread': 'error',
	'unicorn/consistent-existence-index-check': 'error',
	'unicorn/consistent-function-scoping': 'error',
	'unicorn/custom-error-definition': 'error',
	'unicorn/escape-case': 'error',
	'unicorn/expiring-todo-comments': 'error',
	'unicorn/explicit-length-check': 'error',
	'unicorn/import-style': 'error',
	'unicorn/new-for-builtins': 'error',
	'unicorn/no-abusive-eslint-disable': 'error',
	'unicorn/no-accessor-recursion': 'error',
	'unicorn/no-anonymous-default-export': 'error',
	'unicorn/no-array-callback-reference': 'error',
	'unicorn/no-array-method-this-argument': 'error',
	'unicorn/no-array-push-push': 'error',
	'unicorn/no-array-reduce': 'error',
	'unicorn/no-await-expression-member': 'error',
	'unicorn/no-await-in-promise-methods': 'error',
	'unicorn/no-console-spaces': 'error',
	'unicorn/no-document-cookie': 'error',
	'unicorn/no-for-loop': 'error',
	'unicorn/no-hex-escape': 'error',
	'unicorn/no-instanceof-builtins': 'error',
	'unicorn/no-invalid-fetch-options': 'error',
	'unicorn/no-invalid-remove-event-listener': 'error',
	'unicorn/no-keyword-prefix': 'error',
	'unicorn/no-length-as-slice-end': 'error',
	'unicorn/no-lonely-if': 'error',
	'unicorn/no-magic-array-flat-depth': 'error',
	'unicorn/no-named-default': 'error',
	'unicorn/no-negated-condition': 'error',
	'unicorn/no-negation-in-equality-check': 'error',
	'unicorn/no-new-array': 'error',
	'unicorn/no-new-buffer': 'error',
	'unicorn/no-object-as-default-parameter': 'error',
	'unicorn/no-process-exit': 'error',
	'unicorn/no-single-promise-in-promise-methods': 'error',
	'unicorn/no-static-only-class': 'error',
	'unicorn/no-thenable': 'error',
	'unicorn/no-this-assignment': 'error',
	'unicorn/no-typeof-undefined': 'error',
	'unicorn/no-unnecessary-await': 'error',
	'unicorn/no-unnecessary-polyfills': 'error',
	'unicorn/no-unreadable-array-destructuring': 'error',
	'unicorn/no-unreadable-iife': 'error',
	'unicorn/no-unused-properties': 'error',
	'unicorn/no-useless-fallback-in-spread': 'error',
	'unicorn/no-useless-length-check': 'error',
	'unicorn/no-useless-promise-resolve-reject': 'error',
	'unicorn/no-useless-spread': 'error',
	'unicorn/no-useless-switch-case': 'error',
	'unicorn/no-useless-undefined': 'error',
	'unicorn/no-zero-fractions': 'error',
	'unicorn/numeric-separators-style': 'error',
	'unicorn/prefer-add-event-listener': 'error',
	'unicorn/prefer-array-find': 'error',
	'unicorn/prefer-array-flat-map': 'error',
	'unicorn/prefer-array-flat': 'error',
	'unicorn/prefer-array-index-of': 'error',
	'unicorn/prefer-array-some': 'error',
	'unicorn/prefer-at': 'error',
	'unicorn/prefer-blob-reading-methods': 'error',
	'unicorn/prefer-code-point': 'error',
	'unicorn/prefer-date-now': 'error',
	'unicorn/prefer-default-parameters': 'error',
	'unicorn/prefer-dom-node-append': 'error',
	'unicorn/prefer-dom-node-dataset': 'error',
	'unicorn/prefer-dom-node-remove': 'error',
	'unicorn/prefer-dom-node-text-content': 'error',
	'unicorn/prefer-event-target': 'error',
	'unicorn/prefer-export-from': 'error',
	'unicorn/prefer-global-this': 'error',
	'unicorn/prefer-includes': 'error',
	'unicorn/prefer-json-parse-buffer': 'error',
	'unicorn/prefer-keyboard-event-key': 'error',
	'unicorn/prefer-logical-operator-over-ternary': 'error',
	'unicorn/prefer-math-min-max': 'error',
	'unicorn/prefer-math-trunc': 'error',
	'unicorn/prefer-modern-dom-apis': 'error',
	'unicorn/prefer-modern-math-apis': 'error',
	'unicorn/prefer-module': 'error',
	'unicorn/prefer-native-coercion-functions': 'error',
	'unicorn/prefer-negative-index': 'error',
	'unicorn/prefer-node-protocol': 'error',
	'unicorn/prefer-number-properties': 'error',
	'unicorn/prefer-object-from-entries': 'error',
	'unicorn/prefer-optional-catch-binding': 'error',
	'unicorn/prefer-prototype-methods': 'error',
	'unicorn/prefer-query-selector': 'error',
	'unicorn/prefer-reflect-apply': 'error',
	'unicorn/prefer-regexp-test': 'error',
	'unicorn/prefer-set-has': 'error',
	'unicorn/prefer-set-size': 'error',
	'unicorn/prefer-spread': 'error',
	'unicorn/prefer-string-raw': 'error',
	'unicorn/prefer-string-replace-all': 'error',
	'unicorn/prefer-string-slice': 'error',
	'unicorn/prefer-string-starts-ends-with': 'error',
	'unicorn/prefer-string-trim-start-end': 'error',
	'unicorn/prefer-structured-clone': 'error',
	'unicorn/prefer-switch': 'error',
	'unicorn/prefer-ternary': 'error',
	'unicorn/prefer-top-level-await': 'error',
	'unicorn/prefer-type-error': 'error',
	'unicorn/relative-url-style': 'error',
	'unicorn/require-array-join-separator': 'error',
	'unicorn/require-number-to-fixed-digits-argument': 'error',
	'unicorn/require-post-message-target-origin': 'error',
	'unicorn/string-content': 'error',
	'unicorn/switch-case-braces': 'error',
	'unicorn/text-encoding-identifier-case': 'error',
	'unicorn/throw-new-error': 'error',
};
const vitestRules = {
	// Recommended
	'vitest/no-identical-title': 'error',
	'vitest/expect-expect': [
		'error',
		{
			assertFunctionNames: [
				'expect',
				'request.*.expect',
				'request.**.expect',
				'request.*.expect*',
				'get(*).expect',
				'post(*).expect',
				'put(*).expect',
				'delete(*).expect',
				'sendGetRequest(*).expect',
				'sendGetRequest(*).*.expect',
				'sendPostRequest(*).expect',
				'sendPostRequest(*).*.expect',
				'sendPutRequest(*).expect',
				'sendPutRequest(*).*.expect',
				'sendDeleteRequest(*).expect',
				'sendDeleteRequest(*).*.expect',
			],
		},
	],
	'vitest/no-commented-out-tests': 'off',
	'vitest/no-import-node-test': 'error',
	'vitest/valid-title': [
		'error',
		{
			ignoreTypeOfDescribeName: true,
		},
	],
	'vitest/valid-expect': ['error', { maxArgs: 1 }],
	'vitest/require-local-test-context-for-concurrent-snapshots': 'error',
	'vitest/valid-describe-callback': 'error',

	'vitest/prefer-strict-boolean-matchers': 'error',
	'vitest/no-conditional-in-test': 'error',
	'vitest/no-done-callback': 'off', //deprecated
	'vitest/consistent-test-filename': ['error', { pattern: '.*\\.(spec|test)\\.[jt]s$' }],
	'vitest/consistent-test-it': 'error',

	'vitest/max-expects': ['error', { max: 5 }],
	'vitest/max-nested-describe': ['error', { max: 3 }],
	'vitest/no-alias-methods': 'error',

	'vitest/no-conditional-expect': 'error',
	'vitest/no-conditional-tests': 'error',
	'vitest/no-disabled-tests': 'error',
	'vitest/no-duplicate-hooks': 'error',
	'vitest/no-focused-tests': [
		'error',
		{
			fixable: false,
		},
	],
	'vitest/no-hooks': 'error',
	'vitest/no-interpolation-in-snapshots': 'error',
	'vitest/no-large-snapshots': ['error', { maxSize: 50 }],
	'vitest/no-mocks-import': 'error',
	'vitest/no-restricted-matchers': 'error',
	'vitest/no-restricted-vi-methods': 'error',
	'vitest/no-standalone-expect': 'error',
	'vitest/no-test-prefixes': 'error',
	'vitest/no-test-return-statement': 'error',
	'vitest/prefer-called-with': 'error',
	'vitest/prefer-comparison-matcher': 'error',
	'vitest/prefer-each': 'error',
	'vitest/prefer-equality-matcher': 'error',
	'vitest/prefer-expect-assertions': 'error',
	'vitest/prefer-expect-resolves': 'error',
	'vitest/prefer-hooks-in-order': 'error',
	'vitest/prefer-hooks-on-top': 'error',
	'vitest/prefer-lowercase-title': ['error', { ignore: ['describe'] }],
	'vitest/prefer-mock-promise-shorthand': 'error',
	'vitest/prefer-snapshot-hint': 'error',
	'vitest/prefer-spy-on': 'error',
	'vitest/prefer-strict-equal': 'error',
	'vitest/prefer-to-be': 'error',
	'vitest/prefer-to-be-falsy': 'error',
	'vitest/prefer-to-be-object': 'error',
	'vitest/prefer-to-be-truthy': 'error',
	'vitest/prefer-to-contain': 'error',
	'vitest/prefer-to-have-length': 'error',
	'vitest/prefer-todo': 'error',
	'vitest/prefer-vi-mocked': 'error',
	'vitest/require-hook': 'error',
	'vitest/require-to-throw-message': 'error',
	'vitest/require-top-level-describe': 'error',
	'vitest/valid-expect-in-promise': 'error',

	// TODO Check
	'vitest/padding-around-after-all-blocks': 'error',
	'vitest/padding-around-after-each-blocks': 'error',
	'vitest/padding-around-all': 'error',
	'vitest/padding-around-before-all-blocks': 'error',
	'vitest/padding-around-before-each-blocks': 'error',
	'vitest/padding-around-describe-blocks': 'error',
	'vitest/padding-around-expect-groups': 'error',
	'vitest/padding-around-test-blocks': 'error',
	'vitest/require-mock-type-parameters': 'error',
};
const yamlRules = {
	'yml/block-mapping-colon-indicator-newline': 'error',
	'yml/block-mapping-question-indicator-newline': 'error',
	'yml/block-mapping': 'error',
	'yml/block-sequence-hyphen-indicator-newline': 'error',
	'yml/block-sequence': 'error',
	'yml/file-extension': 'off',
	'yml/flow-mapping-curly-newline': 'error',
	'yml/flow-mapping-curly-spacing': 'error',
	'yml/flow-sequence-bracket-newline': 'error',
	'yml/flow-sequence-bracket-spacing': 'error',
	'yml/indent': 'error',
	'yml/key-name-casing': 'off',
	'yml/key-spacing': 'error',
	'yml/no-empty-document': 'error',
	'yml/no-empty-key': 'error',
	'yml/no-empty-mapping-value': 'error',
	'yml/no-empty-sequence-entry': 'error',
	'yml/no-irregular-whitespace': 'error',
	'yml/no-multiple-empty-lines': 'error',
	'yml/no-tab-indent': 'error',
	'yml/no-trailing-zeros': 'error',
	'yml/plain-scalar': 'error',
	'yml/quotes': 'error', //1 quote
	'yml/require-string-key': 'error',
	'yml/sort-keys': 'off',
	'yml/sort-sequence-values': 'off',
	'yml/spaced-comment': 'error',
	'yml/vue-custom-block/no-parsing-error': 'error',
}

export default [
	prettier,
	{
		name: 'Main ruleset',
		files: ['**/*.{ts,tsx,js,jsx,cjs,mjs,svelte}'],
		ignores: [
			'node_modules',
			'node_modules/**',
			'build',
			'.svelte-kit/**',
			'svelte.config.js',
			'vite.config.ts',
			'eslint.config.js',
			'drizzle.config.ts',
			'commitlint.config.js',
			'vitest.config.js',
			'src/routes/sandbox/**',
			'src/routes/debug/**',
			'tsconfig.json',
			'docs/**',
		],
		languageOptions: {
			parser: svelteParser,
			parserOptions: {
				parser: tsParser,
				project: './tsconfig.json',
				extraFileExtensions: ['.svelte'],
				tsconfigRootDir: import.meta.dirname,
			},
		},
		plugins: {
			'@typescript-eslint': ts,
			'@stylistic': stylistic,
			'@pandacss': panda,
			tailwind: tailwind,
			tsDoc: tsDoc,
			unicorn: unicorn,
			svelte: svelte,
			perfectionist: perfectionist,
			js: js,
			functional: functional,
			sonarjs: sonarjs,
			promise: promise,
			drizzle: drizzle,
			import: esImport,
			security: security,
			alias: alias,
			node: node,
			cspell: cspell,
			vitest: vitest,
			regex: regex,
		},
		settings: {
			'import/resolver': {
				typescript: {
					alwaysTryTypes: true,
				},
			},
		},
		rules: {
			...(cspellFlag && {
				...cspellRules,
			}),
			...(nodeFlag && {
				...nodeRules,
			}),
			...(svelteFlag && {
				...svelteRules,
			}),
			...(promiseFlag && {
				...promiseRules,
			}),
			...(drizzleFlag && {
				...drizzleRules,
			}),
			...(aliasFlag && {
				...aliasRules,
			}),
			...(sonarjsFlag && {
				...sonarjsRules,
			}),
			...(securityFlag && {
				...securityRules,
			}),
			...(esImportFlag && {
				...esImportRules,
			}),
			...(functionalFlag && {
				...functionalRules,
			}),
			...(tsDocFlag && {
				...tsDocRules,
			}),
			...(prettierFlag && {
				...prettierRules,
			}),
			...(jsFlag && {
				...jsRules,
			}),
			...(perfectionistFlag && {
				...perfectionistRules,
			}),
			...(unicornFlag && {
				...unicornRules,
			}),
			...(stylisticFlag && {
				...stylisticRules,
			}),
			...(typescriptFlag && {
				...typescriptRules,
			}),
			...(tailwindFlag && {
				...tailwindRules,
			}),
			...(pandacssFlag && {
				...pandacssRules,
			}),
			...(regexFlag && {
				...regexRules,
			}),
		},
	},
	{
		name: 'Tests',
		plugins: {
			js: js,
			'@typescript-eslint': ts,
			vitest: vitest,
			// Enter other plugins whose rules you want to match separately for the tests.
		},
		files: ['tests/**'],
		rules: {
			// Enter the rules you want to match separately for the tests.
			...(typescriptFlag && {
				'@typescript-eslint/no-magic-numbers': 'off', // vitest/prefer-expect-assertions
			}),
			...(vitestFlag && {
				...vitestRules,
			}),
		},
	},
	{
		name: 'Linting eslint',
		files: ['eslint.config.js'],
		plugins: {
			esEs,
		},
		rules: {
			...(esEsFlag && {
				...esEsRules,
			}),
		},
	},
	{
		name: 'HTML',
		files: ['**/*.html'],
		ignores: ['.svelte-kit/**', '**/fixtures', 'node_modules', 'build', 'docs/**'],
		languageOptions: {
			parser: htmlParser,
		},
		plugins: {
			'@html-eslint': html,
		},
		rules: {
			...(htmlFlag && {
				...htmlRules,
			}),
		},
	},
	{
		name: 'JSON',
		files: ['**/*.json'],
		ignores: ['package-lock.json', 'docs/**'],
		language: 'json/json',
		plugins: {
			json: json,
		},
		rules: {
			...(jsonFlag && {
				...jsonRules,
			}),
		},
	},
	{
		name: 'Markdown',
		files: ['**/*.md'],
		language: 'markdown/commonmark',
		plugins: {
			markdown,
		},
		rules: {
			...(markdownFlag && {
				...markdownRules,
			}),
		},
	},
	{
		name: 'Yaml',
		files: ['**/*.yml', '**/*.yaml'],
		languageOptions:{
			parser: parseYAML
		},
		plugins: {
			yml,
		},
		rules: {
			...(yamlFlag && {
				...yamlRules,
			}),
		},
	},
];
