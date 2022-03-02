import { createTheme } from "@material-ui/core"; 

import { colorsDark as colors } from "./colors";

export const themeDark = createTheme({

    palette: {
        type: "dark",
        text: {
            primary: "#fff"
        },
    },
    colors
})