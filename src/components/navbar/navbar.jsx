import React from 'react'
import { useStyles } from './styles/navbarStyle'

import SwitchTheme from './switchTheme'
import SwitchLenguaje from './switchLenguaje'

const CustomNavbar = () => {
    const classes = useStyles()

    return (
        <nav className={classes.navbarContent}>
            <SwitchLenguaje />
            <SwitchTheme />
        </nav>
    )
}

export default CustomNavbar