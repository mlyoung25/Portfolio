import { createTheme } from '@material-ui/core/styles'
import { indigo, green } from '@material-ui/core/colors/';
// Dark theme
export default createTheme({
    palette: {
        type: "dark",
        primary: indigo,
        success: green,
        background: {
            paper: "#1c1c1c",
            default: "#121212"
        }
    },
    /* a: {
        textDecorations: "none",
        visited: {
            color: "blue"
        }
    }, */
    MuiStepLabel: { // Not sure this does anyting CHECK: "App.css"
        labelContainer: { color: "white !important" },
        root: {
            color: "white",
            '&$completed': {
                color: 'pink',
            },
            '&$active': {
                color: 'red',
            },
        },
        active: {},
        completed: {},
    },
});