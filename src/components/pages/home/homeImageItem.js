"use strict"

import React from 'react';


class HomeImageItem extends React.Component{
    render(){
        return(
            <div onClick={this.props.onChildClick} class="col-md-4 margin15">
                {/* <div class="col-md-12"> */}
                    <img class="imageWidth" src={this.props.image.display_src} alt={this.props.image.caption}/>
                {/* </div> */}
            </div>
        )
    }
}

export default HomeImageItem
