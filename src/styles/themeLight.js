import { createTheme } from "@material-ui/core"; 

import { colorsLight as colors } from "./colors";

export const themeLight = createTheme({

    palette: {
        type: "light",
        text: {
            primary: "#000"
        },
    },
    colors
})