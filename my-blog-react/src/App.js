import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Routes from './routes';
import { lighten, makeStyles, withStyles } from "@material-ui/core/styles";
import HeaderContainer from './Containers/HeaderContainer';
import FooterContainer from './Containers/FooterContainer';



function App() {


  return (

    <React.Fragment>
      <CssBaseline />
      <Box className={"mainBackground"}>
      <Container maxWidth="lg"  >
        <HeaderContainer/>

        <Box my={2} >
        <main>
          <Routes />
        </main>

        </Box>
      </Container>
      
      <FooterContainer title="Thanks for wathcing" description="Something here to give the footer a purpose!" />
      </Box>
    </React.Fragment>
  );
}

export default App;
