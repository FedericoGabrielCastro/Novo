import { setThemeDarkAction, setThemeLightAction } from "../setThemeAction";

describe('change theme actions', () => {
    
    it('should test setThemeDarkAction', () => {
        
        const theme = ""
        const expectation = {
            type: "SET_THEME_DARK",
            theme
        }

        expect(setThemeDarkAction(theme)).toEqual(expectation)

    });

    it('should test setThemeLightAction', () => {
        
        const theme = ""
        const expectation = {
            type: "SET_THEME_LIGHT",
            theme
        }

        expect(setThemeLightAction(theme)).toEqual(expectation)

    });
});