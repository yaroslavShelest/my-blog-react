const SOME_ACTION_TYPE = 'SOME_ACTION_TYPE';

const initialState = {
     sections: [
          { title: 'Main', url: '/main' },
          { title: 'Music', url: '/music' },
          { title: '3Dsys.', url: '/solarsys' },
          { title: 'Library', url: '/library' },
          // { title: 'Posts', url: '/posts' },
          { title: 'Contacts', url: '/contacts' },
     ],
     animatedText: ["Alex application", 
     "Alex radio",
      "Alex solar system",
     "Alex usefull library"
     ],

};


const menuSectionReducer = (state = initialState, action) => {
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


export default menuSectionReducer;