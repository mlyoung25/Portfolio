import { Typography, Link, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import my from "../sections"

const useStyles = makeStyles({
    root: {
        textAlign: "right",
        color: "#575757",
        // fontStyle: "italic",
        fontWeight: "300"
    }
})

export default function Footer() {
    const classes = useStyles()
    return (
        <Typography variant='subtitle1' className={classes.root}>
            Made by {my.name} with&nbsp;
            <Tooltip title="www.mui.com">
                <Link href="https://mui.com/">MUI</Link>
            </Tooltip> &&nbsp;
            <Tooltip title="www.reactjs.org">
                <Link href="https://reactjs.org/">React</Link>
            </Tooltip>.
        </Typography>
    )
}