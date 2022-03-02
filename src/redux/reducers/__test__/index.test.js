import { createStore } from "redux";
import { rootReducers } from "..";

import { initialState as setThemeReducerState } from '../setThemeReducer'

describe('test rootReducers', () => {
    
    let store = createStore(rootReducers)
    
    it('should loaded correctly', () => {
        
        expect(store.getState().setThemeReducer).toEqual(setThemeReducerState)
    });
});