import TodoList from '../components/todoList';
import * as actions from '../actions/note';

import { connect } from 'react-redux'; // не нужно импортить store ? //все вещи  возвращённые в результате ф-ии connect опрокидываюстя в props нашего компонента. notes запросили из reduce и мы можем выводить его <TodoList notes={this.props.notes}> вместо state
import {autobind} from 'core-decorators';
const cities = require('../cities.json');

@connect( store => {
   return store.notes;
})

@autobind()
export default class TodoPage extends React.Component {

   constructor(props) {
      super(props);
   }

   add(val) {
      let toDispatch = actions.add(val);
      this.props.dispatch(toDispatch);
   }

   remove(id) {
      let toDispatch = actions.remove(id);
      this.props.dispatch(toDispatch);
   }

   complete(id) {
      let toDispatch = actions.complete(id);
      this.props.dispatch(toDispatch);
   }

   render() {
      /*let cities = this.state.cities;*/

      return (
          <div className="todo-list">
             <h2>Заметки</h2>

             <TodoList notes={this.props.notes} add={this.add} complete={this.complete} remove={this.remove} />

            {/* <div className="city-block">
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
             </div>*/}
          </div>
      )};
}

