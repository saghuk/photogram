/**Component - Home Image Component
 * Description - Child component of home page that shows image.
 * Author - Sagar Hukkeri 
 */

"use strict"
/**Set Imports */
import React from 'react';

/**HomeImageItem class to export */
class HomeImageItem extends React.Component{
    render(){
        return(
            <div onClick={this.props.onChildClick} className="col-md-4 margin15">
                {/* <div class="col-md-12"> */}
                    <img className="imageWidth" src={this.props.image.display_src} alt={this.props.image.caption}/>
                {/* </div> */}
            </div>
        )
    }
}

export default HomeImageItem
