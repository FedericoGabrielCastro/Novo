import { SET_THEME_DARK, SET_THEME_LIGHT } from "../types";

export const setThemeDarkAction = (theme) => ({
    type: SET_THEME_DARK,
    theme
})

export const setThemeLightAction = (theme) => ({
    type: SET_THEME_LIGHT,
    theme
})
