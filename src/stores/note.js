import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';

import { createStore, combineReducers, applyMiddleware } from 'redux'; // 3 основных функции в redux (создание
// хранилища, комбинирование редусера, наложение middleware(некий конвеер обработки входящего запроса в хранилищеб
// когда приходит запрос в хранилизе с action и payload То можно дополнительную функциональность в виде middleware
// туда напихать)
import { notesReducers } from '../reducers/note';

const middleWare = applyMiddleware(promise(), thunk, logger());

const reducer = combineReducers({   // ф-я принимает на вход объект где описывается местоположение этого reducerа,
// точнее описывается тот редусер которые будет отвечать за обработку какойто нашей части state,работает с кусочком
// state
   notes: notesReducers  // говорим что будет вот тут такой то редусер, просто их объявление, декларирование
});
const store = createStore(reducer, middleWare); //создаётся хранилище. все изменения в хранилище выполняюстя с
// помощью reducer

export default store;