import React, { useState, useContext, useEffect } from 'react';
import { Button, ButtonGroup, Container, Typography, Link, Tooltip, Fab } from '@material-ui/core';
import MediaCard from "../components/MediaCard"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Grow from '@mui/material/Grow';
import { useViewport } from '../contexts/viewport';


import YouTubeEmbed from "../components/YouTubeEmbed"
import Section from '../components/Section';
//import Status from './components/Status';

// Content
import Jeva from '../sections/Jeva';
import FiveM from '../sections/FiveM';
import Webserver from '../sections/Webserver';
import Garage from '../sections/Garage';
import Hackathon from '../sections/Hackathon'; // '21
import Hackathon2 from '../sections/Hackathon2'; // '22
import BE1200 from '../sections/BE1200';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    bg: {
        backgroundColor: "#161616",
        padding: "20px",
        borderRadius: "5px",
        boxShadow: "8px 5px 5px #111111"
    },
    heading: {
        fontSize: theme.typography.pxToRem(23),
        fontWeight: theme.typography.fontWeightRegular,
    },
    listView: {
        width: '100%',
        padding: "10px",
        borderRadius: "5px",
        backgroundColor: theme.palette.background.default,
    },
    paper: {
        padding: theme.spacing(2),
    }
}));

const columnProps = {
    container: true,
    item: true,
    xs: 6,
    direction: "column",
}

// TODO: Make Desktop & Mobile component render from the same way (not statically like this)
export default function Portfolio() {
    //const classes = useStyles();
    /*     const { width } = useViewport()
        const breakpoint = 1275 */
    return <Grow in timeout={500}>
        <Grid
            justifyContent="flex-start"
            style={{ marginTop: "10px" }}
            container spacing={2}>
            {/* JEVA */}
            <MediaCard {...Jeva.meta}>
                <Section icon="fa-solid fa-chart-line" title="Statistics">
                    <Jeva.components.statistics />
                </Section>
                <Section icon="fa-solid fa-arrow-up-right-from-square" title="Links">
                    <Jeva.components.links />
                </Section>
            </MediaCard>
            {/* FIVEM BOT */}
            <MediaCard {...FiveM.meta}>
                <Section icon="fa-solid fa-chart-line" title="Statistics">
                    <FiveM.components.statistics />
                </Section>
                <Section icon="fa-solid fa-arrow-up-right-from-square" title="Links">
                    <FiveM.components.links />
                </Section>
            </MediaCard>
            {/* Garage */}
            <MediaCard {...Garage.meta}>
                <Section icon="fa-solid fa-images" title="Gallery">
                    <Garage.components.pictures />
                </Section>
                <Section icon="fa-solid fa-chart-line" title="Statistics">
                    <Garage.components.statistics />
                </Section>
            </MediaCard>
            {/* WEBSERVER */}
            <MediaCard {...Webserver.meta}>
                <Section icon="fa-solid fa-chart-line" title="Statistics">
                    <Webserver.components.statistics />
                </Section>
                <Section icon="fa-solid fa-arrow-up-right-from-square" title="Links">
                    <Webserver.components.links />
                </Section>
            </MediaCard>
            {/* Hackathon'21 */}
            <MediaCard {...Hackathon.meta}>
                <Section icon="fa-solid fa-bookmark" title="Description">
                    <Hackathon.components.description />
                </Section>
                <Section icon="fa-solid fa-images" title="Gallery">
                    <Hackathon.components.pictures />
                </Section>
                <Section icon="fa-solid fa-arrow-up-right-from-square" title="Links">
                    <Hackathon.components.links />
                </Section>
            </MediaCard>
            {/* Hackathon'22 */}
            <MediaCard {...Hackathon2.meta}>
                <Section icon="fa-solid fa-bookmark" title="Description">
                    <Hackathon2.components.description />
                </Section>
                <Section icon="fa-solid fa-images" title="Gallery">
                    <Hackathon2.components.pictures />
                </Section>
                <Section icon="fa-solid fa-arrow-up-right-from-square" title="Links">
                    <Hackathon2.components.links />
                </Section>
            </MediaCard>
            {/* BE1200 Final Project */}
            <MediaCard {...BE1200.meta}>
                <Section icon="fa-solid fa-bookmark" title="Description">
                    <BE1200.components.description />
                </Section>
                <Section icon="fa-solid fa-images" title="Gallery">
                    <BE1200.components.pictures />
                </Section>
                <Section icon="fa-solid fa-arrow-up-right-from-square" title="Links">
                    <BE1200.components.links />
                </Section>
            </MediaCard>
        </Grid>
    </Grow>
}