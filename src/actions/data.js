import * as constants from '../constants/data';
const searchData = require('../data2.json');

function search(val) {
   let action = {
      type: constants.SEARCH,
      payload: val
   };
   return action;
}

function init() {
   let data = {
      type: constants.INIT,
      payload: searchData
   };
   return data;
}

export { search, init }
