import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    
    navbarContent: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        height: "100vh",
        width: "20%",
        backgroundColor: theme.colors.blue,
        gap: "10px"
    }
}))