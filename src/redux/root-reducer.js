//actual base reducer that represents all of the state of our app
//end up being the actual code that combines all our other states together
//all reducers we write will go into this root reducer
import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer"

export default combineReducers({
	user: userReducer,
	cart: cartReducer
//key^ goes to the actual reducer that we want
})

//remember: our full state in redux is just one big JSON object.
// they keys that represent the individual slices of state, ie the reducers, 
//are the individiual reducers that we wrote
//so here, we're pulling userReducer into the root reducer