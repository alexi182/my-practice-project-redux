import TodoListItem from './todoListItem';
import TodoListPanel from './todoListPanel';
import {autobind} from "core-decorators";

@autobind()
export default class TodoList extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         action: (note) => true,
         type: 'all'
      }
   }

   add(e) {
      let val = e.target.value;
      if (e.keyCode == 13 && val) {
         this.props.add(val);
         e.target.value = '';
      }
   }

   complete(id) {
      this.props.complete(id);
   }

   remove(id) {
      this.props.remove(id);
   }

   filter(type, action) {
    this.setState({
       action, type
    })
   }

   render() {
      let progress = this.props.notes.filter((m) => !m.completed);

      let notes = this.props.notes.filter(this.state.action).map((note, index) => <TodoListItem {...note} key={index} remove={this.remove} complete={this.complete} />
      );

      return (
          <div className="todo-block">
             <div className="todo-block__input">
                <input type="text" className="form-control" placeholder="Введите" onKeyUp={this.add} />
             </div>

             <div className="todo-block__list">
               { notes }
             </div>

             <TodoListPanel count={progress.length} filter={this.filter} active={this.state.type} />

          </div>
      )
   }
}