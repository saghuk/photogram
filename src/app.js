/**App - Starting point for react app
 * Description - Sets the starting point for react app
 * Author - Sagar Hukkeri
 */

/**Set Imports */
import React from "react";
import { render } from "react-dom";
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  HashRouter
} from "react-router-dom";
import thunk from "redux-thunk";

import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers/index";
import { homeGetImages } from "./actions/homeAction";
import Menu from "./main";
const middleware = applyMiddleware(thunk, createLogger());
/**Get initial state set by server in window */
const initialState = window.INITIAL_STATE;

/**Create store based on initial state reducer and middleware */
const store = createStore(reducers, initialState, middleware);
console.log(store);

/**Element in index page where react app will be rendered */
let app = document.getElementById("app");

/**Initial route setup wrapped by redux provider */
const Routes = (
  <Provider store={store}>
    <BrowserRouter>
      <Menu />
    </BrowserRouter>
  </Provider>
);

render(Routes, app);
