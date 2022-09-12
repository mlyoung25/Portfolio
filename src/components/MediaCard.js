import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Divider, Zoom, Grow } from '@material-ui/core';
import ReactGA from "react-ga"

import Tags from "./Tags"
import Objectives from "./Objectives"
import Section from './Section';
import Timeline from './Timeline';
import DateRange from './DateRange';
// import MainDialog from './MainDialog'

const useStyles = makeStyles((theme) => ({
    media: {
        height: 140,
    },
    cardcontent: {
        "&:last-child": {
            paddingBottom: 0
        }
    },
    paper: {
        padding: theme.spacing(2)
    },
    tags: {
        overflow: "visible",
        float: "right",
        maxHeight: "34px",
        minWidth: "90%"
    }
}));

export default function MediaCard(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [cardSize, setCardSize] = React.useState(6);
    const cardRef = React.useRef(null)
    //let cardWidth = 6
    const executeScroll = () => cardRef.current.scrollIntoView()
    const handleExpandClick = () => {
        //setCardSize(6) // TODO: make cards expand to full width for desktop-sized screens
        setCardSize(expanded ? 6 : 12) // TODO: make cards expand to full width for desktop-sized screens

        if (!expanded) {
            executeScroll() // scroll to focused card
        }
        setExpanded(!expanded);
    };
    const gaCardExpandHandle = (cardName = "none") => {
        ReactGA.event({category: "z_ui-card-expand", label: cardName, action: cardName}) // TODO: see if this works on prod
    }
    return (
        /* <Grid item xs={12} sm> */ // FOR ONLY ROWS
        <Grow in timeout={700}>
            {/* selection border logic below */}
            <Grid item xs={12} md={cardSize} lg={cardSize}>
                <Card ref={cardRef} style={expanded ? { border: "2px solid  #3f51b5" } : { border: null }} elevation={3}>
                    <CardActionArea onClick={() => { handleExpandClick(); gaCardExpandHandle(props.title)}}>
                        <CardMedia
                            className={classes.media}
                            image={props.banner}
                            title={props.title}
                        />
                        <CardContent className={classes.cardcontent}>
                            <Grid justifyContent='space-between' container>
                                <Grid item xs={10}>
                                    <Typography gutterBottom variant="h3" style={{ fontFamily: "Bebas Neue" }} component="h2">
                                        {props.title}
                                    </Typography>
                                </Grid>
                                <Grid item sm>
                                    <DateRange {...props} />
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Typography variant="body2" color="textSecondary" >
                                    {props.description}
                                </Typography>
                            </Grid>
                        </CardContent>
                    </CardActionArea>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <Divider style={{ marginRight: "18px", marginLeft: "18px" }} />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {props.prechildren}
                                {props.objectives && <Section icon={"fa-solid fa-list"} title="Deliverables">
                                    <Objectives list={props.objectives} />
                                </Section>}
                                {props.timeline && <Section icon={"fa-solid fa-timeline"} title="Timeline">
                                    <Timeline steps={props.timeline} />
                                </Section>}
                                {props.children}
                            </Typography>
                        </CardContent>
                    </Collapse>
                    <CardActions>
                        {typeof (props.tags) == "string" && <Grid style={{ overflowY: "scroll", maxHeight: "20vh" }} alignItems="baseline" container spacing={1}>
                            {props.tags.split(",").map(tag => { return <Grid item><Tags>{tag}</Tags></Grid> })}
                        </Grid>}
                    </CardActions>
                    <Button onClick={() => { handleExpandClick(); gaCardExpandHandle(props.title)}} style={{ paddingBottom: 20, paddingTop: 20 }} size="small" color="primary">
                        {expanded ? "Less" : "More"}
                    </Button>
                </Card>
            </Grid>
        </Grow>
    );
}