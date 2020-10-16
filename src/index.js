import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from './pages/Home/index';
import Login from './pages/Login/index';
import Pokemon from './pages/Pokemon/index';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { initializeStore } from "./store";
import { Provider } from "react-redux";

const store = initializeStore();
ReactDOM.render(
  <Provider store={store}>
     <Router>
    <Route exact path="/" component={Home}/>
    <Route exact path="/pokemon" component={Pokemon}/>
    <Route exact path="/login" component={Login}/>
  </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();