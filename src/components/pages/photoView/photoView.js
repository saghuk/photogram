/**Component - Photo View page
 * Description - Renders a photo page to show the selected photo in fullpage and its comments. Connected to the store.
 * Author - Sagar Hukkeri
 */

"use strict";
/**Set Imports */
import React from "react";
import { connect } from "react-redux";

/**Exports class for PhotoView */
class PhotoView extends React.Component {
  close() {
    this.props.history.push("/");
  }
  render() {
    console.log(this.props);
    const image = this.props.setImage;
    const commentList = this.props.comments.map((elem, index) => {
      return (
        <p key={index}>
          <span className="fontWeight">{elem.user} </span>
          {elem.text}
        </p>
      );
    });
    return (
      <div className="gridlayout">
        <div className="row">
          <div className="column-10 column-offset-1">
            <div className="panel panel-default margintop">
              <div className="panel-body">
                <div className="column-9 paddingzero">
                  <img
                    className="detailImageWidth"
                    src={image.display_src}
                    alt={image.caption}
                  />
                </div>
                <div className="column-3">
                  <div className="column-12 text-right paddingzero">
                    <button
                      onClick={this.close.bind(this)}
                      type="button"
                      className="close"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <h5 className="comment fontWeight">{image.caption}</h5>
                  <p>
                    {" "}
                    <span>
                      <img className="heart" src="./assets/images/Heart.png" />{" "}
                    </span>
                    {image.likes}
                  </p>
                  <div className="column-12 paddingzero commentBox">
                    <h5 className="fontWeight">
                      Comments({commentList.length})-
                    </h5>
                    {commentList}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    setImage: state.setImage.setImage,
    comments: state.setImage.comments
  };
}

export default connect(mapStateToProps)(PhotoView);
