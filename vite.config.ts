import { svelteTesting } from '@testing-library/svelte/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			'@src': path.resolve(__dirname, 'src'),
			'@routes': path.resolve(__dirname, 'src/routes'),
			'@test': path.resolve(__dirname, 'test/unit'),
			'@testRoot': path.resolve(__dirname, 'test/e2e'),
		},
	},
	test: {
		workspace: [
			{
				extends: './vite.config.ts',
				plugins: [svelteTesting()],
				test: {
					name: 'client',
					environment: 'jsdom',
					clearMocks: true,
					//TODO - move some there
					//		exclude: [...configDefaults.exclude, 'packages/template/*'],
					// 		include: ['./tests/unit/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
					include: ['src/**/*.svelte.{test,spec}.{js,ts}'],
					exclude: ['src/lib/server/**'],
					setupFiles: ['./vitest-setup-client.ts']
				}
			},
			{
				extends: './vite.config.ts',
				test: {
					name: 'server',
					environment: 'node',
					include: ['src/**/*.{test,spec}.{js,ts}'],
					exclude: ['src/**/*.svelte.{test,spec}.{js,ts}']
				}
			}
		]
	}
});
