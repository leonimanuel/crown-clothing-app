import CartActionTypes from "./cart.types"
import { addItemToCart, removeItemFromCart } from "./cart.utils"

const INITIAL_STATE = {
	hidden: true,
	cartItems: []
}
 
const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CartActionTypes.TOGGLE_CART_HIDDEN: 
			return {
				...state,
				hidden: !state.hidden
			};
		
		case CartActionTypes.ADD_ITEM:
			return {
				...state, //spreading 
				cartItems: addItemToCart(state.cartItems, action.payload)            
																						//any additional items
				// cartItems: [...state.cartItems, action.payload]
											//^spreading in
											//existing cart items
			};
		
		case CartActionTypes.CLEAR_ITEM_FROM_CART:
			return {
				...state,
				cartItems: state.cartItems.filter(cartItem =>  //filter returns us back anything that yields true
					cartItem.id !== action.payload.id ) //if cartItem.id doesn't match anything we're trying to filter, return true. So we're keeping that item
			}; //all in all, returns us new array with the appropriate item filtered out

		case CartActionTypes.REMOVE_ITEM:
			return {
				...state,
				cartItems: removeItemFromCart(state.cartItems, action.payload)
			};

			default:
				return state;
	}
};

export default cartReducer;