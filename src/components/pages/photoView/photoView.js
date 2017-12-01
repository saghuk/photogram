"use strict"

import React from 'react';
import {connect} from 'react-redux'

class PhotoView extends React.Component {
    close(){
        this.props.history.push("/")
    }
    render(){
        console.log(this.props);
        const image = this.props.setImage;
        const commentList = this.props.comments.map((elem,index)=>{
            return  <p key={index}><span class="fontWeight">{elem.user} </span>{elem.text}</p>
        })
        return (
            <div class="container">
                    <div class="row">
                        <div class="col-md-10 col-md-offset-1">
                            <div class="panel panel-default margin2">
                                <div class="panel-body">
                                    <div class="col-md-9 padding0">
                                       <img class="detailImageWidth" src={image.display_src} alt={image.caption}/> 
                                    </div>
                                    <div class="col-md-3">
                                        <div class="col-md-12">
                                            <button onClick={this.close.bind(this)} type="button" class="close" aria-label="Close">
                                             <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <h5 class="comment fontWeight">{image.caption}</h5>
                                        <p> <span><img class="heart" src="./assets/images/Heart.png" /> </span>{image.likes}</p>
                                        <div class="col-md-12 padding0 commentBox">
                                            <h5 class="fontWeight">Comments({commentList.length})-</h5>
                                             {commentList}   
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}
function mapStateToProps(state){
    return {
        setImage : state.setImage.setImage,
        comments : state.setImage.comments
    }  
  }


export default connect(mapStateToProps)(PhotoView)