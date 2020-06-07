import C from "./constants";
import { skiDay } from "./store/reducers";

const state = null;

// action send object
const action = {
  type: C.ADD_DAY,
  payload: {
    resort: "Heavenly",
    date: "2016-12-16",
    powder: true,
    backcountry: false,
  },
};

// use reductor for change state
// value state is NOT equal than action
const nextState = skiDay(state, action);

console.log(`

    initial state: ${state}
    action: ${JSON.stringify(action)}
    new state: ${JSON.stringify(nextState)}

`);

/*
    initial state: null
    action: {"type":"ADD_DAY","payload":{"resort":"Heavenly","date":"2016-12-16","powder":true,"backcountry":false}}
    new state: {"resort":"Heavenly","date":"2016-12-16","powder":true,"backcountry":false}
*/
