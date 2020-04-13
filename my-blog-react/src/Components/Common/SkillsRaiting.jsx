import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { lighten, makeStyles, withStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Slide from '@material-ui/core/Slide';
import Paper from "@material-ui/core/Paper";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ImportExport from '@material-ui/icons/ImportExport';
import sword from './../../Assets/logo/starSword.png';
import kauloRenImg from './../../Assets/devidersForSections/renKaulo.png';
import defenderImg from './../../Assets/devidersForSections/defender.png';


const useStyles = makeStyles({
  root: {
    
  },
  item: {
  maxWidth: "490px",
  },
  mainLogoContainer: {
    margin: "0 auto"
  },
  mainLogo: {
    width: "80px",
    higth: "80px",
  },
  swordLogo: {
    maxWidth: "300px",
    higth: "100%",
  },
  paperSkills: {
    boxShadow: "none",
    background: "inherit"
  },
  skillDesc: {
    color: "white",
  },
  importExport : {
    color: "white",
  }
});

export default function SkillsRaiting({ skills }) {
  const classes = useStyles();

  return (
    <Grid container direction="row" justify="space-between">
      <Grid item>
      <img src={kauloRenImg} alt={"404"}  />
      </Grid>
      <Grid item className={classes.item}>
    <Paper className={classes.paperSkills}> 
      {skills.map((skill, index) => (
        <ExpansionPanel className={classes.paperSkills}>
        <ExpansionPanelSummary
        expandIcon={<ImportExport className={classes.importExport}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Grid className={classes.mainLogoContainer}>
            <img className={classes.swordLogo} src={sword} />
            <img className={classes.mainLogo} src={skill.mainLogo} />
          </Grid>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className={classes.skillDesc}>
          {skill.description}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      ))}
    </Paper>
    </Grid>
    <Grid item>
    <img src={defenderImg} alt={"404"}  />
      </Grid>
    </Grid>
  );
}
