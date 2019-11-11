import CartActionTypes from "./cart.types"
import { addItemtoCart} from "./cart.utils"

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
				cartItems: addItemtoCart(state.cartItems, action.payload)            
																						//any additional items
				// cartItems: [...state.cartItems, action.payload]
											//^spreading in
											//existing cart items

			}

			default:
				return state;
	}
};

export default cartReducer;