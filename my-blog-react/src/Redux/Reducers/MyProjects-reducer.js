import landing from './../../Assets/myFotos/Landing.png';
import socialNetwork from './../../Assets/myFotos/socialNetwork.jpg';
import telegramBot from './../../Assets/myFotos/telegramBot.png';
import solarSys from './../../Assets/myFotos/solarSys.png';
import Three from './../../Assets/myFotos/3d.png';

const SOME_ACTION_TYPE = 'SOME_ACTION_TYPE';


const initialState = {
      projects : [
          { name: 'Telegram bot', description: "A very cool bot with express and ejs", githubUrl: "https://github.com/WannaBeDream/facebookMessenger-Bot", image: telegramBot},
          { name: 'SocialNetwork', description: "Client-side app includes React,Redux,Auth,redux-thunk etc.", githubUrl: "https://github.com/WannaBeDream/SocialNetwork-React", image: socialNetwork},
          { name: 'Book store', description: "Server-side app includes Nest.js, typescript, JWT etc.", githubUrl: "https://github.com/WannaBeDream/BooksStore-Nest-React", image: socialNetwork },
          { name: 'LandingPage', description: "Page of shop includes features of scss, grids,atomic arhetucture", githubUrl: "https://github.com/WannaBeDream/-Final-work-at-school", image: landing },
          { name: '3D model of solar system', description: "This model based in React and Three.js", githubUrl: "https://github.com/WannaBeDream/React-Three-SolarSystem", image: solarSys },
          { name: '3D models', description: "Clean Three.JS", githubUrl: "https://github.com/WannaBeDream", image: Three },
        ],
};


const myProjectsReducer = (state = initialState, action) => {
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


export default myProjectsReducer;