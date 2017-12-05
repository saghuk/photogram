/**Component - Home Image Component
 * Description - Child component of home page that shows image.
 * Author - Sagar Hukkeri
 */

"use strict";
/**Set Imports */
import React from "react";

/**HomeImageItem class to export */
class HomeImageItem extends React.Component {
  render() {
    return (
      <div onClick={this.props.onChildClick} className="column-4 margintop">
        <img
          className="imageWidth"
          src={this.props.image.display_src}
          alt={this.props.image.caption}
        />
      </div>
    );
  }
}

export default HomeImageItem;
