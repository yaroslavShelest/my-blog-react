import React from "react";
import StarWarsWoff from "./../fonts/STARWARS/STARWARS.woff";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const starwars = {
  fontFamily: "StarWars",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    local('Starwars'),
    local('STARWARS'),
    url(${StarWarsWoff}) format('woff')
  `
};

const theme = createMuiTheme({
  typography: {
    fontFamily: "StarWars, Roboto"
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [starwars]
      }
    }
  }
});

export const withGlobalFont = Component => {
  return props => {
    return (
      <React.Fragment>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...props} />
        </MuiThemeProvider>
      </React.Fragment>
    );
  };
};
