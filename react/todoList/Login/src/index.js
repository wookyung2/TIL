import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
// import store from "./store/store";
import { createStore, combineReducers, applyMiddleware } from "redux";

const INITIAL_STATE = {
  name: "",
  isFetching: false,
  error: "",
  gender: "",
};

const userReducer = (state = INITIAL_STATE, action) => {
  console.log("userReducer 함수 실행!", state, action);
  switch (action.type) {
    case "LOGIN_REQUEST": {
      return {
        ...state,
        isFetching: true,
      };
    }
    case "LOGIN_SUCCESS": {
      return {
        ...state,
        name: action.payload.id,
        gender: action.payload.gender,
        isFetching: false,
      };
    }
    case "LOGIN_FAILURE": {
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    }
    default:
      return state;
  }
};

const someMiddleware = (store) => (next) => (action) => {
  console.log("middelware에 액션 도착!", action);
  if (typeof action === "function") {
    action(store.dispatch, store.getState);
  } else {
    next(action);
  }
};
const store = createStore(
  combineReducers({
    user: userReducer,
  }),
  applyMiddleware(someMiddleware)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
