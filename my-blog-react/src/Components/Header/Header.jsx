import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Anchor from "../Common/Anchor";
import HeaderTopMenu from "./HeaderTopMenu";
import Typography from '@material-ui/core/Typography';
import { lighten, makeStyles, withStyles } from "@material-ui/core/styles";
import logo from './../../Assets/logo/logo.png'
import AnimatedLogo from "./AnimatedLogo";


const useStyles = makeStyles(theme => ({
  headerBackground: {
    backgroundColor: "inherit",
    boxShadow: "none"
  },
  mainLogo: {
    margin: "8px",
    maxWidth: "80px",
    maxHeight: "40px",
    borderRadius: "50%"
  }
}));


export default function Header(props) {

  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
      <AppBar className={classes.headerBackground}>
        <Toolbar>
          <Grid container direction="row" justify="space-between" alignItems="center">
            <Grid item xs={5}>
            <AnimatedLogo animatedText={props.animatedText}/>
            </Grid>

            <Grid item xs={5} >
              <Grid container direction="row" alignItems="center" justify="flex-end">
              <HeaderTopMenu {...props}/>
              <img src={logo} alt={"404"} className={classes.mainLogo} />
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      </HideOnScroll>
      <Anchor />
    </React.Fragment>
  );
}





function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}