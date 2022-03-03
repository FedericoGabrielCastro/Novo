import i18next from "i18next";
import { initReactI18next } from "react-i18next";

// ES
import homePage_es from './es/homePage.json'
import switchLenguaje_es from './es/switchLenguaje.json'

// EN
import homePage_en from './en/homePage.json'
import switchLenguaje_en from './en/switchLenguaje.json'

const resources = {
    es: {
        homePage: homePage_es,
        switchLenguaje: switchLenguaje_es 
    },
    en: {
        homePage: homePage_en,
        switchLenguaje: switchLenguaje_en
    }
}

i18next
    .use(initReactI18next)
    .init({
        debug: false,
        resources,
        lng: "es",
        interpolation: {
            escapeValue: false,
        },
})

export default i18next