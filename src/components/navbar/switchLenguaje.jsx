import React from 'react'
import { useStyles } from './styles/switchThemeStyle';
import { useTranslation } from 'react-i18next';
import { Switch } from '@material-ui/core'

const SwitchLenguaje = () => {
    const classes = useStyles()
    
    const [t ,i18n] = useTranslation("switchLenguaje")
    
    const handleSwitch = (e, value) => {
        if ( value === true) {
            i18n.changeLanguage("en")
        } else {
            i18n.changeLanguage("es")
        }
    }

    return (
        <div className={classes.swichThemeContent}>
            <h3 className={classes.titleLenguaje}>{t("translations.lenguaje")}</h3>
            <Switch className={classes.swichTheme}
                onChange={handleSwitch}
                color="primary"/>
        </div>
    )
}

export default SwitchLenguaje