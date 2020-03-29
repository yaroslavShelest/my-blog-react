const SOME_ACTION_TYPE = 'SOME_ACTION_TYPE';

const initialState = {
      skills : [
          { title: 'HTML', value: 40 },
          { title: 'CSS', value: 60 },
          { title: 'JS', value: 70 },
          { title: 'React', value: 50 },
          { title: 'Redux', value: 80 },
          { title: 'HTML', value: 40 },
          { title: 'CSS', value: 60 },
          { title: 'JS', value: 70 },
          { title: 'React', value: 50 },
          { title: 'Redux', value: 80 },
          { title: 'HTML', value: 40 },
          { title: 'CSS', value: 60 },
          { title: 'JS', value: 70 },
          { title: 'React', value: 50 },
          { title: 'Redux', value: 80 },
        ],
        aboutMeFew: "I'm Front End developer, wellcome to my App",
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