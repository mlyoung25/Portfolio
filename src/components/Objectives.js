import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
/* import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts'; */
import FolderSpecialIcon from '@material-ui/icons/FolderSpecial';
import Icon from '@material-ui/core/Icon';
import { Typography } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        padding: "10px",
        borderRadius: "5px",
        backgroundColor: theme.palette.background.default,
    },
}));

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

export default function SimpleList(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <List component="nav" key={props.list} aria-label="secondary">
                {/* <Typography variant='h4'>
                    <Typography variant='subtitle'>
                        &nbsp;Objectives
                    </Typography>
                </Typography> */}
                {props.list.split("|").map(objective => {
                    return (<div><ListItem key={objective} divider>
                        <ListItemText primary={objective} />
                    </ListItem></div>)
                })}
            </List>
        </div>
    );
}
