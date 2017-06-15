import TodoList from '../components/todoList';
import {autobind} from 'core-decorators';

const cities = require('../cities.json');

@autobind()
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

   sort() {
      let cities = this.state.cities;
      cities.sort();

      this.setState({
         cities
      })
   }

   /*filter(action) {
    let notes = this.state.notes.filter(action);

    this.setState ({
    notes: notes
    })
    }*/

   render() {
      let cities = this.state.cities;

      return (
          <div className="todo-list">
             <h2>Заметки</h2>

             <TodoList notes={this.state.notes} add={this.add} complete={this.complete} remove={this.remove} />

             <div className="city-block">
                <table>
                   <thead>
                   <tr>
                      <th onClick={this.sort}>Индекс</th>
                      <th onClick={this.sort}>Город</th>
                   </tr>
                   </thead>

                   {cities.map((item, index) =>
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

