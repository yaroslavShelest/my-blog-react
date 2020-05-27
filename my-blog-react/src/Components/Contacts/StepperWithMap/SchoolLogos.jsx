import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles((theme) => ({
  img: {
    height: 100,
    maxWidth: 100,
    overflow: 'hidden',
    display: 'flex',
    width: '100%',
  },
  logosContainer: {
    justifyContent: "center",
    height: "100%",
    justifyContent: "space-evenly",
  }
}));

export default function SchoolLogos({logos}) {
  const classes = useStyles();
  const theme = useTheme();
  

 
  return (<>
   <Grid container direction="column" className={classes.logosContainer}>
      {logos.map((logo, index) => (
        <img key={index} className={classes.img} src={logo.srcImg} alt={"404"} />
       
      ))}
      </Grid>
   </>
  );
}