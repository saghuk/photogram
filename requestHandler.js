"use strict"

import axios from 'axios';
import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {renderToString} from 'react-dom/server';
import {StaticRouter,matchPath} from 'react-router-dom';
import Menu from './src/main';


import reducers from './src/reducers/index';
import routes from './src/routes';
const queryString = require('query-string');


function handleRender(req, res) {
  // console.log(req);
  const routes =[
    '/',
    '/photoView',
  ]
  console.log(req.url)
  var urlParse = '';
  var id='';
  var imageList='';
  var imageData='';
  var commentData = '';

  if(req.url.substring(0,10)=='/photoView'){
    urlParse = '/photoView'
    id = req.url.substring(14)
    console.log(id);
  }
  else{
    urlParse = req.url
  }
  const match = routes.reduce((acc,route)=>matchPath(urlParse,{path:route,exact:true})||acc,null)
  console.log(match,'thismatch');
    
    //console.log(req, res);
    axios.get('http://localhost:8080/api/photos')
        .then(function(response) {
          imageList = response.data;
              if(urlParse=='/photoView'){
                var result = imageList.filter(function( obj ) {
                  return obj.code == id;
                });
                if(result.length!=0){
                  imageData = result[0];
                  axios.get(`http://localhost:8080/api/comments/${id}`)
                  .then(function(response) {
                    commentData = response.data;
                    sendPage(imageList,imageData,commentData,req.url,res);    
                  })
                  .catch(function(err) {
                      console.log('Initial Server-side rendering error', err);
                  })
                }
              }     
              else{
                sendPage(imageList,{},[],req.url,res);
              }
        })
        .catch(function(err) {
            console.log('Initial Server-side rendering error', err);
        })
}

function sendPage(imageList,imageData,commentData,url,res){
  const store = createStore(reducers, 
    {"imageList":{"imageList":imageList},
     "setImage":{
    "comments":commentData,"setImage":imageData
   }})
  const initialState = JSON.stringify(store.getState());
   const context = {};
  console.log(context,'thisContext');
  const appString = renderToString(<Provider store={store}><StaticRouter context={context} location={url}><Menu/></StaticRouter></Provider>);
  res.render('index', { appString,initialState});
}
module.exports = handleRender;