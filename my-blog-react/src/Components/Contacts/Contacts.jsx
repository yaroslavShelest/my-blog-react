import React from "react";
import { lighten, makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import TextField from "@material-ui/core/TextField";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import HeadlineSection from "../Common/HeadlineSection";
import Typography from "@material-ui/core/Typography";
import TextMobileStepper from "./StepperWithMap/Stepper";
import Map from "./StepperWithMap/Map";
import MyLinksWithLogos from "./StepperWithMap/MyLinksWithLogos";
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import DirectionSnackbar from './DirectionSnackbar';
import * as emailjs from 'emailjs-com';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(5),
    position: "relative",
    transform: `translate(0px, -205px)`,
  },
  contactsText: {
    color: "white",
  },
  contactsContainer: {
    justifyContent: "space-between",
  },
  contactsFormContainer: {
    justifyContent: "center",
    margin: "8px"
  },
  myLinksCenter: {
    margin: "0 auto",
  },
  button: {
    margin: "0 auto",
  },
  form: {
    display: "flex",
    justifyContent: "center",
    margin: "16px",
    flexDirection: "column"

  },
  inputContainer: {
    margin: "8px"
  },
  formInput: {
    backgroundColor: "white",
    borderRadius: "4px",
  }
 
}));


export default function Contacts({ myContactsLinks, myTeachers }) {
  const classes = useStyles();
  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState();
  const [subject, setSubject] = React.useState();
  const [msg, setMsg] = React.useState();
  const [openSnack, setOpenSnack] = React.useState(false);

  const handleClickSnack = () => {
    setOpenSnack(true);
  };

  const handleCloseSnack = () => {
    setOpenSnack(false);
  };


  const onNameChange = (event) => {
    setName(event.target.value);
    console.log(event.target.value)
  };
  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const onSubjectChange = (event) => {
    setSubject(event.target.value);
  };
  const onMsgChange = (event) => {
    setMsg(event.target.value);
  };
  const submitEmail = (e) => {
    e.preventDefault();
    let templateParams = {
      from_name: email,
      to_name: 'alexxldub@gmail.com',
      subject: subject,
      message_html: msg,
     };    
      emailjs.send(
      'gmail',
      'template_THkezCw2',
       templateParams,
      'user_DCkljnnO831QLbSuFwNkp'
     )
     handleClickSnack();
    resetForm();
  };
  const resetForm = () => {
    setName("");
    setEmail("");
    setSubject("");
    setMsg("");
  };

  return (
    <Box>
      <Grid
        container
        direction="column"
        spacing={4}
        className={classes.mainGrid}
      >
        <Grid item>
          <HeadlineSection headlineText={"Contacts"} />
        </Grid>
        <Grid item>
          <Typography variant="h6" className={classes.contactsText}>
            Thanks a lot for watching, I was created this application with
            expirience which my teachers gived me, thanks a lot them. You can
            find me with this links.
          </Typography>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="row"
            spacing={4}
            className={classes.contactsContainer}
          >
            <Grid item>
              <TextMobileStepper myTeachers={myTeachers} />
            </Grid>
            <Grid item className={classes.myLinksCenter}>
              <MyLinksWithLogos myContactsLinks={myContactsLinks} />
            </Grid>
            <Grid item>
              <Map />
            </Grid>
          </Grid>

            <Grid
              container
              direction="column"
              spacing={4}
            >
              <Grid item>
          <HeadlineSection headlineText={"Contact me"} />
        </Grid>
          <form className={classes.form} onSubmit={submitEmail} method="POST">
              <Grid  container direction="row"  className={classes.contactsFormContainer} >
              <Grid item className={classes.inputContainer}>
              <TextField
                required={true}
                type="text"
                id="filled-basic" label="Name" variant="filled"
                value={name}
                onChange={onNameChange}
                className={classes.formInput}
                color="primary"
              />
              </Grid>
              <Grid item className={classes.inputContainer}>
              <TextField
                required={true}
                type="email"
                id="filled-basic" label="Email" variant="filled"
                value={email}
                onChange={onEmailChange}
                className={classes.formInput}
              />
              </Grid>
              </Grid>
              <Grid container direction="row"  className={classes.contactsFormContainer} >
                <Grid item className={classes.inputContainer}>
              <TextField
                required={true}
                type="text"
                id="filled-basic" label="Subject" variant="filled"
                value={subject}
                onChange={onSubjectChange}
                className={classes.formInput}
              />
              </Grid>
              <Grid item className={classes.inputContainer}>
              <TextField
                required={true}
                
                label="Message"
                id="filled-basic"
                 variant="filled"
                value={msg}
                onChange={onMsgChange}
                className={classes.formInput}
              />
              </Grid>
              </Grid>
              <div className={classes.button}>
              <Button
              type="submit"
        variant="contained"
        color="primary"
        
        endIcon={<Icon>send</Icon>}
      >
        Send
      </Button>
      </div>
          </form>
          
            </Grid>
        </Grid>
      </Grid>
      <DirectionSnackbar handleCloseSnack={handleCloseSnack} openSnack={openSnack}   />
    </Box>
  );
}
