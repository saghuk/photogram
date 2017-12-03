import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter, Route, Link, Switch ,HashRouter} from 'react-router-dom'

import thunk from 'redux-thunk'

import {Provider} from 'react-redux';
import {createLogger} from 'redux-logger'
import {createStore,applyMiddleware} from 'redux';
import reducers from './reducers/index';
import {homeGetImages} from './actions/homeAction';
// import Home from './components/pages/home/home';
import Menu from './main';

import {routes} from './routes';
const middleware=applyMiddleware(thunk,createLogger());
const initialState = window.INITIAL_STATE;
const store = createStore(reducers,initialState,middleware);
console.log(store);
let app = document.getElementById('app');

const Routes = (
  <Provider store={store}>
    <BrowserRouter>
      <Menu/>
    </BrowserRouter>
   
 </Provider>
)

render(Routes,app);