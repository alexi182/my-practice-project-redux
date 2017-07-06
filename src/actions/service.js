import * as constants from '../constants/service';
const servicesData = require('../service.json');

function select(name) {
   return {
      type: constants.SELECT,
      payload: name
   };
}

function init() {
   let data = {
      type: constants.INIT,
      payload: servicesData
   };
   return data;
}

export { select, init }
