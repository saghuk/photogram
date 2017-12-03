
/**Main Js - Route configuration and main component
 * Description - Shares routes between server and client
 * Author - Sagar Hukkeri 
 */

 /**Set Imports */
"use stict"
import React from 'react';
import { BrowserRouter, Route, Link, Switch ,HashRouter,Redirect} from 'react-router-dom'
import Home from './components/pages/home/home';
import PhotoView from './components/pages/photoView/photoView';
import NotFound from './components/pages/notFound/notFound';



class Menu extends React.Component{
   

    render(){
      
        return(
            <div>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    {/* <Route path='/photoView' exact render={()=>(<Redirect to='/'/>) }/> */}
                    <Route path='/photoView' component={PhotoView}/>
                    <Route component={NotFound}/>
                </Switch>
           </div>
        )
    }
}

export default Menu