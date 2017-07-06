import * as constants from '../constants/data';

export default function dataReducers(state = { people:[] }, action) {

   switch (action.type) {

      case constants.INIT: {
         state = { ...state, people:action.payload, _people:action.payload }
         break;
      }

      case constants.SEARCH: {

         let val = action.payload.toLowerCase();
         let people;

         if (val.length > 0) {
            people = state._people.filter((p) =>
            p.name.toLowerCase().indexOf(val) !== -1 ||
            p.surname.toLowerCase().indexOf(val) !== -1 ||
            p.age.toString().toLowerCase().indexOf(val) !== -1 )
         } else {
            people = state._people;
         }

         state = { ...state, people };  ///...state - берём старый state(который в начале задане)
         break;
      }
   }
   return state;
}

