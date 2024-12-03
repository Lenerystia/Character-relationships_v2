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
	perfectionist:{
		overrides: {
			'perfectionist/sort-exports': ['error', { order: 'asc', type: 'natural' }],
		}
	},
	typescript: {
		overrides: {
				"@typescript-eslint/adjacent-overload-signatures": "error",
				"@typescript-eslint/await-thenable": "error",
				"@typescript-eslint/ban-ts-comment": "error",
				"@typescript-eslint/ban-types": "error",
				"@typescript-eslint/class-literal-property-style": "error",
				"@typescript-eslint/consistent-indexed-object-style": "error",
				"@typescript-eslint/consistent-type-assertions": "error",
				"@typescript-eslint/consistent-type-definitions": "error",
				"@typescript-eslint/default-param-last": "error",
				"@typescript-eslint/dot-notation": "error",
				"@typescript-eslint/explicit-function-return-type": "error",
				"@typescript-eslint/explicit-member-accessibility": "error",
				"@typescript-eslint/explicit-module-boundary-types": "error",
				"@typescript-eslint/forbid-extern-property": "error",
				"@typescript-eslint/func-call-spacing": "error",
				"@typescript-eslint/getter-return": "error",
				"@typescript-eslint/indent": "error",
				"@typescript-eslint/interface-name-prefix": "error",
				"@typescript-eslint/keyword-spacing": "error",
				"@typescript-eslint/lines-between-class-members": "error",
				"@typescript-eslint/member-delimiter-style": "error",
				"@typescript-eslint/member-ordering": "error",
				"@typescript-eslint/method-signature-style": "error",
				"@typescript-eslint/no-base-to-string": "error",
				"@typescript-eslint/no-confusing-void-expression": "error",
				"@typescript-eslint/no-duplicate-enum-values": "error",
				"@typescript-eslint/no-duplicate-variable": "error",
				"@typescript-eslint/no-empty-function": "error",
				"@typescript-eslint/no-explicit-any": "error",
				"@typescript-eslint/no-extra-non-null-assertion": "error",
				"@typescript-eslint/no-extra-semi": "error",
				"@typescript-eslint/no-floating-promises": "error",
				"@typescript-eslint/no-for-in-array": "error",
				"@typescript-eslint/no-implicit-any-catch": "error",
				"@typescript-eslint/no-inferrable-types": "error",
				"@typescript-eslint/no-invalid-this": "error",
				"@typescript-eslint/no-invalid-void-type": "error",
				"@typescript-eslint/no-misused-new": "error",
				"@typescript-eslint/no-mixed-enums": "error",
				"@typescript-eslint/no-namespace": "error",
				"@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
				"@typescript-eslint/no-non-null-assertion": "error",
				"@typescript-eslint/no-parameter-properties": "error",
				"@typescript-eslint/no-redeclare": "error",
				"@typescript-eslint/no-redundant-type-constituents": "error",
				"@typescript-eslint/no-require-imports": "error",
				"@typescript-eslint/no-this-alias": "error",
				"@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
				"@typescript-eslint/no-unnecessary-condition": "error",
				"@typescript-eslint/no-unnecessary-qualifier": "error",
				"@typescript-eslint/no-unnecessary-type-arguments": "error",
				"@typescript-eslint/no-unnecessary-type-assertion": "error",
				"@typescript-eslint/no-unsafe-argument": "error",
				"@typescript-eslint/no-unsafe-assignment": "error",
				"@typescript-eslint/no-unsafe-call": "error",
				"@typescript-eslint/no-unsafe-member-access": "error",
				"@typescript-eslint/no-unsafe-return": "error",
				"@typescript-eslint/no-unused-expressions": "error",
				"@typescript-eslint/no-unused-vars": "error",
				"@typescript-eslint/no-use-before-define": "error",
				"@typescript-eslint/no-useless-constructor": "error",
				"@typescript-eslint/prefer-as-const": "error",
				"@typescript-eslint/prefer-enum-initializers": "error",
				"@typescript-eslint/prefer-for-of": "error",
				"@typescript-eslint/prefer-function-type": "error",
				"@typescript-eslint/prefer-includes": "error",
				"@typescript-eslint/prefer-literal-enum-member": "error",
				"@typescript-eslint/prefer-namespace-keyword": "error",
				"@typescript-eslint/prefer-nullish-coalescing": "error",
				"@typescript-eslint/prefer-optional-chain": "error",
				"@typescript-eslint/prefer-readonly": "error",
				"@typescript-eslint/prefer-regexp-exec": "error",
				"@typescript-eslint/prefer-string-starts-ends-with": "error",
				"@typescript-eslint/prefer-template": "error",
				"@typescript-eslint/promise-function-async": "error",
				"@typescript-eslint/quotes": "error",
				"@typescript-eslint/require-array-sort-compare": "error",
				"@typescript-eslint/require-await": "error",
				"@typescript-eslint/restrict-plus-operands": "error",
				"@typescript-eslint/return-await": "error",
				"@typescript-eslint/semi": "error",
				"@typescript-eslint/sort-type-union-intersection-types": "error",
				"@typescript-eslint/space-before-function-paren": "error",
				"@typescript-eslint/space-infix-ops": "error",
				"@typescript-eslint/strict-boolean-expressions": "error",
				"@typescript-eslint/switch-exhaustiveness-check": "error",
				"@typescript-eslint/triple-slash-reference": "error",
				"@typescript-eslint/type-annotation-spacing": "error",
				"@typescript-eslint/typedef": "error",
				"@typescript-eslint/unbound-method": "error",
				"@typescript-eslint/unified-signatures": "error",
				"@typescript-eslint/variable-name": "error",
				"@typescript-eslint/ban-tslint-comment": "error",
				"@typescript-eslint/deprecation": "error",
				"@typescript-eslint/class-methods-use-this": "error",
				"@typescript-eslint/consistent-generic-constructors": "error",
				"@typescript-eslint/consistent-return": "error",
				"@typescript-eslint/consistent-type-exports": "error",
				"@typescript-eslint/init-declarations": "error",
				"@typescript-eslint/max-params": "error",
				"@typescript-eslint/naming-convention": "error",
				"@typescript-eslint/no-array-delete": "error",
				"@typescript-eslint/no-confusing-non-null-assertion": "error",
				"@typescript-eslint/no-deprecated": "error",
				"@typescript-eslint/no-duplicate-type-constituents": "error",
				"@typescript-eslint/no-loop-func": "error",
				"@typescript-eslint/no-magic-numbers": "error",
				"@typescript-eslint/no-eval": "error",
				"@typescript-eslint/no-void": "error",
				"@typescript-eslint/no-misused-promises": "error",
				"@typescript-eslint/no-restricted-imports": "error",
				"@typescript-eslint/no-restricted-types": "error",
				"@typescript-eslint/no-shadow": "error",
				// "@typescript-eslint/no-implied-eval": "error", 
				"@typescript-eslint/no-meaningless-void-operator": "error",
				"@typescript-eslint/no-unnecessary-parameter-property-assignment": "error",
				"@typescript-eslint/no-unnecessary-template-expression": "error",
				"@typescript-eslint/no-unnecessary-type-parameters": "error",
				"@typescript-eslint/no-unsafe-enum-comparison": "error",
				"@typescript-eslint/no-unsafe-type-assertion": "error",
				"@typescript-eslint/no-unsafe-unary-minus": "error",
				"@typescript-eslint/no-useless-empty-export": "error",
				"@typescript-eslint/non-nullable-type-assertion-style": "error",
				"@typescript-eslint/only-throw-error": "error",
				"@typescript-eslint/parameter-properties": "error",
				"@typescript-eslint/prefer-destructuring": "error",
				"@typescript-eslint/prefer-find": "error",
				"@typescript-eslint/prefer-promise-reject-errors": "error",
				"@typescript-eslint/prefer-readonly-parameter-types": "error",
				"@typescript-eslint/prefer-reduce-type-parameter": "error",
				"@typescript-eslint/prefer-return-this-type": "error",

				"@typescript-eslint/restrict-template-expressions": "error",
				"@typescript-eslint/use-unknown-in-catch-callback-variable": "error",

				'@typescript-eslint/array-type': ['error', { default: 'array-simple', readonly: 'array' }],
				// "@typescript-eslint/related-getter-setter-pairs": "error",
		}
	},
	unicorn: {
		overrides: {
			'unicorn/better-regex': 'error'
		}
	},
	stylistic: {
		quotes: 'single' ,
			overrides: {
			'@indent': ['error', 'tab'],
		// 		'style/array-bracket-newline': ['error', 'consistent'],
		// 		'style/array-bracket-spacing': [
		// 			'error',
		// 			'never',
		// 			{
		// 				arraysInArrays: true,
		// 				objectsInArrays: true,
		// 				singleValue: true
		// 			},
		// 		],
		// 		'style/array-element-newline': ['error', 'consistent'],
		// 		'style/brace-style': ['error', '1tbs', { allowSingleLine: true }],
		// 		'style/comma-spacing': [
		// 			'error',
		// 			{
		// 				after: true,
		// 				before: false
		// 			}
		// 		],
		// 		'style/keyword-spacing': [
		// 			'error',
		// 			{
		// 				after: true,
		// 				before: false
		// 			}
		// 		],
		// 		'style/linebreak-style': ['error', 'unix'],
		// 		'style/multiline-comment-style': ['off'],
		// 		'style/no-multiple-empty-lines': [
		// 			'error',
		// 			{
		// 				max: 1,
		// 				maxEOF: 1
		// 			}
		// 		],
		// 		'style/no-tabs': 'error',
		// 		'style/no-trailing-spaces': [
		// 			'error',
		// 			{
		// 				ignoreComments: true,
		// 				skipBlankLines: false,
		// 			}
		// 		],
		// 		'style/object-curly-spacing': ['error', 'always'],
		// 		'style/padded-blocks': ['error', 'never', { allowSingleLineBlocks: true }],
		// 		'style/quote-props': ['error', 'consistent-as-needed'],
		// 		'style/quotes': ['error', 'single', { avoidEscape: true }],
		// 		'style/semi': ['error', 'always'],
			}
	},

	// `.eslintignore` is no longer supported in Flat config, use `ignores` instead
	ignores: [
		'**/fixtures'
		// ...globs
	]
});
