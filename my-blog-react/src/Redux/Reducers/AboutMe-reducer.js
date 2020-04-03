const SOME_ACTION_TYPE = 'SOME_ACTION_TYPE';

const initialState = {
      skills : [
          { title: 'HTML, HTML5', value: 75, description: "I know html at a high level, developed a couple of sites. I used several approaches " },
          { title: 'CSS, CSS3, SASS, Boostrap, Grid, Flexbox, adaptive, BEM',value: 80, description: "Layout responsive sites and some applications on the BEM methodology on the latest standards. Used Material ui, Boostrap" },
          { title: 'ES5, ES6, ES7, Nest.js, Typescript, React.js, Redux, mongoose, Bcrypt.js',value: 70, description: "I wrote a server layer for a bookstore with JWT authorization along with REST. After that I wrote a social network on React / Redux and several SPA" },
          { title:'Git, Jira',value: 75, description: "Set up a repository for team work" },
          { title:'Languages',value: 55, description: "Eanglish pre-intermidiate" },
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