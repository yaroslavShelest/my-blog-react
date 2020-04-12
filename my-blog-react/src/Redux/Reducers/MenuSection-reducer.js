const SOME_ACTION_TYPE = 'SOME_ACTION_TYPE';

const initialState = {
     sections: [
          { title: 'Main', url: '/main' },
          { title: 'Posts', url: '/posts' },
          { title: 'Usefull links', url: '/usefull' },
          { title: 'Feed back', url: '/feedback' },
          { title: 'Just take a rest', url: '/rest' },
          { title: 'Contacts', url: '/contacts' },
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