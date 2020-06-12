// REDUCERS FROM REDUX THEORY

// import { combineReducers, createStore } from "redux";

// const userReducer = (state={}, action) => {
//     switch(action.type){
//         case "CHANGE_NAME":{
//             state = {...state, name: action.payload};
//             break;
//         }
//         case "CHANGE_AGE":{
//             state = {...state, age: action.payload};
//             break;
//         }
//     }
//     return state;
// };

// const tweetsReducer = (state=[], action) => {
//     return state;
// };

// const reducers = combineReducers({
//     user: userReducer,
//     tweets: tweetsReducer,
// })

// const store = createStore(reducers, {
// });

// store.subscribe( () => {
//     console.log("store changed", store.getState());
// });

// store.dispatch({type: "CHANGE_NAME", payload: "Ivan"});
// store.dispatch({type: "CHANGE_AGE", payload: "21"});
// store.dispatch({type: "CHANGE_AGE", payload: "22"});



// MIDDLEWARE FOR AJAX/SQL ASYNC THEORY.

// import { applyMiddleware, createStore } from "redux";

// const reducer = (initialState = 0, action) => {
//     if (action.type === "INC") {
//         return initialState + 1;
//     } else if (action.type === "DEC") {
//         return initialState - 1;
//     } else if (action.type === "ERR") {
//         throw new Error("IT DOESNT WORK");
//     }

// }

// const logger = (store) => (next) => (action) => {
//     console.log("Action Fired", action);
//     next(action);
// };

// const error = (store) => (next) => (action) => {
//     try {
//         next(action);
//     } catch (e) {
//         console.log("Error Detected", e);
//     }
// };



// const middleware = applyMiddleware(logger,error);

// const store = createStore(reducer, 1, middleware);

// store.subscribe(() => {
//     console.log("store changed", store.getState());
// })

// store.dispatch({ type: "INC" });
// store.dispatch({ type: "INC" });
// store.dispatch({ type: "INC" });
// store.dispatch({ type: "DEC" });
// store.dispatch({ type: "DEC" });
// store.dispatch({ type: "ERR" });

import { applyMiddleware, createStore } from "redux";
import axios from "axios";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

const initialState = {
    fetching: false,
    fetched: false,
    users: [],
    error: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_USERS_PENDING": {
            return { ...state, fetching: true }
            break;
        }
        case "FETCH_USERS_REJECTED": {
            return { ...state, fetching: false, error: action.payload }
            break;
        }
        case "FETCH_USERS_FULLFILLED": {
            return { ...state, fetching: false, fetched: true, users: action.payload }
            break;
        }
    }
    return state;
}

const middleware = applyMiddleware(promise, thunk, createLogger());
const store = createStore(reducer, middleware);

store.dispatch({
    type: "FETCH_USERS",
    payload: axios.get("http://rest.learncode.academy/api/ivanes/users")
})


// ASYNCHRONOUS ACTIONS WITH THUNK
// store.dispatch((dispatch) => {
//     dispatch({ type: "FETCH_USERS_START" });
//     axios.get("http://rest.learncode.academy/api/ivanes/users")
//         .then((response) => {
//             dispatch({ type: "RECEIVE_USERS", payload: response.data });
//         })
//         .catch((err) => {
//             dispatch({ type: "FETCH_USERS_ERROR", payload: err });
//         })

// });