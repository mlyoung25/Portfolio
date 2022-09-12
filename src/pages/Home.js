import { Container, Grid, Typography, Slide, Grow, Fade, Avatar, Collapse, Zoom } from "@mui/material";
import { makeStyles } from '@material-ui/core/styles';
import { useState, useRef, useContext } from "react";
import { UserContext } from "../contexts"
import { indigo } from "@material-ui/core/colors";
import Delayed from "../components/Delayed";
import SocialMedia from "../components/SocialMedia";
import my from "../sections";
import { Divider } from "@material-ui/core";
const useStyles = makeStyles({
    root: {
        padding: 50
    },
    pic: {
        maxWidth: 400,
        maxHeight: "100%"
    }
})
export default function Home() {
    const classes = useStyles()
    const [state, dispatch] = useContext(UserContext)
    const [isShown, setShown] = useState(false)
    const containerRef = useRef(null);
    setTimeout(() => setShown(true), 1000) // Only have one 'delayed' logic just so that justify content looks good and centered before send comp renders in
    return (<Grow in timeout={700}><div style={{ marginTop: 50 }}>
        <Grid container
            direction="row"
            //sx={{textAlign: "center"}}
            justifyContent={isShown ? "space-evenly" : "center"}
            alignItems="center"
            ref={containerRef}
        >
            {/*  xs={isShown ? 6 : 0} */}
            <Grid item>
                <Fade in timeout={500}>
                    <Avatar sx={{ width: 275, height: 275, bgcolor: indigo[500] }}
                        className={["Media", classes.pic].join(" ")}
                        alt={my.name}
                        src="/pics/me_3_prof_bg_2.jpg" />
                </Fade>
            </Grid>
            <Grid style={{ marginBottom: 10 }} sm={isShown ? 6 : 0} item>
                <Grow timeout={1200} in={isShown} mountOnEnter unmountOnExit>
                    <div>
                        <Typography style={{ fontFamily: "Blinker, sans-serif" }} variant="h3" component="div">Welcome.</Typography>
                        <Typography color="gray" variant="body1">My name is {my.name}.</Typography>
                        <Typography variant="subtitle1" >
                            {my.preamble}
                        </Typography>
                    </div>
                </Grow>
                {/* 
<Grow timeout={1200} in={isShown} mountOnEnter unmountOnExit>
                    <Typography style={{ fontFamily: "Blinker, sans-serif" }} variant="h3" component="div">Welcome.</Typography>
                </Grow>
                <Delayed wait={2750}>
                    <Slide timeout={750} direction="up" container={containerRef.current} in>
                        <div>
                            <Typography color="gray" variant="body1">My name is {my.name}.</Typography>
                            <Typography variant="subtitle1" >
                                {my.preamble}
                            </Typography>
                        </div>
                    </Slide>
                </Delayed> */}
                <Delayed wait={1000}>
                    <Fade in timeout={5000} mountOnEnter unmountOnExit>
                        <Grid container spacing={1}>
                            <Grid item>
                                <SocialMedia showName icon="envelope" name="Email" url="mailto:zavaar.shah123@gmail.com" />
                            </Grid>
                            <Grid item>
                                <SocialMedia showName url="https://www.linkedin.com/in/zavaar-shah" confirmation />
                            </Grid>
                            <Grid item>
                                <SocialMedia showName url="https://github.com/thatziv" confirmation />
                            </Grid>
                            <Grid item>
                                <div onClick={() => dispatch({ type: "UI_nav", focus: "portfolio" })}>
                                    <SocialMedia showName icon="book-bookmark" name="Portfolio" url="#" />
                                </div>
                            </Grid>
                        </Grid>
                    </Fade>
                </Delayed>
            </Grid>

            <Grid item md={isShown ? 10 : 0} sm={isShown ? 10 : 0} xs={isShown ? 12 : 0}>
                <Slide in={isShown} container={containerRef.current} direction="up" timeout={350} mountOnEnter unmountOnExit>
                    <div>
                        <Divider style={{ marginTop: 12 }} />
                        <my.skills />
                    </div>
                </Slide>
            </Grid>

        </Grid>
    </div></Grow>)
}