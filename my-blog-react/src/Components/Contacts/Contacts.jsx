import React from "react";
import { lighten, makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import HeadlineSection from "../Common/HeadlineSection";
import Typography from '@material-ui/core/Typography';
import TextMobileStepper from "./StepperWithMap/Stepper";
import Map from "./StepperWithMap/Map";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(5)
  },
  contactsText: {
    color: "white"
  }
}));


export default function Contacts({ myContactsLinks, myTeachers }) {
  const classes = useStyles();

  return (
    <Box>
      <Grid container direction="column" spacing={4} className={classes.mainGrid}>
        <Grid item>
          <HeadlineSection headlineText={"Contacts"} />
        </Grid>
        <Grid item>
            <Typography variant="h6" className={classes.contactsText}>
                Thanks a lot for watching, I was created this application with expirience which my teachers gived me, thanks a lot them. You can find me with this links.  
            </Typography>
        </Grid>
        <Grid item>
          <Grid container direction="row" spacing={4}>
              <Grid item>
                <TextMobileStepper myTeachers={myTeachers}/>
                
              </Grid>
              <Grid item>
              <Map />

              </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
