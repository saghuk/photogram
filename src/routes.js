/** NOT USED MIGHT BE USED LATER
 */


import React from 'react';
import {render} from 'react-dom';
import Menu from './main';
import Home from './components/pages/home/home';
import PhotoView from './components/pages/photoView/photoView';
// import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import { BrowserRouter, Route, Link, Switch ,HashRouter} from 'react-router-dom'


const routes = (
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/photoView/:id' component={PhotoView}/>
        </Switch>
)

export default routes;