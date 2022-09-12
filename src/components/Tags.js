import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Icon from '@material-ui/core/Icon';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.1),
    },
  },
}));
// https://mui.com/components/material-icons/
var _id = 0;
export default function Tags(props) {
  const classes = useStyles();
  _id++;
  return (
    <div className={classes.root}>
      <Chip id={props.children}
        color="primary"
        icon={<Icon className="material-icons-outlined">tag</Icon>}
        label={props.children} />
    </div>
  )
}