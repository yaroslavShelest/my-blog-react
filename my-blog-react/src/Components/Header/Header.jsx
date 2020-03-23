import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Anchor from "../Common/Anchor";
import HeaderTopMenu from "./HeaderTopMenu";
import Typography from '@material-ui/core/Typography';

export default function Header(props) {
  return (
    <React.Fragment>
      <CssBaseline />

      <AppBar>
        <Toolbar>
          <Grid container direction="row" justify="flex-end" alignItems="center">
            <Grid item xs={5}>
              <Typography variant="h4" >The best developer blog</Typography>
            </Grid>

            <Grid item xs={5} >
              <HeaderTopMenu {...props}/>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Anchor />
    </React.Fragment>
  );
}
