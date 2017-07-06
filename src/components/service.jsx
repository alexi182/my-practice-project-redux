import ServiceItem from './serviceItem';
import {autobind} from 'core-decorators';
import * as actions from '../actions/service';
import { connect } from 'react-redux';

@connect( store => {
   return store.service;
})

@autobind()
export default class Service extends React.Component {

   constructor(props) {
      super(props);
   }

   componentWillMount() {
      let action = actions.init();
      this.props.dispatch(action);
   }

   select(name) {
      let toDispatch = actions.select(name);
      this.props.dispatch(toDispatch);
   }

   getChildContext() {
      return {
         select: this.select
      }
   }

   static childContextTypes = {
      select: React.PropTypes.func
   };

   get total() {
      return this.props.services.filter(s => s.selected).reduce((prev, current) => prev + current.price, 0);
   }

   render() {
      return (
          <div>
             {/*<TestComp message="Привет" />*/}
             <h2>Услуги</h2>
             <table className="table service-table">
                <tbody>
                {
                   this.props.services.map((s, index) =>
                       <ServiceItem {...s} key={index} />
                   )}
                <tr className="row">
                   <td>Итого</td>
                   <td>{this.total} p.</td>
                </tr>
                </tbody>
             </table>
          </div>
      )};
}