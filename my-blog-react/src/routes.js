import React from 'react';
import PostContainer from './Containers/PostContainer';
import MainPageContainer from './Containers/MainPageContainer';
import UsefullLinksContainer from './Containers/UsefullLinksContainer';
import { Route, Switch, Redirect } from 'react-router-dom';
import NotFoundPage from './Components/Common/404Page';
import AudioPlayer from './Components/Common/AudioPlayer';



const mainFeaturedPost = {        // its should delete soon or will delivered in BLL
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
            <Route path='/posts' render={() => <PostContainer post={mainFeaturedPost} />} />
            <Route exact path='/main' render={() => <MainPageContainer />} />
            <Route path='/usefull' render={() => <UsefullLinksContainer />} />
            <Route path='/feedback' render={() => <div>FeeedBackContainer will be here soon</div>} />
            <Route path='/rest' render={() => <AudioPlayer />} />
            <Route path='/contacts' render={() => <div>ContactsContainer will be here soon</div>} />
            <Route path='*' render={() => <NotFoundPage/>} />
        </Switch>


    );
}

export default Routes;
