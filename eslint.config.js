import svelteParser from 'svelte-eslint-parser';
import perfectionist from 'eslint-plugin-perfectionist';
import tsParser from '@typescript-eslint/parser';
import svelte from 'eslint-plugin-svelte';
import ts from '@typescript-eslint/eslint-plugin';
import unicorn from 'eslint-plugin-unicorn';
import stylistic from '@stylistic/eslint-plugin';
import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import vitest from '@vitest/eslint-plugin';
import tsdoc from 'eslint-plugin-tsdoc';
import esImport from 'eslint-plugin-import';
import functional from 'eslint-plugin-functional';
import security from 'eslint-plugin-security';
import sonarjs from 'eslint-plugin-sonarjs';
import alias from 'eslint-plugin-import-alias';
import html from '@html-eslint/eslint-plugin';
import htmlParser from '@html-eslint/parser';
import drizzle from 'eslint-plugin-drizzle';
import esEs from 'eslint-plugin-eslint-plugin';
import promise from 'eslint-plugin-promise';
import panda from '@pandacss/eslint-plugin';
import tailwind from 'eslint-plugin-tailwindcss';

// Toggles for enabling/disabling rule groups
const perfectionistSwitch = false;
const svelteSwitch = false;
const typescriptSwitch = false;
const unicornSwitch = false;
const stylisticSwitch = false;
const jsSwitch = false;
const vitestSwitch = false;
const tsdocSwitch = true;
const esImportSwitch = false;
const functionalSwitch = false;
const securitySwitch = false;
const sonarjsSwitch = false;
const aliasSwitch = false;
const htmlSwitch = false;
const esEsSwitch = false;
const promiseSwitch = false;
const drizzleSwitch = false;
const prettierSwitch = false;
const pandacssSwitch = false;
const tailwindSwitch = false;

