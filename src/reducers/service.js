import * as constants from '../constants/service';

export default function serviceReducers(state = { services:[] }, action) {

   switch (action.type) {

      case constants.INIT: {
         state = { ...state, services:action.payload, _services:action.payload }
         break;
      }

      case constants.SELECT: {

         let servicesSelected = state._services.slice(0);
         let s = servicesSelected.find(srv => srv.name == action.payload);

         if (!s) return;
         s.selected = !s.selected;

       /*  this.setState({

            total: this.total(servicesSelected)
         });*/

         state = { ...state, services: servicesSelected };
         break;
      }
   }

   return state;
}

