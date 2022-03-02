import React from 'react'
import { Paper } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const HomePage = () => {

    const [t] = useTranslation("homePage")

    return (
        <Paper>
            <p>{t("translations.test-title")}</p>
        </Paper>
    )
}

export default HomePage