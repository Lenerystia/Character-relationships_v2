import cspell from '@cspell/eslint-plugin';
import js from '@eslint/js';
import json from '@eslint/json';
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
import security from 'eslint-plugin-security';
import sonarjs from 'eslint-plugin-sonarjs';
import svelte from 'eslint-plugin-svelte';
import tailwind from 'eslint-plugin-tailwindcss';
import tsDoc from 'eslint-plugin-tsdoc';
import unicorn from 'eslint-plugin-unicorn';
import svelteParser from 'svelte-eslint-parser';

// Toggles for enabling/disabling rule groups
const aliasFlag = true; // TODO check
const cspellFlag = true; // Checked
const drizzleFlag = true; // Checked
const esEsFlag = true; // TODO check
const esImportFlag = true; // TODO check
// Recommend when you only use functional programming, or you have separate space for functional code in project
const functionalFlag = false;
const htmlFlag = true; // Checked
const jsFlag = true;
const jsonFlag = true; // Checked
const nodeFlag = true; // Checked?
const pandacssFlag = false;
const perfectionistFlag = true; // TODO check
const prettierFlag = true; // TODO check
const promiseFlag = true; // Checked
const securityFlag = true; // Checked
const sonarjsFlag = true; // TODO check
const stylisticFlag = true; // TODO check
const svelteFlag = true; // TODO check
const tailwindFlag = false;
const tsDocFlag = true; // Checked
const typescriptFlag = true; // TODO check
const unicornFlag = true; // TODO check
const vitestFlag = true; // TODO check
//TODO search regex eslint plugin
//TODO: Have js sense when I use typescript?

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
				'cspell/spellchecker': 'warn',
			}),
			...(nodeFlag && {
				'node/callback-return': 'error',
				'node/exports-style': ['error', 'exports'],
				'node/file-extension-in-import': 'off',
				'node/global-require': 'error',
				'node/handle-callback-err': 'error',
				'node/hashbang': 'error',
				'node/no-callback-literal': 'error',
				'node/no-deprecated-api': 'error',
				'node/no-exports-assign': 'error',
				'node/no-extraneous-import': 'error',
				'node/no-extraneous-require': 'error',
				'node/no-hide-core-modules': 'off',
				'node/no-missing-import': 'off', // TODO
				'node/no-missing-require': 'error',
				'node/no-mixed-requires': 'error',
				'node/no-new-require': 'error',
				'node/no-path-concat': 'error',
				'node/no-process-env': 'off',
				'node/no-process-exit': 'off',
				'node/no-restricted-import': 'off',
				'node/no-restricted-require': 'off',
				'node/no-sync': 'warn',
				'node/no-unpublished-bin': 'error',
				'node/no-unpublished-import': 'error',
				'node/no-unpublished-require': 'error',
				'node/no-unsupported-features/es-builtins': 'error',
				'node/no-unsupported-features/es-syntax': 'error',
				'node/no-unsupported-features/node-builtins': 'off', // TODO
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
			}),
			/* Svelte rules */
			...(svelteFlag && {
				...svelte.configs.recommended.rules,
				...svelte.configs.prettier.rules,
				// 'svelte/no-navigation-without-base': 'error', // TODO

				// Possible Errors
				'svelte/infinite-reactive-loop': 'error',
				// "svelte/no-deprecated-raw-special-elements": "error", // TODO
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
				'svelte/html-closing-bracket-new-line': 'off',
				'svelte/html-closing-bracket-spacing': 'error',
				'svelte/html-quotes': 'error',
				'svelte/html-self-closing': 'error',
				'svelte/indent': 'off',
				'svelte/no-trailing-spaces': 'off',
				'svelte/max-attributes-per-line': 'off',
				'svelte/mustache-spacing': 'error',
				'svelte/no-extra-reactive-curlies': 'error',
				// "svelte/no-restricted-html-elements": "error",
				'svelte/no-spaces-around-equal-signs-in-attribute': 'error',
				'svelte/prefer-class-directive': 'error',
				'svelte/prefer-style-directive': 'error',
				'svelte/shorthand-attribute': 'error',
				'svelte/shorthand-directive': 'error',
				'svelte/sort-attributes': 'error',
				'svelte/spaced-html-comment': 'off',

				// Best Practices
				// "svelte/no-useless-children-snippet": "error", // TODO
				'svelte/no-useless-mustaches': 'error',
				// "svelte/prefer-const": "error",
				'svelte/prefer-destructured-store-props': 'off', // TODO
				'svelte/require-each-key': 'error',
				'svelte/require-event-dispatcher-types': 'error',
				'svelte/require-optimized-style-attribute': 'error',
				'svelte/require-stores-init': 'error',
				'svelte/valid-each-key': 'error',
				'svelte/no-ignored-unsubscribe': 'error',
				'svelte/no-immutable-reactive-statements': 'error',
				'svelte/no-inline-styles': 'off',
				'svelte/no-inspect': 'error',
				'svelte/no-reactive-functions': 'error',
				'svelte/no-reactive-literals': 'error',
				'svelte/no-svelte-internal': 'error',
				'svelte/no-unused-class-name': 'error',
				'svelte/block-lang': ['error', { script: ['ts'], style: 'scss' }],
				'svelte/button-has-type': 'error',
			}),

			/* promise rules */
			...(promiseFlag && {
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
			}),

			/* drizzle rules */
			...(drizzleFlag && {
				'drizzle/enforce-delete-with-where': 'error',
				'drizzle/enforce-update-with-where': 'error',
			}),
			/* alias rules */
			...(aliasFlag && {
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
			}),
			/* sonarjs rules */
			...(sonarjsFlag && {
				...sonarjs.configs.recommended.rules,
				'sonarjs/no-empty-test-file': 'off', // TEMP
				'sonarjs/deprecation': 'off', // Rule doesn't work correctly
				'sonarjs/no-implicit-dependencies': 'off',
				'sonarjs/no-return-type-any': 'error',
				'sonarjs/todo-tag': 'off', // TEMP
				'sonarjs/no-commented-code': 'off', // TEMP

			}),
			/* security rules */
			...(securityFlag && {
				// 'security/detect-object-injection': 'error',
				...security.configs.recommended.rules,
				'security/detect-unsafe-regex': 'error',
				'security/detect-non-literal-regexp': 'error',
				'security/detect-non-literal-require': 'error',
				'security/detect-non-literal-fs-filename': 'error',
			}),

			/* import rules */
			...(esImportFlag && {
				'import/no-unresolved': 'off',
				'import/named': 'error',
				'import/default': 'error',
				'import/no-mutable-exports': 'off', // TODO
				'import/no-named-as-default': 'warn',
				'import/no-anonymous-default-export': 'warn',
				'import/extensions': 'off',
				// [
				// 	'warn',
				// 	'ignorePackages',
				// 	{
				// 		ts: 'never',
				// 		tsx: 'never',
				// 		js: 'never',
				// 		jsx: 'never',
				// 		svelte: 'always'
				// 	},
				// ],
				'import/no-restricted-paths': 'off',
				'import/order': 'off',
				// 	[
				// 	'warn',
				// 	{
				// 		groups: [['builtin', 'external'], ['internal'], ['parent', 'sibling', 'index']],
				// 		pathGroups: [
				// 			{
				// 				pattern: '@/**',
				// 				group: 'internal',
				// 				position: 'after',
				// 			},
				// 		],
				// 		alphabetize: { order: 'asc', caseInsensitive: true },
				// 		'newlines-between': 'always',
				// 	},
				// ],
				'import/no-duplicates': 'warn',
				'import/no-absolute-path': 'error',
				'import/no-useless-path-segments': ['warn', { noUselessIndex: true }],
				'import/no-extraneous-dependencies': 'off',
				// 	[
				// 	'error',
				// 	{
				// 		devDependencies: ['**/*.test.ts', '**/scripts/**'],
				// 	},
				// ],
			}),
			/* functional rules */
			...(functionalFlag && {
				// ...functional.configs.recommended.rules,
				...functional.configs.all.rules,
				// 'functional/no-throw-statements': 'off',
				// 'functional/no-classes': 'off',
				// 'functional/no-return-void': 'off',
				// 'functional/prefer-immutable-types': 'off',
				// 'functional/functional-parameters': 'off',
				// 'functional/no-conditional-statements': 'off', // TODO - Can I precise what tenant and what is a conditional statement?
				// 'functional/no-let': 'off',
				// 'functional/no-expression-statements': 'off',
			}),

			/* Tsdoc */
			...(tsDocFlag && {
				'tsDoc/syntax': 'warn',
			}),

			/* Prettier rules */
			...(prettierFlag && {
				...prettier.rules,
			}),

			/* js rules */
			...(jsFlag && {
				...js.configs.all.rules,
				// ...js.configs.recommended.rules,
				'func-style': 'off',
				'no-ternary': 'off',
				'no-eq-null': 'off',
				'eqeqeq': 'off',
				'no-console': 'off', // TEMP
				'no-alert': 'off',
				'no-undef': 'off',
				'sort-keys': 'off',
				'no-inline-comments': 'off',
				'no-duplicate-imports': 'off',
				'max-statements': 'off',
				'capitalized-comments': 'off', // what when I have commented code?
				'no-warning-comments': 'off', // off, because sonarjs have
				'no-undefined': 'off',
				'require-unicode-regexp': 'off',
				'sort-imports': 'off', // Disabled due to a conflict with a rule from eslint-plugin-import
				'array-callback-return': 'off',
				// 	[
				// 	'error',
				// 	{
				// 		checkForEach: true,
				// 	},
				// ],
				'constructor-super': 'error',
				'for-direction': 'error',
				'getter-return': 'error',
				'no-async-promise-executor': 'error',
				'no-class-assign': 'error',
				'no-compare-neg-zero': 'error',
				'no-cond-assign': ['error', 'always'],
				'no-const-assign': 'error',
				'no-constant-binary-expression': 'warn',
				'no-constant-condition': 'error',
				'no-constructor-return': 'error',
				'no-control-regex': 'error',
				'no-debugger': 'warn',
				'no-dupe-args': 'error',
				'no-dupe-class-members': 'error',
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
				'no-self-assign': 'warn',
				'no-self-compare': 'warn',
				'no-setter-return': 'error',
				'no-sparse-arrays': 'error',
				'no-template-curly-in-string': 'error',
				'no-this-before-super': 'error',
				'no-unexpected-multiline': 'error',
				'no-unmodified-loop-condition': 'error',
				'no-unreachable': 'warn',
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
				'no-unused-private-class-members': 'warn',
				'no-unused-vars': [
					'warn',
					{
						varsIgnorePattern: '^_',
						argsIgnorePattern: '^_',
						reportUsedIgnorePattern: true,
					},
				],
				'no-use-before-define': [
					'warn',
					{
						functions: false,
						classes: false,
						variables: true,
						allowNamedExports: false,
					},
				],
				'no-useless-backreference': 'error',
				'use-isnan': 'error',
				'valid-typeof': 'error',
				// Suggestions - https://eslint.org/docs/latest/rules/#suggestions
				'consistent-return': 'error',
				curly: 'warn',
				'default-param-last': 'error',
				'func-names': ['warn', 'never'],
				'no-array-constructor': 'error',
				'no-bitwise': 'error',
				'no-case-declarations': 'error',
				'no-delete-var': 'error',
				'no-else-return': 'warn',
				'no-empty': 'warn',
				'no-empty-function': 'warn',
				'no-empty-static-block': 'warn',
				'no-eval': 'error',
				'no-extend-native': 'error',
				'no-extra-bind': 'error',
				'no-extra-boolean-cast': [
					'warn',
					{
						enforceForLogicalOperands: true,
					},
				],
				'no-global-assign': 'error',
				'no-implicit-coercion': 'error',
				'no-implicit-globals': 'error',
				'no-implied-eval': 'error',
				'no-invalid-this': [
					'error',
					{
						capIsConstructor: false,
					},
				],
				'no-labels': 'error',
				'no-lone-blocks': 'error',
				'no-multi-assign': 'warn',
				'no-new': 'error',
				'no-new-func': 'error',
				'no-new-wrappers': 'error',
				'no-nonoctal-decimal-escape': 'error',
				'no-object-constructor': 'error',
				'no-octal': 'error',
				'no-octal-escape': 'error',
				'no-proto': 'error',
				'no-redeclare': 'error',
				'no-regex-spaces': 'warn',
				// "no-restricted-imports": ["warn", baseRestrictedImports],
				'no-restricted-syntax': 'off',
				'no-return-assign': ['warn', 'always'],
				'no-script-url': 'error',
				'no-sequences': [
					'warn',
					{
						allowInParentheses: false,
					},
				],
				'no-shadow': [
					'error',
					{
						ignoreOnInitialization: true,
					},
				],
				'no-shadow-restricted-names': 'error',
				'no-throw-literal': 'error',
				'no-unused-expressions': [
					'warn',
					{
						enforceForJSX: true,
					},
				],
				'no-useless-call': 'error',
				'no-useless-catch': 'warn',
				'no-useless-computed-key': [
					'warn',
					{
						enforceForClassMembers: true,
					},
				],
				'no-useless-concat': 'error',
				'no-useless-escape': 'warn',
				'no-useless-rename': 'warn',
				'no-useless-return': 'warn',
				'no-var': 'error',
				'no-with': 'error',
				'one-var': ['warn', 'never'],
				'operator-assignment': 'warn',
				'prefer-arrow-callback': 'warn',
				'prefer-const': 'warn',
				'prefer-numeric-literals': 'warn',
				'prefer-object-spread': 'warn',
				'prefer-promise-reject-errors': 'error',
				'prefer-rest-params': 'warn',
				'prefer-spread': 'warn',
				'prefer-template': 'warn',
				radix: 'off',
				'require-await': 'error',
				'require-yield': 'error',
			}),

			/* Perfectionist rules */
			...(perfectionistFlag && {
				...perfectionist.configs['recommended-natural'].rules,
				'perfectionist/sort-interfaces': 'off',
				'perfectionist/sort-objects': 'off',
				'perfectionist/sort-classes': 'off',
				'perfectionist/sort-object-types': 'off',
			}),

			/* Unicorn rules */
			...(unicornFlag && {
				...unicorn.configs.all.rules,
				// ...unicorn.configs.recommended.rules,
				'unicorn/better-regex': 'error',
				'unicorn/prefer-query-selector': 'error',
				'unicorn/filename-case': 'off', // TODO
				'unicorn/no-array-for-each': 'off', // TODO
				'unicorn/prevent-abbreviations': 'off', // TODO - TEMP
				'unicorn/no-null': 'off', // TODO - TEMP
				'unicorn/no-empty-file': 'off', // TODO - TEMP
			}),

			...(stylisticFlag && {
				...stylistic.configs['recommended-extends'].rules,
				'@stylistic/member-delimiter-style': 'error',
				'@stylistic/array-bracket-newline': ['error', 'consistent'],
				'@stylistic/array-bracket-spacing': [
					'error',
					'never',
					// {
					// 	arraysInArrays: true,
					// 	objectsInArrays: false,
					// 	singleValue: true,
					// },
				],
				'@stylistic/array-element-newline': ['error', 'consistent'],
				'@stylistic/brace-style': 'off', // TODO
				// 'stylistic/brace-stylistic': ['error', '1tbs', { allowSingleLine: true }],
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
				// @stylistic/linebreak-stylistic: ['error', 'unix' | 'windows' | 'off']
				'@stylistic/multiline-comment-stylistic': 'off',
				'@stylistic/no-multiple-empty-lines': [
					'error',
					{
						max: 1,
						maxEOF: 1,
					},
				],
				'@stylistic/no-tabs': 'off',
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
				'@stylistic/quotes': [
					'error',
					'single',
					{ allowTemplateLiterals: true, avoidEscape: true },
				],
				'@stylistic/semi': ['error', 'always'],
			}),

			// TypeScript-specific rules
			...(typescriptFlag && {
				/* TypeScript rules */
				// ...ts.configs.recommended.rules,
				...ts.configs.strict.rules,
				// ...ts.configs.recommendedTypeChecked.rules, //sorry, but in for this config - it doesn't work

				/* Not configurable */
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
				'@typescript-eslint/no-unsafe-assignment': 'off', // TEMP
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
				'@typescript-eslint/prefer-for-of': 'error', // To test
				'@typescript-eslint/prefer-enum-initializers': 'error',
				'@typescript-eslint/no-import-type-side-effects': 'error',
				'no-implied-eval': 'off',
				'@typescript-eslint/no-implied-eval': 'error',
				'no-array-constructor': 'off',
				'@typescript-eslint/no-array-constructor': 'off',
				'@typescript-eslint/no-inferrable-types': 'off',
				'@typescript-eslint/prefer-as-const': 'off',
				'@typescript-eslint/related-getter-setter-pairs': 'off',
				'@typescript-eslint/prefer-return-this-type': 'off',

				/* Configurable */
				'@typescript-eslint/explicit-module-boundary-types': 'off',
				'@typescript-eslint/consistent-generic-constructors': ['error', 'constructor'],
				'@typescript-eslint/typedef': 'off', // To test
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
				'@typescript-eslint/dot-notation': ['error', { allowKeywords: true, allowPattern: '' }], // To test
				'@typescript-eslint/method-signature-style': ['error', 'method'],
				'@typescript-eslint/class-literal-property-style': ['error', 'fields'],
				'@typescript-eslint/array-type': ['error', { default: 'array-simple', readonly: 'array' }],
				'@typescript-eslint/ban-ts-comment': [
					'error',
					{ 'ts-expect-error': 'allow-with-description' },
				],
				'prefer-promise-reject-errors': 'off',
				'@typescript-eslint/prefer-promise-reject-errors': 'error',
				'no-throw-literal': 'off',
				'@typescript-eslint/only-throw-error': 'off',
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
				'@typescript-eslint/explicit-member-accessibility': [
					'error',
					{ accessibility: 'explicit' },
				],
				'require-await': 'off',
				'@typescript-eslint/require-await': 'error',
				'@typescript-eslint/explicit-function-return-type': 'off', // TODO
				'@typescript-eslint/unified-signatures': [
					'error',
					{ ignoreDifferentlyNamedParameters: false },
				],
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
				'init-declarations': 'off',
				'@typescript-eslint/init-declarations': 'off', // TODO

				'@typescript-eslint/member-ordering': 'off',
				'@typescript-eslint/naming-convention': 'off',
				'@typescript-eslint/no-restricted-types': 'off',
				'no-restricted-imports': 'off',
				'@typescript-eslint/no-restricted-imports': 'off',
				'@typescript-eslint/prefer-readonly': 'off',
				'@typescript-eslint/no-redeclare': 'off',
				'@typescript-eslint/restrict-template-expressions': 'off',
				'prefer-destructuring': 'off',
				'@typescript-eslint/prefer-destructuring': 'off',
				'@typescript-eslint/parameter-properties': 'off',
				'@typescript-eslint/require-array-sort-compare': 'off',
				'consistent-return': 'off',
				'@typescript-eslint/consistent-return': 'off',
				'no-dupe-class-members': 'off',
				'@typescript-eslint/no-dupe-class-members': 'off',
				/* TS done in theory - to check in practice */

				'@typescript-eslint/no-extraneous-class': ['error', { allowStaticOnly: true }],

				/* tailwind rules */
				...(tailwindFlag && {
					'tailwind/classnames-order': 'error',
				}),

				/* pandacss rules */
				...(pandacssFlag && {
					'@pandacss/file-not-included': 'error',
				}),
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
				...vitest.configs.recommended.rules,
				'vitest/no-done-callback': 'off', //deprecated
				'vitest/consistent-test-filename': ['error', { pattern: '.*\\.(spec|test)\\.[jt]s$' }],
				'vitest/consistent-test-it': 'error',
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
				'vitest/max-expects': ['error', { max: 5 }],
				'vitest/max-nested-describe': ['error', { max: 3 }],
				'vitest/no-alias-methods': 'error',
				'vitest/no-commented-out-tests': 'off',
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
				'vitest/no-identical-title': 'error',
				'vitest/no-import-node-test': 'error',
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
				'vitest/require-local-test-context-for-concurrent-snapshots': 'error',
				'vitest/require-to-throw-message': 'error',
				'vitest/require-top-level-describe': 'error',
				'vitest/valid-describe-callback': 'error',
				'vitest/valid-expect': ['error', { maxArgs: 1 }],
				'vitest/valid-title': [
					'error',
					{
						ignoreTypeOfDescribeName: true,
					},
				],
				'vitest/valid-expect-in-promise': 'error',
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
			}),
		},
	},
	{
		name: 'HTML',
		files: ['**/*.html'],
		ignores: ['.svelte-kit/**', '**/fixtures', 'node_modules', 'build'],
		languageOptions: {
			parser: htmlParser,
		},
		plugins: {
			'@html-eslint': html,
		},
		rules: {
			...(htmlFlag && {
				...html.configs.recommended.rules,
				'@html-eslint/indent': ['error', 'tab'],
				'@html-eslint/no-extra-spacing-attrs': 'off',
				'@html-eslint/require-closing-tags': ['error', { selfClosing: 'always' }],
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
			}),
		},
	},
	{
		name: 'JSON',
		files: ['**/*.json'],
		ignores: ['package-lock.json'],
		language: 'json/json',
		plugins: {
			json: json,
		},
		rules: {
			...(jsonFlag && {
				...json.configs.recommended.rules,
			}),
		},
	},
];
