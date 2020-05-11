import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import preloader from './../../Assets/preloader.gif';

const useStyles = makeStyles({
    preloader: {
  display: "block",
  position: "absolute",
  top: "50%",
  left: "50%",
  marginLeft:"-50px",
  marginTop:"-50px",
  borderRadius:"20px",
    }
  });
  
let Preloader = () => {
    let styles = useStyles();
  return (
    <div>
      <img src={preloader} className={styles.preloader} alt="404" />
    </div>
  );
};


export default Preloader;