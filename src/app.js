import React from 'react';
import {render} from 'react-dom';
import Home from './components/pages/home/home';
import PhotoView from './components/pages/photoView/photoView';
// import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import { BrowserRouter as Router, Route, Link, Switch ,HashRouter} from 'react-router-dom'

import thunk from 'redux-thunk'

import {Provider} from 'react-redux';
import {createLogger} from 'redux-logger'
import {createStore,applyMiddleware} from 'redux';
import reducers from './reducers/index';
import {homeGetImages} from './actions/homeAction';




const middleware=applyMiddleware(thunk,createLogger());
const store = createStore(reducers,middleware);
 
let app = document.getElementById('app');

const Routes = (
  <Provider store={store}>
     <HashRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/photoView/:id' component={PhotoView}/>
        </Switch>
        </HashRouter>
 </Provider>
)

render(Routes,app);