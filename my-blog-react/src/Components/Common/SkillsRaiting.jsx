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
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles({
  root: {
    
  },
  item: {
   maxWidth: "600px",
  }
});

export default function SkillsRaiting({ skills }) {
  const classes = useStyles();

  return (
    <Grid container direction="row" justify="center">
      <Grid item className={classes.item}>
    <Paper> 
      {skills.map((skill, index) => (
        <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={""}>{skill.title}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          {skill.description}
          <Box component="fieldset" mb={1} borderColor="transparent">
            <Slide direction="dawn" in={true} mountOnEnter unmountOnExit >
            <Rating
              readOnly
              name="customized-10"
              value={skill.value/10}
              max={10}
              size="small"
            />
            </Slide>
          </Box>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      ))}
    </Paper>
    </Grid>
    </Grid>
  );
}
