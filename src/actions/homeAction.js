'use strict'
import axios from 'axios';

export function homeGetImages(){
    return function(dispatch){
        console.log('in');
        axios.get('/api/photos').then(function(response){
            dispatch({
                     type:"GETIMAGELIST",
                     payload:response.data
                 })
        }).catch(
            dispatch({
                type:"GETIMAGELISTREJECTED",
                payload:"AN ERROR IN REQUEST"
            })
        )
    }
}

export function setImage(image){
    return {
        type:"SETIMAGE",
        payload:image
    }
}

export function imageComments(id){
    return function(dispatch){
        console.log('in');
        axios.get(`/api/comments/${id}`).then(function(response){
            dispatch({
                     type:"GETIMAGECOMMENTS",
                     payload:response.data
                 })
        }).catch(
            dispatch({
                type:"GETIMAGECOMMENTSREJECTED",
                payload:"AN ERROR IN REQUEST"
            })
        )
    }
}