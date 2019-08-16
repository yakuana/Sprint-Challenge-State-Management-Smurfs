import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

// redux imports 
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

// reducer 
import { reducer } from "./reducers/index.js";

// use google extension 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// store 
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

// root element 
const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);