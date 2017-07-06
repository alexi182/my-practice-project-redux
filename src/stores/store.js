import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import notesReducers from '../reducers/note';
import dataReducers from '../reducers/data';
import serviceReducers from '../reducers/service';

const middleWare = applyMiddleware(promise(), thunk, logger);

const reducer = combineReducers({
   notes: notesReducers,
   data: dataReducers,
   service: serviceReducers
});

const store = createStore(reducer, middleWare);

export default store;