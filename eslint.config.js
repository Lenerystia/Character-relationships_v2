// eslint.config.js
import antfu from '@antfu/eslint-config';

export default antfu({
	jsonc: false,
	yaml: false,
	toml: false,
	vue: false,
	markdown: false,
	// Type of the project. 'lib' for libraries, the default is 'app'
	type: 'lib',
	rules: {
		'perfectionist/sort-exports': ['error', { order: 'desc', type: 'natural' }],
		'perfectionist/sort-imports': ['error', { order: 'asc', type: 'natural' }],
		'perfectionist/sort-interfaces': ['error', { order: 'asc', type: 'natural' }],
		'perfectionist/sort-named-exports': ['error', { order: 'asc', type: 'natural' }],
		'perfectionist/sort-named-imports': ['error', { order: 'asc', type: 'natural' }],
		// 'perfectionist/sort-objects': ['error', { order: 'asc', type: 'natural' }], // TODO: probably useless, but maybe should good config
		'style/array-bracket-newline': ['error', 'consistent'],
		'style/array-bracket-spacing': [
			'error',
			'never',
			// {
			// 	arraysInArrays: true,
			// 	objectsInArrays: false,
			// 	singleValue: true,
			// },
		],
		'style/array-element-newline': ['error', 'consistent'],
		'style/brace-style': ['error', '1tbs', { allowSingleLine: true }],
		'style/comma-spacing': [
			'error',
			{
				after: true,
				before: false,
			},
		],
		'style/indent': ['error', 'tab'],
		'style/keyword-spacing': [
			'error',
			{
				after: true,
				before: false,
			},
		],
		'style/linebreak-style': ['error', 'unix'],
		'style/multiline-comment-style': 'off',
		'style/no-multiple-empty-lines': [
			'error',
			{
				max: 1,
				maxEOF: 1,
			},
		],
		'style/no-tabs': 'off',
		'style/no-trailing-spaces': [
			'error',
			{
				ignoreComments: true,
				skipBlankLines: false,
			},
		],
		'style/object-curly-spacing': ['error', 'always'],
		'style/padded-blocks': ['error', 'never', { allowSingleLineBlocks: true }],
		'style/quote-props': ['error', 'consistent-as-needed'],
		'style/quotes': ['error', 'single', { allowTemplateLiterals: true, avoidEscape: true }], // TODO sprawdzić
		'style/semi': ['error', 'always'],
		'unicorn/better-regex': 'error',
	},
	typescript: {
		overrides:{
		// TODO przelecieć po wszystkich rulach codeiumem

			/* Not configurable */
			'@typescript-eslint/ban-tslint-comment': 'error',
			'@typescript-eslint/prefer-as-const': 'error',
			'default-param-last': 'off',
			'@typescript-eslint/default-param-last': 'error',
			'@typescript-eslint/await-thenable': 'error',
			'@typescript-eslint/adjacent-overload-signatures': 'error',
			'@typescript-eslint/no-extra-non-null-assertion': 'error',
			'@typescript-eslint/no-floating-promises': 'error',
			'@typescript-eslint/no-for-in-array': 'error',
			'@typescript-eslint/no-implicit-any-catch': 'error',
			'@typescript-eslint/no-inferrable-types': 'error',
			'@typescript-eslint/no-invalid-this': 'error',
			'@typescript-eslint/no-invalid-void-type': 'error',
			'@typescript-eslint/no-misused-new': 'error',
			'@typescript-eslint/no-mixed-enums': 'error',
			'@typescript-eslint/no-namespace': 'error',
			'@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
			'@typescript-eslint/no-non-null-assertion': 'error',
			'@typescript-eslint/no-parameter-properties': 'error',
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
			// może git ta zasada, może nie
			'no-implied-eval': 'off',
			'@typescript-eslint/no-implied-eval': 'error',

			/* Cofigurable */
			'@typescript-eslint/consistent-generic-constructors': ['error', 'constructor '],
			'@typescript-eslint/typedef': 'error',
			'@typescript-eslint/switch-exhaustiveness-check': 'error', // TODO do ogarnięcia
			'@typescript-eslint/promise-function-async': ['error', { allowAny: false }],
			'@typescript-eslint/prefer-string-starts-ends-with': ['error', { allowSingleElementEquality: 'always' }],
			'@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
			'@typescript-eslint/consistent-type-assertions': ['error', { assertionStyle: 'as', objectLiteralTypeAssertions: 'allow-as-parameter' }],
			'@typescript-eslint/dot-notation': ['error', { allowKeywords: true, allowPattern: '' }],
			'@typescript-eslint/member-ordering': [
				'error',
				{
					default: {
						memberTypes: ['signature', 'method', 'property', 'constructor'],
						grouplessMemberTypes: [],
					},
				},
			], // ?
			'@typescript-eslint/method-signature-style': ['error', 'method'],
			'@typescript-eslint/class-literal-property-style': ['error', 'fields'], // ? Dopytać która metodyka jest praktyczniejsza, albo od czego zależy co będzie lepsze
			'@typescript-eslint/array-type': ['error', { default: 'array-simple', readonly: 'array' }],
			'ts/ban-ts-comment': ['error', { 'ts-expect-error': 'allow-with-description' }],
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
					ignoreRestSiblings: true,
				},
			],
			'@typescript-eslint/no-require-imports': ['error', { allow: [], allowAsImport: true }],
			'no-unused-expressions': 'off',
			'@typescript-eslint/no-unused-expressions': [
				'error',
				{
					enforceForJSX: true,
					allowShortCircuit: true,
					allowTernary: true,
					allowTaggedTemplates: true,
				},
			],
			'@typescript-eslint/naming-convention': [
				'error',
				{
					selector: 'default',
					format: ['camelCase'],
					leadingUnderscore: 'allow',
					trailingUnderscore: 'allow',
				},
				{
					selector: 'variable',
					format: ['camelCase', 'UPPER_CASE'],
					leadingUnderscore: 'allow',
					trailingUnderscore: 'allow',
				},
				{
					selector: 'property',
					format: ['camelCase', 'UPPER_CASE'],
					leadingUnderscore: 'allow',
					trailingUnderscore: 'allow',
				},
				{
					selector: 'enumMember',
					format: ['UPPER_CASE'],
				},
				{
					selector: 'typeProperty',
					format: ['camelCase', 'UPPER_CASE'],
					leadingUnderscore: 'allow',
					trailingUnderscore: 'allow',
				},
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
					ignoreTypeReferences: true,
				},
			],
			'no-redeclare': 'off',
			'@typescript-eslint/no-redeclare': [
				'error',
				{
					ignoreDeclarationMerge: true,
				},
			],

			/* TODO Configure or don't understand but maybe it will be good */
			'@typescript-eslint/no-shadow': 'error',
			'@typescript-eslint/no-restricted-types': 'error',
			'@typescript-eslint/no-restricted-imports': 'error',
			'@typescript-eslint/no-misused-promises': 'error',
			'@typescript-eslint/no-confusing-void-expression': 'error',
			'@typescript-eslint/no-duplicate-type-constituents': 'error',
			'@typescript-eslint/no-empty-function': 'error',
			'@typescript-eslint/no-magic-numbers': 'error',

			'@typescript-eslint/prefer-literal-enum-member': ['error', { allowBitwiseExpressions: true }],
			'@typescript-eslint/prefer-nullish-coalescing': ['error', { ignoreConditionalTests: true }], // TODO
			'@typescript-eslint/prefer-optional-chain': ['error', { allowInChains: true }], // TODO
			'@typescript-eslint/prefer-readonly': 'error', // TODO
			'@typescript-eslint/prefer-readonly-parameter-types': 'error', // TODO
			'@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }], // TODO
			'class-methods-use-this': 'off',
			'@typescript-eslint/class-methods-use-this': 'error', // TODO
			'consistent-return': 'off',
			'@typescript-eslint/consistent-return': 'error', // TODO - sprawdzić, bo jest jakieś zalecenie by używać coś innego
			'@typescript-eslint/consistent-type-exports': ['error', { fixMixedExportsWithInlineTypeSpecifier: true }], // TODO - sprawdzić

			/* Disabled */
			'@typescript-eslint/related-getter-setter-pairs': 'off',

			/* Now useless */
			'@typescript-eslint/restrict-template-expressions': 'ignored',
			'@typescript-eslint/prefer-destructuring': 'ignored',
			'@typescript-eslint/prefer-return-this-type': 'ignored',
			'@typescript-eslint/parameter-properties': 'ignored',
			'@typescript-eslint/require-array-sort-compare': 'ignored',

			/* Jeszcze nie wiem co lubię */
			// '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

			/* don't understand */
			// '@typescript-eslint/require-await': ['error', { checkAsyncFunctions: true }],
			// '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true, allowConciseArrowFunctionExpressionsReturningAny: true }],
			// '@typescript-eslint/prefer-readonly-parameter-types': 'error',
			// 			'@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'explicit' }],
			// '@typescript-eslint/explicit-module-boundary-types': ['error', {
			// 	allowArgumentsExplicitlyTypedAsAny: false,
			// 	allowDirectConstAssertionInArrowFunctions: true,
			// 	allowedNames: [],
			// 	allowHigherOrderFunctions: true,
			// 	allowTypedFunctionExpressions: true,}],
			// '@typescript-eslint/forbid-extern-property': ['error', { allows: ['readonly', 'private', 'protected'] }],

			/* Ogarnięte tip top */
			'@typescript-eslint/unified-signatures': ['error', { ignoreDifferentlyNamedParameters: false }],
			'@typescript-eslint/triple-slash-reference': ['error', { lib: 'never', path: 'never', types: 'never' }],
			'@typescript-eslint/strict-boolean-expressions': ['error', { allowNullableBoolean: false, allowNullableObject: false }],
			'no-return-await': 'off',
			'@typescript-eslint/return-await': ['error', 'always'],
			'@typescript-eslint/restrict-plus-operands': ['error', { allowAny: false, allowBoolean: false, allowNullish: false, allowNumberAndString: false, allowRegExp: false }],
			'max-params': 'off',
			'@typescript-eslint/max-params': ['error', { max: 4 }],
			'init-declarations': 'off',
			'@typescript-eslint/init-declarations': ['error', 'never', { ignoreForLoopInit: true }],
		},
	},

	// `.eslintignore` is no longer supported in Flat config, use `ignores` instead
	ignores: [
		'**/fixtures',
		// ...globs
	],
});
