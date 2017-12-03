/**Reducer - Combine Reducers Redux
 * Description - Combines all the reducers into one to use in react app
 * Author - Sagar Hukkeri 
 */

'use strict'
/** Set imports */
import {combineReducers} from 'redux';

import {homeReducer,detailImage} from './home';

/**Exports combined reducer */
export default combineReducers({
    imageList:homeReducer,
    setImage:detailImage
})