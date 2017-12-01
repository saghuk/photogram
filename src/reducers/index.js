'use strict'

import {combineReducers} from 'redux';

import {homeReducer,detailImage} from './home';

export default combineReducers({
    imageList:homeReducer,
    setImage:detailImage
})