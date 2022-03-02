import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    
    swichThemeContent: {
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },

    swichThemeIcon: {
        fontSize: "30px",
        color: theme.colors.white
    },

    swichTheme: {}
}))