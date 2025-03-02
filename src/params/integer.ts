import type { ParamMatcher } from '@sveltejs/kit';

export const match: ParamMatcher = parameter => /^\d+$/u.test(parameter);
