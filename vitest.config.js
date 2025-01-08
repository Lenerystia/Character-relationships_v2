import { configDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
	test: {
		exclude: [...configDefaults.exclude, 'packages/template/*'],
		include: ['./tests/unit/**/*.{test,spec}.?(c|m)[jt]s?(x)']
	},
})