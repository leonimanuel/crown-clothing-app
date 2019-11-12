import React from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"//so now we're importing the icon as a react component instead of as a separate file. Why??
import "./cart-icon.styles.scss";

import { connect } from "react-redux";
import { toggleCartHidden} from "../../redux/cart/cart.actions"

import { createStructuredSelector } from "reselect";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors"

const CartIcon = ({toggleCartHidden, itemCount}) => (
	<div className="cart-icon" onClick={toggleCartHidden}>
		<ShoppingIcon className="shopping-icon" />
		<span className="item-count">{itemCount}</span>
	</div>
);

// export default CartIcon; 

const mapDispatchToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
});

const MapStateToProps = createStructuredSelector ({ //we just made a selector	
	itemCount: selectCartItemsCount
	//itemCount: cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0) //accumulate all the number values of the quantities on all the cart items.
})

export default connect (MapStateToProps, mapDispatchToProps)(CartIcon);
