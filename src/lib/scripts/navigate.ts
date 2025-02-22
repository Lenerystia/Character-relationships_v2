import { goto } from '$app/navigation';
import { base } from '$app/paths';

// The built-in 'MouseEvent' from the DOM library is not fully readonly.
// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
export async function navigateBetweenPages(eventClickButtonByUser: Readonly<MouseEvent>): Promise<void> {
	const {target} = eventClickButtonByUser;
	if (!(target instanceof HTMLButtonElement)) {
		return;
	}
	const pageName = target.name;
	await goto(`${base}/${pageName}`);
}
