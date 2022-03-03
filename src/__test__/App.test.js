import React from "react";
import { Provider } from "react-redux";
import { render, screen } from '@testing-library/react'
import { store } from "../redux/store"
import '@testing-library/jest-dom'
import App from "../App";

describe('Render index', () => {
    
    it('should have a redux Provider', () => {
        
        render( 
            <Provider store={store}>
                <App />
            </Provider>
        )
        const element = screen.getByText("home")
        
        expect(element).toBeInTheDocument()
    });
});