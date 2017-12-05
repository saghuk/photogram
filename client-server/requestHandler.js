/**Middleware - Request Handler
 * Description - Intercepts client request for page,
 * sets state and sends rendered page alon with data to the browser
 * Author - Sagar Hukkeri
 */

"use strict";
/**Sets imports */
import axios from "axios";
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { renderToString } from "react-dom/server";
import { StaticRouter, matchPath } from "react-router-dom";
import Menu from "../src/main";

import reducers from "../src/reducers/index";
const queryString = require("query-string");

/**set initial variables*/
var urlParsed = "";
var imageId = "";
var imageList = [];
var imageData = {};
var commentData = [];

/**Set predefined routes */
const routes = ["/", "/photoView"];

/**function to reset initial variables*/
function resetInitialVariables() {
  urlParsed = "";
  imageId = "";
  imageList = [];
  imageData = {};
  commentData = [];
}

/**function to identify request and set data accordingly*/
function handleRender(req, res) {
  /**Condition to parse the route since router v4 does not support query params */
  if (req.url.substring(0, 10) == "/photoView") {
    urlParsed = "/photoView";
    imageId = req.url.substring(14);
  } else {
    urlParsed = req.url;
  }
  /**Match the request with predefined routes*/
  const match = routes.reduce(
    (acc, route) => matchPath(urlParsed, { path: route, exact: true }) || acc,
    null
  );
  /**Condition to check if route is matched and get data accordingly or send not found page */
  if (match != null) {
    /**Server call to get image list*/
    axios
      .get("http://localhost:8080/api/photos")
      .then(function(response) {
        imageList = response.data;
        /**Condition to check if route is photoview and get data according to the image id */
        if (urlParsed == "/photoView") {
          var filteredImage = imageList.filter(function(obj) {
            return obj.code == imageId;
          });
          if (filteredImage.length != 0) {
            imageData = filteredImage[0];
            /**Server call to get image comments*/
            axios
              .get(`http://localhost:8080/api/comments/${imageId}`)
              .then(function(response) {
                commentData = response.data;
                sendPage(req.url, res);
              })
              .catch(function(err) {
                console.log("Initial Server-side rendering error", err);
                sendPage("/notFound", res);
              });
          } else {
            sendPage("/notFound", res);
          }
        } else {
          sendPage(req.url, res);
        }
      })
      .catch(function(err) {
        sendPage("/notFound", res);
      });
  } else {
    sendPage("/notFound", res);
  }
}

/**function to render page to string and send to browser according to the data set*/
function sendPage(url, res) {
  /**set inital store data */
  let storeData = {
    imageList: { imageList: imageList },
    setImage: {
      comments: commentData,
      setImage: imageData
    }
  };
  /**create store */
  const store = createStore(reducers, storeData);
  const initialState = JSON.stringify(store.getState());
  const context = {};
  /**create html string with data */
  const appString = renderToString(
    <Provider store={store}>
      <StaticRouter context={context} location={url}>
        <Menu />
      </StaticRouter>
    </Provider>
  );
  /**send html */
  res.render("index", { appString, initialState });
  resetInitialVariables();
}
module.exports = handleRender;
