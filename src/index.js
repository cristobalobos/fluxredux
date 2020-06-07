import C from "./constants";
import { errors } from "./store/reducers";

const state = ["user not authorized", "server feed not found"];

// action send object
const action_add = {
  type: C.ADD_ERROR,
  payload: "cannot connect to server",
};

// action send object
const action = {
  type: C.CLEAR_ERROR,
  payload: 0,
};

// use reductor for change state
// value state is NOT equal than action
const nextState = errors(state, action);

console.log(`

    initial state: ${state}
    action: ${JSON.stringify(action)}
    new state: ${JSON.stringify(nextState)}

`);

/* 
   ***********
   ADD_ERROR
   *********** 
   initial state: user not authorized,server feed not found
   action: {"type":"ADD_ERROR","payload":"cannot connect to server"}
   new state: ["user not authorized","server feed not found","cannot connect to server"]

   ***********
   CLEAR_ERROR
   *********** 
   initial state: user not authorized,server feed not found
   action: {"type":"CLEAR_ERROR","payload":0}
   new state: ["server feed not found"]

*/
