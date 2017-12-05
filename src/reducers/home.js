/**Reducer - Reducers Redux
 * Description - Reducer function for each of the action to set state in store
 * Author - Sagar Hukkeri
 */

/**Sets the state for imageList*/
export function homeReducer(state = { imageList: [] }, action) {
  switch (action.type) {
    case "GETIMAGELIST":
      return { ...state, imageList: [...action.payload] };
      break;
  }
  return state;
}
/**Sets the state for selected image based on action type*/
export function detailImage(state = { setImage: {}, comments: [] }, action) {
  switch (action.type) {
    case "SETIMAGE":
      return { ...state, setImage: { ...action.payload } };
      // return state.setimage=action.payload
      break;
    case "GETIMAGECOMMENTS":
      return { ...state, comments: [...action.payload] };
      // return state.setimage=action.payload
      break;
  }
  return state;
}
