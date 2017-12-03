/**Component - Not found Page
 * Description - Renders a not found page if route is not defined.
 * Author - Sagar Hukkeri 
 */

"use stict"

/**Set Imports */
import React from 'react';

/**Class NotFound to export */
class NotFound extends React.Component{
    render(){
        
        return(
            <div>
                <div className="container-fluid padding0">
                    <div className="jumbotron">
                       <h1>Sorry, page is unavailable</h1> 
                    </div>
                </div>
            </div>
        )
    }
}

export default NotFound