import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
	type: CartActionTypes.TOGGLE_CART_HIDDEN
	//payload: (here we don't actually need to pass a paylaod.)
});

export const addItem = item => ({
	type: CartActionTypes.ADD_ITEM,
	payload: item
});