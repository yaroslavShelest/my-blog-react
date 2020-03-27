import landing from './../../assets/myFotos/Landing.png';
import socialNetwork from './../../assets/myFotos/socialNetwork.jpg';
import telegramBot from './../../assets/myFotos/telegramBot.png';

const SOME_ACTION_TYPE = 'SOME_ACTION_TYPE';


const initialState = {
      projects : [
          { name: 'Telegram bot', description: "a very cool bot", githubUrl: "", image: telegramBot},
          { name: 'SocialNetwork', description: "a very cool bot", githubUrl: "", image: socialNetwork},
          { name: 'Book store', description: "a very cool bot", githubUrl: "", image: socialNetwork },
          { name: 'LandingPage', description: "a very cool bot", githubUrl: "", image: landing },
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