import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom' 

import CustomNavbar from '../components/navbar/navbar'
import HomePage from '../views/homePage/homePage'

const CustomRoutes = () => {
    
    return (
        <BrowserRouter>
            <CustomNavbar />
            <Routes>
                <Route exact path={"/"} element={ <HomePage /> } /> 
            </Routes>
        </BrowserRouter>
    )
}

export default CustomRoutes