import React from 'react';  
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

import HeaderContainer from './Containers/HeaderContainer';
import MySkillsContainer from './Containers/MySkillsContainer';
import FooterContainer from './Containers/FooterContainer';
import MainPageContainer from './Containers/MainPageContainer';
import { Route, Switch, Redirect } from 'react-router-dom';







const sections = [
  { title: 'About me', url: '#' },
  { title: 'Articles', url: '#' },
  { title: 'Usefull links', url: '#' },
  { title: 'Feed back', url: '#' },
  { title: 'Just take a rest', url: '#' },
];



const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
  linkText: 'Continue reading…',
};


function App() {

  const classes = useStyles();


  return (

    <React.Fragment>
    <CssBaseline />
    <Container maxWidth="lg">
              <HeaderContainer title="Blog" sections={sections} />

      <main>

        

      <Switch>

        <Route exact path='/' render={ () => <Redirect to={"/profile"} /> } />
        <Route path='/skills' render={() => <MySkillsContainer post={mainFeaturedPost} />} />
        <Route exact path='/main' render={ () => <MainPageContainer /> } />
        <Route path='/facebook' render={() => <div>Facebook</div>} />
            <Route path='/login' render={() => <div>login</div>} />
          <Route path='*' render={() => <div>404 NOT FOUND</div>} />
    </Switch>  














        


       
      </main>

    </Container>
    <FooterContainer title="Footer" description="Something here to give the footer a purpose!" />
  </React.Fragment>
  );
}

export default App;
