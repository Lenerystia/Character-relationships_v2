import { goto } from "$app/navigation";

// The built-in 'MouseEvent' from the DOM library is not fully readonly.
// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
export async function navigateBetweenPages(eventClickButtonByUser: Readonly<MouseEvent>) {
    const target = eventClickButtonByUser.target;
    if (!(target instanceof HTMLButtonElement)) return;
    const pageName = target.name;
    await goto(pageName);
}

