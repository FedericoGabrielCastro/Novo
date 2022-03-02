import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "@material-ui/core";
import { I18nextProvider } from "react-i18next";

import i18next from "./i18n/i18nProvider";

import CustomRoutes from "./routes/routes";

const App = () => {
    
    const theme = useSelector(store => store.setThemeReducer)

    return (
        <I18nextProvider i18n={i18next}>
            <ThemeProvider theme={theme}>
                <CustomRoutes />
            </ThemeProvider>
        </I18nextProvider>
    )
}

export default App