import TodoList from '../components/todoList';
import {autobind} from 'core-decorators';
import * as action from '../action'

import { connect } from 'react-redux'; // не нужно импортить store ? //все вещи  возвращённые в результате ф-ии connect опрокидываюстя в props нашего компонента. notes запросили из reduce

const cities = require('../cities.json');

@autobind()
@connect( store => {
   return store.notes;
})
export default class TodoPage extends React.Component {

   constructor(props) {
      super(props);

      this.state = {
         notes: [{
            text: 'Text',
            completed: false,
            id: 0
         }],
         cities: cities
      };
   }

   //когда наш компонент загружен, мы должны запустить процедуру получения данных

   componentWillMount() {
      let toDispatch = actions.add();

      //т.к. мы используем Redux - появляется с помощью воздействия что осуществляет Provider дополнительная функциональность в нашем самом компоненте,фу-я диспечеризации dispatch в самом компоненте и мы её вызываем.

      this.props.dispatch(toDispatch);
   }

   add(val) {
      let notes = this.state.notes.slice();
      notes.push({
         text: val,
         completed: false,
         id: this.state.notes.length +1
      });

      this.setState ({
         notes: notes
      })
   }

   complete(id) {
      let notes = this.state.notes.slice();
      let note = notes.find((n) => n.id == id);
      if (note) {
         note.completed = !note.completed;

         this.setState ({
            notes: notes
         })
      }
   }

   remove(id) {
      let noteIndex = this.state.notes.findIndex((item) => item.id == id);
      if (noteIndex !== -1) {
         let notes = this.state.notes.slice();
         notes.splice(noteIndex, 1);

         this.setState ({
            notes: notes
         })
      }
   }

   // sort() {
   //    let cities = this.state.cities.map((item,index) =>
   //       item.city.sort());
   //
   //    this.setState({
   //       cities
   //    })
   // }

/*   search(e) {debugger;

      let inputData = e.target.value.toLowerCase();
      let filterData;

      if (inputData.lenght > 0) {
          filterData = cities.filter((res) => res.city.toLowerCase().indexOf(inputData) !== -1)
      } else {
          filterData = cities;
      }

      this.setState({
         cities: filterData
      })
   }*/

   /*filter(action) {
    let notes = this.state.notes.filter(action);

    this.setState ({
    notes: notes
    })
    }*/

   render() {
      /*let cities = this.state.cities;*/

      return (
          <div className="todo-list">
             <h2>Заметки</h2>

             <TodoList notes={this.props.notes} add={this.add} complete={this.complete} remove={this.remove} />

             <div className="city-block">
                <input type="text" onChange={this.search} />
                <table>
                   <thead>
                   <tr>
                      <th onClick={this.sort}>Индекс</th>
                      <th onClick={this.sort}>Город</th>
                   </tr>
                   </thead>

                   {this.state.cities.map((item, index) =>
                       <tbody key={index}>
                       <tr>
                          <td>{item.id}</td>
                          <td>{item.city}</td>
                       </tr>
                       </tbody>
                   )}
                </table>
             </div>
          </div>
      )};
}

