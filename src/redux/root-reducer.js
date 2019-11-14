//actual base reducer that represents all of the state of our app
//end up being the actual code that combines all our other states together
//all reducers we write will go into this root reducer
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //this is telling redux-persist: I want to use local-storage as my default storage. Can also do session-storage if you wanted
//type of storage persist


import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

//defining new persist config
const persistConfig = {
	key: "root", //at what point in our reducer object do we wanna start storing everything: root
	storage, //?? passing in storage as storage to say that the storage key goes to whatever the storage object from redux-persist we're trying to use is
	whitelist: ["cart"] //array containing the string names of any reducer we want to store. e.g. ser and cart, but user is already being handled by firebase so just cart for nwo
						//^ those reducers that we want to persist
}


const rootReducer = combineReducers ({
	user: userReducer,
	cart: cartReducer,
	directory: directoryReducer,
	shop: shopReducer //shop points to shopReducer inside our rootReducer
})

export default persistReducer(persistConfig, rootReducer); //modified version of our root reducer, now with persist capability

// export default combineReducers({
// 	user: userReducer,
// 	cart: cartReducer
// //key^ goes to the actual reducer that we want
// })

//remember: our full state in redux is just one big JSON object.
// they keys that represent the individual slices of state, ie the reducers, 
//are the individiual reducers that we wrote
//so here, we're pulling userReducer into the root reducer