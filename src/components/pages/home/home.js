/**Component - Home page
 * Description- Create Home page component to render the main page.
 * Author - Sagar Hukkeri
 */

"use stict";

/**Set imports */
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import HomeImageItem from "./homeImageItem";
import {
  setImage,
  homeGetImages,
  imageComments
} from "../../../actions/homeAction";

/**Home Component connected to actions and store */
class Home extends React.Component {
  componentDidMount() {
    this.props.homeGetImages();
  }

  selectImage(image) {
    console.log(image.code);
    this.props.setImage(image);
    this.props.imageComments(image.code);
    this.props.history.push(`/photoView?id=${image.code}`);
  }
  render() {
    const imageList = this.props.imageList.map(elem => {
      return (
        <HomeImageItem
          onChildClick={this.selectImage.bind(this, elem)}
          key={elem.id}
          image={elem}
        />
      );
    });
    return (
      <div>
        <div className="headersection paddingzero">
          <div className="jumbotron">
            <h1 className="heading">Welcome to Photogram</h1>
          </div>
        </div>
        <div className="gridlayout">
          <div className="row">
            <div className="column-12">{imageList}</div>
          </div>
        </div>
        <footer>
          <div className="footer-copyright">
            <div className="headersection">© 2017 Copyright: Sagar Hukkeri</div>
          </div>
        </footer>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    imageList: state.imageList.imageList
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setImage: setImage,
      homeGetImages: homeGetImages,
      imageComments: imageComments
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
