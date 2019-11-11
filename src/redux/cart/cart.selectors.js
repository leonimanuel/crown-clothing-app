import { createSelector } from "reselect";

//two types of selectors we can write. 1. input selector, 2. output selector.

//input selector. Just a function that usually takes following naming structure

const selectCart = state => state.cart; //takes the state and returns a slice of it, usually one layer deep.

					// property on our cart.
export const selectCartItems = createSelector( //this is a memoized selector cuz we used createSelector
	[selectCart],
	cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
	[selectCartItems],
	cartItems =>
		cartItems.reduce(
			(accumulatedQuantity, cartItem) =>
				accumulatedQuantity + cartItem.quantity, 0
		)
)
					