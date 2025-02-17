import type { ParamMatcher } from '@sveltejs/kit';
export const match: ParamMatcher = (parameter) => {
	return /^\d+$/u.test(parameter);
};
