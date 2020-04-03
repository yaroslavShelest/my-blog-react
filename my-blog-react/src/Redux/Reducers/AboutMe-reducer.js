import jsImg from './../../Assets/logo/MyRaiting/js.png';
import cssImg from './../../Assets/logo/MyRaiting/css.png';
import htmlImg from './../../Assets/logo/MyRaiting/html.png';
import nodeImg from './../../Assets/logo/MyRaiting/node.png';
import reactImg from './../../Assets/logo/MyRaiting/react.png';
import sagaImg from './../../Assets/logo/MyRaiting/saga.png';
import typeScriptImg from './../../Assets/logo/MyRaiting/typeScipt.png';
import nestImg from './../../Assets/logo/MyRaiting/nest.png';
import mongoDbImg from './../../Assets/logo/MyRaiting/mongodb.png';
import materialImg from './../../Assets/logo/MyRaiting/material.png';
import gitHubImg from './../../Assets/logo/MyRaiting/github.png';
import dartImg from './../../Assets/logo/MyRaiting/dart.png';
import earthImg from './../../Assets/logo/MyRaiting/earth.png';


const SOME_ACTION_TYPE = 'SOME_ACTION_TYPE';


const initialState = {
      skills : [
          { title: 'HTML, HTML5', mainLogo: htmlImg,  description: "I know html at a high level, developed a couple of sites. I used several approaches " },
          { title: 'CSS, CSS3, SASS, Boostrap, Grid, Flexbox, adaptive, BEM',mainLogo: cssImg, description: "Layout responsive sites and some applications on the BEM methodology on the latest standards. Used Material ui, Boostrap" },
          { title: 'ES5, ES6, ES7, Nest.js, Typescript, React.js, Redux, mongoose, Bcrypt.js',mainLogo: jsImg, description: "I wrote a server layer for a bookstore with JWT authorization along with REST. After that I wrote a social network on React / Redux and several SPA" },
          { title: 'Dart, Flutter',mainLogo: dartImg, description: "I'm keen on this lang" },
          { title:'Git, Jira',mainLogo: gitHubImg, description: "Set up a repository for team work" },
          { title:'Languages',mainLogo: earthImg, description: "Eanglish pre-intermidiate" },
        ],
        aboutMeFew: "wellcome to starblog",
        aboutMeDescription: "I'm enjoing to develop on 1C and keen on php, I hope wordpress will save our world and opencart didn't try to complain about it state of assotiation. I have 3 yeas and a long dick to fucking sales managers",
        hasFindWork: true,
};


const aboutMeReducer = (state = initialState, action) => {
     switch (action.type) {
          case SOME_ACTION_TYPE:
               return {
                    ...state,
               }
          default:
               return state;
     }
};

export const actionCreatorForSomeChanges = () => ({ type: SOME_ACTION_TYPE });

export const someLogicThunk = () => (dispatch) => {

};


export default aboutMeReducer;