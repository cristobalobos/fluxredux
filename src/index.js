import C from "./constants";
import appReducer from "./store/reducers";
import initialState from "./initialState.json";

let state = initialState;

console.log(`
Initial State
=======================
goal: ${state.goal}
resorts: ${JSON.stringify(state.allSkiDays)}
fetching: ${state.resortNames.fetching}
suggestions: ${state.resortNames.suggestions}
`);

state = appReducer(state, {
  type: C.SET_GOAL,
  payload: 2,
});

state = appReducer(state, {
  type: C.ADD_DAY,
  payload: {
    resort: "Mt Shasta",
    date: "2016-10-28",
    powder: false,
    backcountry: true,
  },
});

state = appReducer(state, {
  type: C.CHANGE_SUGGESTIONS,
  payload: ["Mt Tallac", "Mt Hood", "Mt Shasta"],
});

console.log(`
Next State
=======================
goal: ${state.goal}
resorts: ${JSON.stringify(state.allSkiDays)}
fetching: ${state.resortNames.fetching}
suggestions: ${state.resortNames.suggestions}
`);

/*
Initial State
=======================
goal: 10
resorts: [{"resort":"Kirkwood","date":"2016-12-7","powder":true,"backcountry":false},{"resort":"Squaw Valley","date":"2016-12-8","powder":false,"backcountry":false},{"resort":"Mt Tallac","date":"2016-12-9","powder":false,"backcountry":true}]
fetching: false
suggestions: Squaw Valley,Snowbird,Stowe,Steamboat


Next State
=======================
goal: 2
resorts: [{"resort":"Kirkwood","date":"2016-12-7","powder":true,"backcountry":false},{"resort":"Squaw Valley","date":"2016-12-8","powder":false,"backcountry":false},{"resort":"Mt Tallac","date":"2016-12-9","powder":false,"backcountry":true},{"resort":"Mt Shasta","date":"2016-10-28","powder":false,"backcountry":true}]
fetching: false
suggestions: Mt Tallac,Mt Hood,Mt Shasta
*/
