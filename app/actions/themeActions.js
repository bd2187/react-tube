import { TOGGLED_DARK_THEME } from "./actionTypes";

export function toggleDarkTheme(darkTheme) {
    localStorage.setItem("darkTheme", darkTheme);

    return {
        type: TOGGLED_DARK_THEME,
        payload: darkTheme
    };
}
