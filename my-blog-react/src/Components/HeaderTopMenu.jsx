import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Grid from "@material-ui/core/Grid";
import { withStyles } from '@material-ui/core/styles';
import { green, purple } from '@material-ui/core/colors';
import {NavLink} from "react-router-dom";

const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: green[700]
    }
  }
}))(Button);

const useStyles = makeStyles(theme => ({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  margin: {
    margin: theme.spacing(1)
  }
}));


export default function HeaderTopMenu({sections}) {

  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = anchor => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom"
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Grid container direction="row" justify="space-around" alignItems="center">
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <Grid item xs={2}>
          <ListItem 
          button
          key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText  primary={text} />
          </ListItem>
          </Grid>
        ))}
        </Grid>
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
      <React.Fragment>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="baseline"
        >
          <Grid item>
            <ColorButton
              variant="contained"
              color="primary"
              className={classes.margin}
              onClick={toggleDrawer("top", true)}
            >
              Menu
            </ColorButton>
          </Grid>
        </Grid>

        <Drawer
          anchor={"top"}
          open={state["top"]}
          onClose={toggleDrawer("top", false)}
        >
          {list("top")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
