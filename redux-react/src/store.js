import { applyMiddleware, createStore } from "redux";
import logger, { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import promise, { createPromise } from "redux-promise-middleware";
import reducer from "./reducers";

const middleware = applyMiddleware(createPromise(), thunk, createLogger());

export default createStore(reducer, middleware);

fetch('http://rest.learncode.academy/api/ivanesTest/tweets', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({tweets: ["Bababooey", "BRUH"]}),
  })
  .then(response => response.json()) // response.json() returns a promise
  .then((response) => {
    console.log("You saved this item", response); //returns the new item along with its ID
  });
  

// fetch('http://rest.learncode.academy/api/ivanesTest/tweets/5ee2f2a179f71d000fa4ca8f', {
//     method: "DELETE",
//   })
//   .then((response) => {
//     console.log("Deleted!", response.status); //returns 200 ok
//   })