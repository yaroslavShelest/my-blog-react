import React from 'react';
import MySkillsContainer from './Containers/MySkillsContainer';
import MainPageContainer from './Containers/MainPageContainer';
import { Route, Switch, Redirect } from 'react-router-dom';



const mainFeaturedPost = {
    title: 'Title of a longer featured blog post',
    description:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: 'https://source.unsplash.com/random',
    imgText: 'main image description',
    linkText: 'Continue reading…',
  };
  



function Routes() {

    return (
        <Switch>
            <Route exact path='/' render={() => <Redirect to={"/main"} />} />
            <Route path='/skills' render={() => <MySkillsContainer post={mainFeaturedPost} />} />
            <Route exact path='/main' render={() => <MainPageContainer />} />
            <Route path='/facebook' render={() => <div>Facebook</div>} />
            <Route path='/login' render={() => <div>login</div>} />
            <Route path='*' render={() => <div>404 NOT FOUND</div>} />
        </Switch>


    );
}

export default Routes;