export default [
	prettier,
	{
		files: ['**/*.{ts,tsx,js,jsx,cjs,mjs,svelte}'],
		ignores: [
			'node_modules',
			'build',
			'.svelte-kit/**',
			'src/tests/',
			'svelte.config.js',
			'vite.config.ts',
			'eslint.config.js',
			'drizzle.config.ts'
		],
		languageOptions: {
			parser: svelteParser,
			parserOptions: {
				parser: tsParser,
				project: './tsconfig.json',
				extraFileExtensions: ['.svelte'],
				tsconfigRootDir: import.meta.dirname
			}
		},
		plugins: {
			'@typescript-eslint': ts,
			'@stylistic': stylistic,
			'@pandacss': panda,
			tailwind: tailwind,
			tsdoc: tsdoc,
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
			alias: alias
		},
		settings: {
			'import/resolver': {
				typescript: {
					alwaysTryTypes: true
				}
			}
		},
		rules: {
			/* Svelte rules */
			...(svelteSwitch && {
				...svelte.configs.recommended.rules,
				...svelte.configs.prettier.rules,
				'svelte/no-at-html-tags': 'error',
				'svelte/valid-compile': 'error',
				'svelte/no-unused-class-name': 'warn',
				'svelte/no-target-blank': ['error', { enforceDynamicLinks: 'always' }],
			}),

			/* promise rules */
			...(promiseSwitch && {
			'promise/always-return': 'error',
			'promise/no-return-wrap': 'error',
			'promise/param-names': 'error',
			'promise/catch-or-return': 'error',
			'promise/no-native': 'error',
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
			...(drizzleSwitch && {
				'drizzle/enforce-delete-with-where': 'error',
				'drizzle/enforce-update-with-where': 'error',
			}),
			/* alias rules */
			...(aliasSwitch && {
			'alias/import-alias': [
				'error',
				{
					relativeDepth: 0,
					aliases: [
						{ alias: '@src', matcher: '^src' }, // src/modules/app/test -> @src/modules/app/test
						{ alias: '@test', matcher: '^test/unit' }, // test/unit/modules/app -> @test/modules/app
						{ alias: '@testRoot', matcher: '^(test)/e2e' } // test/e2e/modules/app -> @testRoot/e2e/modules/app
					]
				}
			],
			}),
			/* sonajs rules */
			...(sonarjsSwitch && {
			...sonarjs.configs.recommended.rules,
			'sonarjs/deprecation': 'off',
			'sonarjs/no-implicit-dependencies': 'error',
			}),
			/* security rules */
			...(securitySwitch && {
				// 'security/detect-object-injection': 'error',
				...security.configs.recommended.rules,
			}),

			/* import rules */
			...(esImportSwitch && {
			'import/no-unresolved': 'error',

			'import/named': 'error',
			'import/default': 'error',
			'import/no-mutable-exports': 'error',
			'import/no-named-as-default': 'warn',
			'import/no-anonymous-default-export': 'warn',
			'import/extensions': [
				'warn',
				'ignorePackages',
				{
					ts: 'never',
					tsx: 'never',
					js: 'never',
					jsx: 'never'
				}
			],
			'import/no-restricted-paths': [
				'error',
				{
					zones: [{ target: './src', from: './node_modules' }]
				}
			],
			'import/order': [
				'warn',
				{
					groups: [['builtin', 'external'], ['internal'], ['parent', 'sibling', 'index']],
					pathGroups: [
						{
							pattern: '@/**',
							group: 'internal',
							position: 'after'
						}
					],
					alphabetize: { order: 'asc', caseInsensitive: true },
					'newlines-between': 'always'
				}
			],

			'import/no-duplicates': 'warn',
			'import/no-absolute-path': 'error',
			'import/no-useless-path-segments': ['warn', { noUselessIndex: true }],
			'import/no-extraneous-dependencies': [
				'error',
				{
					devDependencies: ['**/*.test.ts', '**/scripts/**']
				}
			],
			}),
			/* functional rules */
			...(functionalSwitch && {
				...functional.configs.all.rules,
				'functional/prefer-immutable-types': 'off',
			}),

			/* Tsdoc */
			...(tsdocSwitch && {
			'tsdoc/syntax': 'warn',
			}),

			/* Prettier rules */
			...(prettierSwitch && {
				...prettier.rules,
			}),

			/* js rules */
			...(jsSwitch && {
			...js.configs.all.rules,
			// ...js.configs.recommended.rules,
		}),

			/* Perfectionist rules */
			...(perfectionistSwitch && {
			...perfectionist.configs['recommended-alphabetical'].rules,
			// 'perfectionist/sort-exports': ['error', { order: 'desc', type: 'natural' }],
			// 'perfectionist/sort-imports': ['error', { order: 'asc', type: 'natural' }],
			// 'perfectionist/sort-interfaces': ['error', { order: 'asc', type: 'natural' }],
			// 'perfectionist/sort-named-exports': ['error', { order: 'asc', type: 'natural' }],
			// 'perfectionist/sort-named-imports': ['error', { order: 'asc', type: 'natural' }],
		}),

			/* Unicorn rules */
			...(unicornSwitch && {
				...unicorn.configs.all.rules,
				// ...unicorn.configs.recommended.rules,
				'unicorn/better-regex': 'error',
				'unicorn/prefer-query-selector': 'error',
			}),

			...(stylisticSwitch && {
			...stylistic.configs['recommended-extends'].rules,
			'@stylistic/array-bracket-newline': ['error', 'consistent'],
			'@stylistic/array-bracket-spacing': [
				'error',
				'never'
				// {
				// 	arraysInArrays: true,
				// 	objectsInArrays: false,
				// 	singleValue: true,
				// },
			],
			'@stylistic/array-element-newline': ['error', 'consistent'],
			// 'stylistic/brace-stylistic': ['error', '1tbs', { allowSingleLine: true }],
			'@stylistic/comma-spacing': [
				'error',
				{
					after: true,
					before: false
				}
			],
			'@stylistic/indent': ['error', 'tab'],
			'@stylistic/keyword-spacing': [
				'error',
				{
					after: true,
					before: true
				}
			],
			// @stylistic/linebreak-stylistic: ['error', 'unix' | 'windows' | 'off']
			'@stylistic/multiline-comment-stylistic': 'off',
			'@stylistic/no-multiple-empty-lines': [
				'error',
				{
					max: 1,
					maxEOF: 1
				}
			],
			'@stylistic/no-tabs': 'off',
			'@stylistic/no-trailing-spaces': [
				'error',
				{
					ignoreComments: true,
					skipBlankLines: false
				}
			],
			'@stylistic/object-curly-spacing': ['error', 'always'],
			'@stylistic/padded-blocks': ['error', 'never', { allowSingleLineBlocks: true }],
			'@stylistic/quote-props': ['error', 'consistent-as-needed'],
			'@stylistic/quotes': ['error', 'single', { allowTemplateLiterals: true, avoidEscape: true }], // TODO
			'@stylistic/semi': ['error', 'always'],
		}),

			// TypeScript-specific rules
			...(typescriptSwitch && {
				/* TypeScript rules */
				// ...ts.configs.recommended.rules,
				...ts.configs.strict.rules,
				// ...ts.configs.recommendedTypeChecked.rules, //sorry, but in for this config - it doesn't work

				/* Not configurable */
				'@typescript-eslint/prefer-optional-chain': 'error', // TODO
				'@typescript-eslint/ban-tslint-comment': 'error',
				'@typescript-eslint/prefer-as-const': 'error',
				'default-param-last': 'off',
				'@typescript-eslint/default-param-last': 'error',
				'@typescript-eslint/await-thenable': 'off',
				'@typescript-eslint/adjacent-overload-signatures': 'error',
				'@typescript-eslint/no-extra-non-null-assertion': 'error',
				'@typescript-eslint/no-floating-promises': 'error',
				'@typescript-eslint/no-for-in-array': 'error',
				'@typescript-eslint/no-inferrable-types': 'error',
				'@typescript-eslint/no-invalid-this': 'error', // TODO
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
				'@typescript-eslint/no-unsafe-assignment': 'error',
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
				'no-array-constructor': 'off',
				'@typescript-eslint/no-array-constructor': 'error',
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
				'@typescript-eslint/prefer-regexp-exec': 'error',
				'no-implied-eval': 'off',
				'@typescript-eslint/no-implied-eval': 'error',

				/* Cofigurable */
				'@typescript-eslint/explicit-module-boundary-types': 'error',
				'@typescript-eslint/consistent-generic-constructors': ['error', 'constructor'],
				'@typescript-eslint/typedef': 'error',
				'@typescript-eslint/switch-exhaustiveness-check': 'error', // TODO
				'@typescript-eslint/promise-function-async': ['error', { allowAny: false }],
				'@typescript-eslint/prefer-string-starts-ends-with': [
					'error',
					{ allowSingleElementEquality: 'always' }
				],
				'@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
				'@typescript-eslint/consistent-type-assertions': [
					'error',
					{
						assertionStyle: 'as',
						objectLiteralTypeAssertions: 'allow-as-parameter'
					}
				],
				'@typescript-eslint/dot-notation': ['error', { allowKeywords: true, allowPattern: '' }],
				'@typescript-eslint/member-ordering': [
					'error',
					{
						default: [
							// Order of member types
							'public-static-field',
							'protected-static-field',
							'private-static-field',
							'public-instance-field',
							'protected-instance-field',
							'private-instance-field',
							'constructor',
							'public-instance-method',
							'protected-instance-method',
							'private-instance-method'
						]
					}
				],
				'@typescript-eslint/method-signature-style': ['error', 'method'],
				'@typescript-eslint/class-literal-property-style': ['error', 'fields'],
				'@typescript-eslint/array-type': ['error', { default: 'array-simple', readonly: 'array' }],
				'@typescript-eslint/ban-ts-comment': [
					'error',
					{ 'ts-expect-error': 'allow-with-description' }
				],
				'prefer-promise-reject-errors': 'off',
				'@typescript-eslint/prefer-promise-reject-errors': 'error',
				'no-throw-literal': 'off',
				'@typescript-eslint/only-throw-error': 'error',
				'@typescript-eslint/no-base-to-string': 'error',
				'@typescript-eslint/no-explicit-any': 'error',
				'no-unused-vars': 'off',
				'@typescript-eslint/no-unused-vars': [
					'error',
					{
						args: 'all',
						argsIgnorePattern: '^_',
						caughtErrors: 'all',
						caughtErrorsIgnorePattern: '^_',
						destructuredArrayIgnorePattern: '^_',
						varsIgnorePattern: '^_',
						ignoreRestSiblings: true
					}
				],
				'@typescript-eslint/no-require-imports': ['error', { allow: [], allowAsImport: true }],
				'no-unused-expressions': 'off',
				'@typescript-eslint/no-unused-expressions': [
					'error',
					{
						enforceForJSX: true,
						allowShortCircuit: true,
						allowTernary: true,
						allowTaggedTemplates: true
					}
				],
				'@typescript-eslint/naming-convention': [
					'error',
					{
						selector: 'default',
						format: ['camelCase'],
						leadingUnderscore: 'allow',
						trailingUnderscore: 'allow'
					},
					{
						selector: 'variable',
						format: ['camelCase', 'UPPER_CASE'],
						leadingUnderscore: 'allow',
						trailingUnderscore: 'allow'
					},
					{
						selector: 'property',
						format: ['camelCase', 'UPPER_CASE'],
						leadingUnderscore: 'allow',
						trailingUnderscore: 'allow'
					},
					{
						selector: 'enumMember',
						format: ['UPPER_CASE']
					},
					{
						selector: 'typeProperty',
						format: ['camelCase', 'UPPER_CASE'],
						leadingUnderscore: 'allow',
						trailingUnderscore: 'allow'
					}
				],
				'no-use-before-define': 'off',
				'@typescript-eslint/no-use-before-define': [
					'error',
					{
						classes: true,
						functions: true,
						variables: true,
						enums: true,
						typedefs: true,
						ignoreTypeReferences: true
					}
				],
				'no-redeclare': 'off',
				'@typescript-eslint/no-redeclare': [
					'error',
					{
						ignoreDeclarationMerge: true
					}
				],

				// TODO
				'@typescript-eslint/no-shadow': 'error',
				'@typescript-eslint/no-restricted-types': 'error',
				'@typescript-eslint/no-restricted-imports': 'error',
				'@typescript-eslint/no-misused-promises': 'error',
				'@typescript-eslint/no-confusing-void-expression': 'error',
				'@typescript-eslint/no-duplicate-type-constituents': 'error',
				'@typescript-eslint/no-empty-function': ['error', { allow: [] }],
				'@typescript-eslint/no-magic-numbers': 'error',

				'@typescript-eslint/prefer-literal-enum-member': ['error', { allowBitwiseExpressions: true }],
				'@typescript-eslint/prefer-nullish-coalescing': ['error', { ignoreConditionalTests: true }], // TODO
				'@typescript-eslint/prefer-readonly': 'error', // TODO
				'@typescript-eslint/prefer-readonly-parameter-types': 'error', // TODO
				'@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }], // TODO
				'class-methods-use-this': 'off',
				'@typescript-eslint/class-methods-use-this': 'error', // TODO
				'consistent-return': 'off',
				'@typescript-eslint/consistent-return': [
					'error',
					{
						treatUndefinedAsUnspecified: true
					}
				],
				'@typescript-eslint/consistent-type-exports': [
					'error',
					{ fixMixedExportsWithInlineTypeSpecifier: true }
				], // TODO
				'@typescript-eslint/consistent-type-imports': 'error', // TODO

				/* Disabled */
				'@typescript-eslint/related-getter-setter-pairs': 'off',
				'@typescript-eslint/restrict-template-expressions': 'off',
				'@typescript-eslint/prefer-destructuring': 'off',
				'@typescript-eslint/prefer-return-this-type': 'off',
				'@typescript-eslint/parameter-properties': 'off',
				'@typescript-eslint/require-array-sort-compare': 'off',

				/* I don't know */
				'@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
				'@typescript-eslint/prefer-includes': 'error',
				'@typescript-eslint/prefer-function-type': 'error',
				'@typescript-eslint/prefer-for-of': 'error',
				'@typescript-eslint/prefer-enum-initializers': 'error',
				'@typescript-eslint/no-import-type-side-effects': 'error',
				'@typescript-eslint/no-dupe-class-members': 'error',

				/* don't understand */
				'@typescript-eslint/require-await': 'error',
				'@typescript-eslint/explicit-function-return-type': 'error',
				'@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'explicit' }],

				/* Ogarnięte */
				'@typescript-eslint/unified-signatures': [
					'error',
					{ ignoreDifferentlyNamedParameters: false }
				],
				'@typescript-eslint/triple-slash-reference': [
					'error',
					{ lib: 'never', path: 'never', types: 'never' }
				],
				'@typescript-eslint/strict-boolean-expressions': [
					'error',
					{
						allowNullableBoolean: false,
						allowNullableObject: false
					}
				],
				'no-return-await': 'off',
				'@typescript-eslint/return-await': ['error', 'always'],
				'@typescript-eslint/restrict-plus-operands': [
					'error',
					{
						allowAny: false,
						allowBoolean: false,
						allowNullish: false,
						allowNumberAndString: false,
						allowRegExp: false
					}
				],
				'max-params': 'off',
				'@typescript-eslint/max-params': ['error', { max: 4 }],
				'init-declarations': 'off',
				'@typescript-eslint/init-declarations': ['error', 'never', { ignoreForLoopInit: true }],

				/* tailwind rules */
				...(tailwindSwitch && {
					'tailwind/classnames-order': 'error',
				}),

				/* pandacss rules */
				...(pandacssSwitch && {
					'@pandacss/file-not-included': 'error',
				}),
			}),
		},
	},
	{
		name: 'tests',
		plugins: {
			vitest: vitest
		},
		files: ['src/tests/**'],
		rules: {
			...(vitestSwitch && {
			...vitest.configs.recommended.rules,
			'dot-notation': 'off',
			'vitest/no-done-callback': 'off', //deprecated
			'vitest/consistent-test-filename': ['error', { pattern: '.*\\.(spec|test)\\.[jt]s$' }],
			'vitest/consistent-test-it': 'error',
			'vitest/expect-expect': ['error', { assertFunctionNames: ['expect'] }],
			'vitest/max-expects': ['error', { max: 5 }],
			'vitest/max-nested-describe': ['error', { max: 3 }],
			'vitest/no-alias-methods': 'error',
			'vitest/no-commented-out-tests': 'error',
			'vitest/no-conditional-expect': 'error',
			'vitest/no-conditional-tests': 'error',
			'vitest/no-disabled-tests': 'error',
			'vitest/no-duplicate-hooks': 'error',
			'vitest/no-focused-tests': 'error',
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
			'vitest/valid-title': 'error',
			'vitest/valid-expect-in-promise': 'error'
			}),
		},
	},
	{
		name: 'eslinting eslint',
		files: ['eslint.config.js'],
		plugins: {
			esEs
		},
		rules: {
			...(esEsSwitch && {
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
				'esEs/test-case-shorthand-strings': 'error'
			}),
		},
	},
	{
		name: 'HTML',
		files: ['**/*.html'],
		ignores: [
			'.svelte-kit/**',
			'**/fixtures',
			'node_modules',
			'build',
		],
		languageOptions: {
			parser: htmlParser
		},
		plugins: {
			'@html-eslint': html
		},
		rules: {
			...(htmlSwitch && {
			...html.configs.recommended.rules
			}),
		},
	},
];
