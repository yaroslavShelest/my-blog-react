import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
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

export default function MyLinksWithLogos({myContactsLinks}) {
  const classes = useStyles();
 
  return (<>
   <Grid container direction="column" className={classes.logosContainer}>
      {myContactsLinks.map((link, index) => (
        <a key={index} target="_blank" href={link.src} >
        <img key={link.name} className={classes.img} src={link.srcImg} alt={link.name} />
        </a>
      ))}
      </Grid>
   </>
  );
}