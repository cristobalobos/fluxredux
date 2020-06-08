import C from "./constants";
import { allSkiDays } from "./store/reducers";

const state = [
  {
    resort: "Kirkwood",
    date: "2020-12-15",
    powder: true,
    backcountry: false,
  },
  {
    resort: "Boreal",
    date: "2020-12-16",
    powder: false,
    backcountry: false,
  },
];

// ACTION type: C.ADD_DAY,
/*const action = {
  type: C.ADD_DAY,
  payload: {
    resort: "Boreal",
    date: "2020-12-16",
    powder: false,
    backcountry: false,
  },
};*/

// ACTION type: C.ADD_DAY,
const action = {
  type: C.REMOVE_DAY,
  payload: {
    date: "2020-12-16",
  },
};

const nextState = allSkiDays(state, action);

console.log(`
    initial state: ${JSON.stringify(state)}
    action: ${JSON.stringify(action)}
    new state: ${JSON.stringify(nextState)}
`);

/* 
   ***********
   ADD_DAY
   *********** 
    initial state: [{"resort":"Kirkwood","date":"2020-12-15","powder":true,"backcountry":false}]
    action: {"type":"ADD_DAY","payload":{"resort":"Boreal","date":"2020-12-16","powder":false,"backcountry":false}}
    new state: [{"resort":"Kirkwood","date":"2020-12-15","powder":true,"backcountry":false},{"resort":"Boreal","date":"2020-12-16","powder":false,"backcountry":false}]

   ***********
   REMOVE_DAY
   *********** 
    initial state: [{"resort":"Kirkwood","date":"2020-12-15","powder":true,"backcountry":false},{"resort":"Boreal","date":"2020-12-16","powder":false,"backcountry":false}]
    action: {"type":"REMOVE_DAY","payload":{"date":"2020-12-16"}}
    new state: [{"resort":"Kirkwood","date":"2020-12-15","powder":true,"backcountry":false}]

*/
