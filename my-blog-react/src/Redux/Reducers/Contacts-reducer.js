import roma from './../../Assets/myTeachers/Roma.jpg';
import oleksander from './../../Assets/myTeachers/Oleksander.jpg';
import dima from './../../Assets/myTeachers/Dima.jpg';

import telegram from './../../Assets/logo/socialLogos/telegram.png';
import gmail from './../../Assets/logo/socialLogos/gmail.png';
import github from './../../Assets/logo/socialLogos/github.png';
import linkedin from './../../Assets/logo/socialLogos/linkedin.png';

const SOME_ACTION_TYPE = 'SOME_ACTION_TYPE';

const initialState = {  // TODO
      myContactsLinks: [
           {name: "github", src:"https://github.com/WannaBeDream"},
           {name: "linkedin", src:"https://www.linkedin.com/in/alex-bobyr-629630178/"},
           {name: "gmail", src:"mailto:alexxldub@gmail.com"},
           {name: "telegram", src:"https://t.me/NotQwerk"},
          ],
      myTeachers: [
           {name:"Roman Scripchenko", position: 'Front-end dev. (Yalantis)', srcImg: roma},
           {name:"Sasha Gribabanov", position: 'Fullstack dev. (DataArt)', srcImg:  oleksander},
           {name:"Dima Kuzuberdin", position: 'Fullstack dev. (It-kamasutra)', srcImg: dima},
      ],
      
};


const ContactsReducer = (state = initialState, action) => {
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


export default ContactsReducer;