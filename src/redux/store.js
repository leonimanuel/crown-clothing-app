// L100

import  { createStore, applyMiddleware } from "redux";

//we need to add middleware to ours toer so that wherenever actions fires, we can catch and display them
import logger from "redux-logger";
		//function^?

import rootReducer from "./root-reducer";

//now we set up our middleware.
//the middleware that the redux store is expecting is going to be an array
const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares)) //fucntion that gets both a rootreducer and return value of applyMiddleware 
																									//this way^, spreads in all values in the store array into this function call as individual arguments.
				//this way, if we ever need to add more things to the middleware, we can just add it to the array value. We could also add them one by one here but this way is more scalable

export default store;