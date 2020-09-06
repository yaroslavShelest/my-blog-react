import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import TelegramIcon from '@material-ui/icons/Telegram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

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
        <a key={index} target="_blank" href={link.src} className={"myContactsIcon"}>
      {link.name === "github" ? <GitHubIcon color="primary" style={{ fontSize: 75 }}/>:''}
      {link.name === "telegram" ? <TelegramIcon color="secondary" style={{ fontSize: 75 }}/>:''}
      {link.name === "gmail" ? <MailIcon  style={{ fontSize: 75, color:"purple" }}/>:''}
      {link.name === "linkedin" ? <LinkedInIcon style={{ fontSize: 75 }}/>:''}
        </a>
      ))}
      </Grid>
   </>
  );
}