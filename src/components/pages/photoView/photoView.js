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
            return  <p key={index}><span className="fontWeight">{elem.user} </span>{elem.text}</p>
        })
        return (
            <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1">
                            <div className="panel panel-default margin2">
                                <div className="panel-body">
                                    <div className="col-md-9 padding0">
                                       <img className="detailImageWidth" src={image.display_src} alt={image.caption}/> 
                                    </div>
                                    <div className="col-md-3">
                                        <div className="col-md-12">
                                            <button onClick={this.close.bind(this)} type="button" className="close" aria-label="Close">
                                             <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <h5 className="comment fontWeight">{image.caption}</h5>
                                        <p> <span><img className="heart" src="./assets/images/Heart.png" /> </span>{image.likes}</p>
                                        <div className="col-md-12 padding0 commentBox">
                                            <h5 className="fontWeight">Comments({commentList.length})-</h5>
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