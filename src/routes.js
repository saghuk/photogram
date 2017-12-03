import React from 'react';
import {render} from 'react-dom';
import Menu from './main';
import Home from './components/pages/home/home';
import PhotoView from './components/pages/photoView/photoView';
// import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import { BrowserRouter, Route, Link, Switch ,HashRouter} from 'react-router-dom'

// const Status = function ({ code, children }){
//   return (
//         <Route render={function({ staticContext }) {
//           if (staticContext)
//             staticContext.status = code
//           return children
//         }}/>
//     )
// }
// //NOT-FOUND COMPONENT
// const NotFound = function(){
//     return (
//       <Status code={404}>
//         <div>
//           <h2> Sorry, cannot find this page</h2>
//         </div>
//       </Status>
//     )
// }

const routes = (
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/photoView/:id' component={PhotoView}/>
        </Switch>
)

export default routes;