import { initialState, setThemeReducer } from "../setThemeReducer";
import { themeDark } from "../../../styles/themeDark";
import { themeLight } from "../../../styles/themeLight";

describe('set theme reducer', () => {
    
    it('should test the initialState', () => {
        
        expect(setThemeReducer(undefined, {})).toEqual(
            initialState
        )

    });

    it('should test case SET_THEME_DARK', () => {
        
        const state = themeDark
        
        expect(setThemeReducer(state, {
            type: "SET_THEME_DARK",
            theme: themeDark
        })).toEqual(state)

        expect(setThemeReducer(state, {
            type: "SET_THEME_DARK",
            theme: themeLight
        })).not.toEqual(state)

    });

    it('should test case SET_THEME_LIGHT', () => {
        
        const state = themeDark
        
        expect(setThemeReducer(state, {
            type: "SET_THEME_LIGHT",
            theme: themeLight
        })).toEqual(themeLight)

        expect(setThemeReducer(state, {
            type: "SET_THEME_LIGHT",
            theme: themeLight
        })).not.toEqual(state)

    });
});