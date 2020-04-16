import stations from '../../data/stations';


const SOME_ACTION_TYPE = 'SOME_ACTION_TYPE';


const initialState = {
      stations: stations
};


const radioStationsReducer = (state = initialState, action) => {
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


export default radioStationsReducer;