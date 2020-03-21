const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

const initialState = {
     initialized: false
 };


const appReducer = (state = initialState, action) => {
     switch (action.type) {
          case INITIALIZED_SUCCESS:
               return {
                    ...state,
                    initialized: true
               }
          default:
               return state;
     }
};

export const actionsInitializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializeAppThunk = () => (dispatch) => {
     
};


export default appReducer;