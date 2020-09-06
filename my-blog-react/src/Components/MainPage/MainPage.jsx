import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { lighten, makeStyles, withStyles } from "@material-ui/core/styles";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SkillsRaitingContainer from './../../Containers/SkillsRaitingContainer';
import FewInfoAboutMeContainer from './../../Containers/FewInfoAboutMeContainer';
import MyProjectsContainer from './../../Containers/MyProjectsContainer';
import WellcomeSection from "./WellcomeSection";
import HeadlineSection from "./../Common/HeadlineSection";
import styles from './../../App.scss';

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(5)
  },
  root: {
    flexGrow: 1
  },
  margin: {
    display: "inline-block",
    margin: theme.spacing(1),
    width: "200px"
  },
  sectionOfMainPage: {
    width: "100%"
  },
  sectionWithPosition: {
    position: "relative",
    transform: `translate(0px, -32px)`,
  }

}));


export default function MainPage(props) {
  const classes = useStyles();
  const matchesMaxW600 = useMediaQuery('(max-width:600px)');
  const matchesMaxW425 = useMediaQuery('(max-width:425px)');

  return (
    <Box>
      <Grid className={matchesMaxW600 || classes.sectionWithPosition}>
        <WellcomeSection />
      </Grid>
    <Grid container direction="column"  className={classes.mainGrid}>
      <Grid item className={classes.sectionOfMainPage}>
        <HeadlineSection headlineText={"About me"}/>
      </Grid>
      <Grid item className={classes.sectionOfMainPage}>
        <FewInfoAboutMeContainer />
      </Grid>
      <Grid item className={classes.sectionOfMainPage}>
        <HeadlineSection headlineText={"My skills"}/>
      </Grid>
      <Grid item className={classes.sectionOfMainPage}>
        <SkillsRaitingContainer  />
      </Grid>
      <Grid item className={classes.sectionOfMainPage}>
        <HeadlineSection headlineText={"My projects"}/>
      </Grid>
      <Grid item className={classes.sectionOfMainPage}>
        <MyProjectsContainer />
      </Grid>
    </Grid>
    </Box>
  );
}
