import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { lighten, makeStyles, withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from '@material-ui/core/Typography';
import Paper from "@material-ui/core/Paper";
import SkillsRaitingContainer from './../../Containers/SkillsRaitingContainer';
import FewInfoAboutMeContainer from './../../Containers/FewInfoAboutMeContainer';
import MyProjectsContainer from './../../Containers/MyProjectsContainer';
import WellcomeSection from "./WellcomeSection";
import HeadlineSection from "./../Common/HeadlineSection";
import styles from './../../App.scss';

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3)
  },
  root: {
    flexGrow: 1
  },
  margin: {
    display: "inline-block",
    margin: theme.spacing(1),
    width: "200px"
  },

}));


const BorderLinearProgress = withStyles({
  root: {
    height: 10,
    backgroundColor: lighten("#ff6c5c", 0.5)
  },
  bar: {
    borderRadius: 20,
    backgroundColor: "#ff6c5c"
  }
})(LinearProgress);

export default function MainPage(props) {
  const classes = useStyles();

  return (
    <Box>
      <Grid>
        <WellcomeSection />
      </Grid>
    <Grid container direction="column" spacing={5} className={classes.mainGrid}>
      <Grid item>
        <HeadlineSection headlineText={"Few info about me"}/>
      </Grid>
      <Grid item>
        <FewInfoAboutMeContainer />
      </Grid>
      <Grid item>
        <HeadlineSection headlineText={"My skills"}/>
      </Grid>
      <Grid item>
        <SkillsRaitingContainer  />
      </Grid>
      <Grid item>
        <HeadlineSection headlineText={"My projects"}/>
      </Grid>
      <Grid item>
        <MyProjectsContainer />
      </Grid>
    </Grid>
    </Box>
  );
}

// {[...new Array(30)]
//   .map(
//     () => `Cras mattis consectetur purus sit amet fermentum.
// Cras justo odio, dapibus ac facilisis in, egestas eget quam.
// Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
// Praesent commodo cursus magna, vel scelerisque nisl consectetur et.,`
//   )
//   .join('\n')}
