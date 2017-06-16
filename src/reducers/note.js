import * as constants from '../constants/note';
/*import axios from 'axios';*/


export default function notesReducers(state = { notes:[] }, action) {  // редусер принимает 2 параметра - и на выходе новый state. Основная задача с помощью имутабельности получить новый state. имутабельность - неизменность - однажды созданный объект,число итд-невыжно что, при изменении должен порождать новый экземпляр. т.е если у меня есть объект со свойством name, я этот name меняю и должен создаваться новый объект с новым изменённым свойством.т.е. любое действие которое я выполняю должно порождать новый объект состояния.!(Правило Redux) тоже самое что slice для массива.  В скобочках задаётся начальное состоняие, здесь определяется зона ответственности редюсера. Я говорю - состояние которым будет заниматься наш редюсер это пустой массив. Вот это и есть редюсер с описанными зонами ответсвенности.

   switch (action.type) {
      case constants.ADD:
         state = { ...state };  ///...state - берём старый state(который в начале задане)
         break;

      case constants.COMPLETE:
         state = { ...state };  ///...state - берём старый state(который в начале задане)
         break;

      case constants.REMOVE:
         state = { ...state };  ///...state - берём старый state(который в начале задане)
         break;
   }

   return state;  // на выходе всегда возвращаем тот же самый state.
}