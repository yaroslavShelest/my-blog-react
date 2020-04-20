import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import RadioIcon from '@material-ui/icons/Radio';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: "aliceblue",
    position: 'relative',
    overflow: 'auto',
    maxHeight: 300,
    borderRadius: "8px",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function StationsList({stations, handleSwapToNextWithId, currentStation}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"  
      className={classes.root}
    >
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <RadioIcon />
        </ListItemIcon>
        <ListItemText primary="playlist" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {stations.map(({name,id}) => (
          <ListItem button className={classes.nested} id={id} onClick={(e) => handleSwapToNextWithId(e,id)}>
            <ListItemIcon >
             {currentStation.id === +id && <PlayArrowIcon  color={"primary"}/>}
            </ListItemIcon>
            <ListItemText primary={name}  />
          </ListItem>
          ))}
        </List>
      </Collapse>
    </List>
  );
}