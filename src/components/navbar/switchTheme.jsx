import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useStyles } from './styles/switchThemeStyle';
import { Switch } from '@material-ui/core'

import { FaSun } from "react-icons/fa";

import { themeDark } from '../../styles/themeDark';
import { themeLight } from '../../styles/themeLight'

import { setThemeDarkAction, setThemeLightAction } from '../../redux/actions/setThemeAction'

const SwitchTheme = () => {
    const classes = useStyles()

    const dispatch = useDispatch()
    
    const handleSwitch = (e, value) => {
        if ( value === true) {
            dispatch(setThemeLightAction(themeLight))
        } else {
            dispatch(setThemeDarkAction(themeDark))
        }
    }

    return (
        <div className={classes.swichThemeContent}>
            <FaSun className={classes.swichThemeIcon}/>
            <Switch className={classes.swichTheme}
                onChange={handleSwitch}
                color="primary"/>
        </div>
    )
}

export default SwitchTheme