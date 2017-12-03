"use stict"
import React from 'react';
import { BrowserRouter, Route, Link, Switch ,HashRouter,Redirect} from 'react-router-dom'
import Home from './components/pages/home/home';
import PhotoView from './components/pages/photoView/photoView';



class Menu extends React.Component{
   

    render(){
      
        return(
            <div>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    {/* <Route path='/photoView' exact render={()=>(<Redirect to='/'/>) }/> */}
                    <Route path='/photoView' component={PhotoView}/>
                </Switch>
           </div>
        )
    }
}

export default Menu