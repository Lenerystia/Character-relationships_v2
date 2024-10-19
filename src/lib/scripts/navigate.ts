import { goto } from "$app/navigation";

export function navigateBetweenPages(eventClickButtonByUser: MouseEvent){
    const target = eventClickButtonByUser.target as HTMLButtonElement
    const pageName = target.name;
    goto(pageName);
}

    