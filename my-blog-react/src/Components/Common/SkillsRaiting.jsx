import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { lighten, makeStyles, withStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Slide from '@material-ui/core/Slide';



const StyledRating = withStyles({
  iconFilled: {
    color: '#ff6d75',
  },
  iconHover: {
    color: '#ff3d47',
  },
  root: {
    
  }
})(Rating);

export default function SkillsRaiting({ skills }) {
  // const classes = useStyles();

  return (
    <Grid container direction="column" >
      {skills.map((skill, index) => (
        <Grid item xs={9} sm={6} md={2}>
          <Box component="fieldset" mb={1} borderColor="transparent">
            <Typography component="legend">{skill.title}</Typography>
            <Slide direction="dawn" in={true} mountOnEnter unmountOnExit >
            <Rating
              readOnly
              name="customized-10"
              value={skill.value / 10}
              max={10}
              size="small"
            />
            </Slide>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
