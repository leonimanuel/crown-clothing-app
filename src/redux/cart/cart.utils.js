export const addItemtoCart = (cartItems, cartItemToAdd) => {
	const existingCartItem = cartItems.find(
		cartItem => cartItem.id === cartItemToAdd.id
	); //will return the first item found based on condition passed in here
	//if it matches, it will set that cart item to our cont. 
	//If it doesn find anything after looping through all of it, it'll be undefined

	if (existingCartItem) {
		return cartItems.map(
			cartItem => cartItem.id === cartItemToAdd.id //returns new array cuz we need to return new versions of our state so comps know to rerender properly
			? { ...cartItem, quantity: cartItem.quantity + 1 }
			: cartItem // no need to update any componenets in this scenario. Just return item as is
			)
	}

	//if cartItem is not found in our array
	return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}
