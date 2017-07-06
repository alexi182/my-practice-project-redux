import * as constants from '../constants/note';

export default function notesReducers(state = { notes:[] }, action) {

   switch (action.type) {

      case constants.ADD: {

         let notes = state.notes.slice();
         notes.push({
            text: action.payload,
            completed: false,
            id: state.notes.length + 1
         });

         state = { ...state, notes };
         break;
      }

      case constants.COMPLETE: {

         let notes = state.notes.slice();
         let note = notes.find((n) => n.id == action.payload);
         if (note) {
            note.completed = !note.completed;
         }

         state = { ...state, notes };
         break;
      }

      case constants.REMOVE: {

         let notes = state.notes.slice();

         let noteIndex = state.notes.findIndex((item) => item.id == action.payload);
         if (noteIndex !== -1) {

            notes.splice(noteIndex, 1);
         }

         state = { ...state, notes };
         break;
      }
   }

   return state;
}

