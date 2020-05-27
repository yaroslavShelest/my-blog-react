import roma from './../../Assets/myTeachers/Roma.jpg';
import oleksander from './../../Assets/myTeachers/Oleksander.jpg';
import dima from './../../Assets/myTeachers/Dima.jpg';

import hillel from './../../Assets/logo/schoolsLogo/hillel.png';
import itka from './../../Assets/logo/schoolsLogo/itkamasutra.jpeg';
const SOME_ACTION_TYPE = 'SOME_ACTION_TYPE';

const initialState = {  // TODO
      myContactsLinks: [
           {name: "GitHub", src:"github.com"},
           {name: "Linkedin", src:"linkedin.com"},
           {name: "gmail", src:"github.com"},
           {name: "telegram", src:"blabla"},
          ],
      myTeachers: [
           {name:"Roman Scripchenko", position: 'Front-end dev. (Yalantis)', srcImg: roma},
           {name:"Sasha Gribabanov", position: 'Fullstack dev. (DataArt)', srcImg:  oleksander},
           {name:"Dima Kuzuberdin", position: 'Fullstack dev. (It-kamasutra)', srcImg: dima},
      ],
      logos: [
           {srcImg: hillel},
           {srcImg: itka},
      ]
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