import { SET_THEME_DARK, SET_THEME_LIGHT } from "../types"
import { themeDark } from "../../styles/themeDark"

export const initialState = themeDark

export const setThemeReducer = (state = initialState, { type, theme }) => {
    switch (type) {

        case SET_THEME_LIGHT:
            return { ...state, ...theme }
            
        case SET_THEME_DARK:
            return { ...state, ...theme }

        default:
      return state
    }
}
