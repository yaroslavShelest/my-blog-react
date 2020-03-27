import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import JssProvider from "react-jss/lib/JssProvider";
import CardActionArea from '@material-ui/core/CardActionArea';
import { createGenerateClassName } from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import styles from './../../App.scss';
import Landing from './../../assets/myFotos/Landing.png';


const muiBaseTheme = createMuiTheme();


// const theme = {
//   overrides: {
//     MuiCard: {
//       root: {
//         "&.MuiEngagementCard--01": {
//           transition: "0.3s",
//           width: 250,
//           margin: "auto",
//           boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
//           "&:hover": {
//             boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
//           },
//           "& .MuiCardMedia-root": {
//             paddingTop: "56.25%"
//           },
//           "& .MuiCardContent-root": {
//             textAlign: "left",
//             padding: muiBaseTheme.spacing.unit * 3
//           },
//           "& .MuiDivider-root": {
//             margin: `${muiBaseTheme.spacing.unit * 3}px 0`
//           },
//           "& .MuiTypography--heading": {
//             fontWeight: "bold"
//           },
//           "& .MuiTypography--subheading": {
//             lineHeight: 1.8
//           },
//           "& .MuiAvatar-root": {
//             display: "inline-block",
//             border: "2px solid white",
//             "&:not(:first-of-type)": {
//               marginLeft: -muiBaseTheme.spacing.unit
//             }
//           }
//         }
//       }
//     }
//   }
// };

export default function SkillsRaitingVersion2({projects}) {
  return (
        <Grid container direction="row" spacing={4} justify="space-evenly">
          {/* {projects.map((project, index) => ( */}
          <Grid item>
        <div>
          <Container>
          <Card className={"skill-card"}>
            <CardActionArea >
              <CardHeader className={"skill-card__header"}>
            <CardMedia
              image={
                Landing
              }
              className={"skill-card__icon"}
            />
            </CardHeader>
            <CardContent className="skill-card__body">
              <Typography
                className={"skill-card__title"}
                variant={"h6"}
                gutterBottom
              >
                {"project.name"}
              </Typography>
              <ul className="skill-card__knowledge">
      <li>HTML5</li>
      <li>Sémantique</li>
      <li>SVG</li>
      <li>SVG</li>
      <li>SVG</li>
      <li>SVG</li>
      <li>Canvas</li>
    </ul>
            </CardContent>
            </CardActionArea>
          </Card>
          </Container>
        </div>
        </Grid>
        {/* ))} */}
        </Grid>
  );
}


