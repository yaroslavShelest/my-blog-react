import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  backOfImg: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 400,
    maxWidth: 400,
    overflow: 'hidden',
    display: 'block',
    width: '100%',
  },
}));

export default function TextMobileStepper({myTeachers}) {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [isStopMoving, setIsStopMoving] = React.useState(true);
  const maxSteps = myTeachers.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setIsStopMoving(true);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1); 
    setIsStopMoving(true);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const continueToPlay = () => {
    setIsStopMoving(false);
  };

  return (
    <div className={classes.root} onMouseOut={continueToPlay}>
      <Paper square elevation={0} className={classes.backOfImg}  >
     
      
        <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
       
        >
        {myTeachers.map((step, index) => (
          <div key={step.name}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.srcImg} alt={step.name} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      
      </Paper>
      <Paper square elevation={0} className={classes.header}>
          <Grid container direction="column">
                <Typography>{myTeachers[activeStep].name}</Typography>
                <Typography>{myTeachers[activeStep].position}</Typography>
          </Grid>
      </Paper>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </div>
  );
}