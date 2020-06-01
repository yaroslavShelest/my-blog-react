import React from "react";
// import JssProvider from "react-jss/lib/JssProvider";
import CardActionArea from '@material-ui/core/CardActionArea';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from '@material-ui/core/useMediaQuery';



const muiBaseTheme = createMuiTheme();


const themeUsefullTypes = {
  overrides: {
    MuiCard: {
      root: {
        "&.MuiEngagementCard--01": {
          transition: "0.3s",
          width: 250,
          margin: "auto",
          boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
          "&:hover": {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
          },
          "& .MuiCardMedia-root": {
            paddingTop: "56.25%",
          },
          "& .imageProsto": {
            paddingTop: "56.25%",
          },
          "& .MuiCardContent-root": {
            textAlign: "left",
            padding: muiBaseTheme.spacing.unit * 3
          },
          "& .MuiDivider-root": {
            margin: `${muiBaseTheme.spacing.unit * 3}px 0`
          },
          "& .MuiTypography--heading": {
            fontWeight: "bold",
            textAlign: "center",
          },
          "& .MuiTypography--subheading": {
            lineHeight: 1.8
          },
          "& .MuiAvatar-root": {
            display: "inline-block",
            border: "2px solid white",
            "&:not(:first-of-type)": {
              marginLeft: -muiBaseTheme.spacing.unit
            }
          }
        }
      }
    }
  }
};

export default function UsefullTypes() {

  const matchesMaxW600 = useMediaQuery('(max-width:600px)');
  const types = [
    { name: 'JS', description: "Includes a lot of links about js, It's like vanila JS,aproaches and other"},
    { name: 'HTML', description: "Validators,Can I use and latest standart"},
    { name: 'CSS', description: "It's about aproaches how to do awesome UI"},
    { name: 'React', description: "Maybe all about React"},
    { name: 'ThreeJS', description: "Foundamentals about Three"},
    { name: 'NextJS', description: "Foundamentals about Next"},
  ]

  return (
      <MuiThemeProvider theme={createMuiTheme(themeUsefullTypes)}>
        <Grid container  direction={matchesMaxW600 ? "column" : "row"} spacing={4} justify="space-evenly">
          {types.map((type, index) => (
          <Grid item  key={index}>
        <div>
          <Card className={"MuiEngagementCard--01"}>
            <CardContent>
              <Typography
                className={"MuiTypography--heading"}
                variant={"h2"}
                gutterBottom
              >
                {type.name}
              </Typography>
              <Typography
                className={"MuiTypography--subheading"}
                variant={"caption"}
              >
                {type.description}
              </Typography> 
            </CardContent>
          </Card>
        </div>
        </Grid>))}
        </Grid>
      </MuiThemeProvider>
  );
}


