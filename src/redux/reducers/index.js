import { combineReducers } from "redux";
import { setThemeReducer } from "./setThemeReducer";

export const rootReducers = combineReducers({
    setThemeReducer: setThemeReducer // set theme dark/light
})