import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Anchor from "../Common/Anchor";
import HeaderTopMenu from "./HeaderTopMenu";
import Typography from '@material-ui/core/Typography';
import { lighten, makeStyles, withStyles } from "@material-ui/core/styles";
import logo from './../../Assets/logo/logo.png'

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
}))


export default function Header(props) {

  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />

      <AppBar className={classes.headerBackground}>
        <Toolbar>
          <Grid container direction="row" justify="space-between" alignItems="center">
            <Grid item xs={5}>
              <Box className={classes.mainLogo}>
                
              </Box>
            </Grid>

            <Grid item xs={5} >
              <Grid container direction="row" alignItems="center" justify="flex-end">
              <HeaderTopMenu {...props}/>
              <img src={logo} className={classes.mainLogo} />
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Anchor />
    </React.Fragment>
  );
}
