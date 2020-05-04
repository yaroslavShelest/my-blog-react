import React from "react";
import { makeStyles} from "@material-ui/core/styles";
import ReactTyped from "react-typed";



const useStyles = makeStyles(theme => ({
  animLogo: {
   color: "white",
   height: "50px",
   fontFamily: "Roboto",  // подключить убунту шрифт
   textTransform: "Uppercase",
   fontWeight: "bold",
  }
}));


const AnimatedLogo = ({animatedText}) => {
    
  const classes = useStyles();
  return (
    <React.Fragment>
    <ReactTyped
    loop
    typeSpeed={150}
    backSpeed={75}
    strings={animatedText}
    smartBackspace
    shuffle={false}
    backDelay={1}
    fadeOut={false}
    fadeOutDelay={100}
    loopCount={0}
    showCursor
    cursorChar="|"
    className={classes.animLogo}
        />
    </React.Fragment>
  );
}


export default AnimatedLogo;

