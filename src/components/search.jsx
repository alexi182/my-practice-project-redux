import {autobind} from 'core-decorators';
import * as actions from '../actions/data';
import { connect } from 'react-redux';

@connect( store => {
   return store.data;
})

@autobind()
export default class Search extends React.Component {

   constructor(props) {
      super(props);
   }

   componentWillMount() {
      let action = actions.init();
      this.props.dispatch(action);
   }

   search(e) {
      let val = e.target.value;
      let toDispatch = actions.search(val); //ссылка на объект, созданный в action.

      this.props.dispatch(toDispatch);
   }

   render() {
      return (
          <div>
             <h2>Поиск</h2>
             <input type="text" className="form-control" onChange={this.search} />

             <table className="table">
                <thead>
                <tr className="row">
                   <th>Имя</th>
                   <th>Фамилия</th>
                   <th>Возраст</th>
                </tr>
                </thead>
                <tbody>
                {
                   this.props.people.map((searchItem, index) =>
                       <tr className="row" key={index}>
                          <td>{searchItem.name}</td>
                          <td>{searchItem.surname}</td>
                          <td>{searchItem.age}</td>
                       </tr>
                   )}
                </tbody>
             </table>
          </div>
      )};
}