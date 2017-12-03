/**Action - Action Emitter Redux
 * Description - Sets actions for redux and react to work on store
 * Author - Sagar Hukkeri 
 */

'use strict'
/**Set Imports */
import axios from 'axios';

/**Action to get main page imagelist */
export function homeGetImages() {
    return function(dispatch) {
        console.log('in');
        axios.get('http://localhost:8080/api/photos').then(function(response) {
            dispatch({
                type: "GETIMAGELIST",
                payload: response.data
            })
        }).catch(
            // dispatch({
            //     type: "GETIMAGELISTREJECTED",
            //     payload: "AN ERROR IN REQUEST"
            // })
        )
    }
}

/**Action to set image selected on mainpage */
export function setImage(image) {
    return {
        type: "SETIMAGE",
        payload: image
    }
}

/**Action to get comments of the image selected on mainpage */
export function imageComments(id) {
    return function(dispatch) {
        console.log('in');
        axios.get(`http://localhost:8080/api/comments/${id}`).then(function(response) {
            dispatch({
                type: "GETIMAGECOMMENTS",
                payload: response.data
            })
        }).catch(
            dispatch({
                type: "GETIMAGECOMMENTSREJECTED",
                payload: "AN ERROR IN REQUEST"
            })
        )
    }
}