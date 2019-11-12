import React from "react";
import { connect } from "react-redux";

import CartItem from "../cart-item/cart-item.component"
import CustomButton from "../custom-button/custom-button.component";

import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions" 

import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems, history, dispatch }) => { //the dispatch here is instead of having to write out a whole MapDispatchToProps
	// console.log(otherProps) //log all the other props that weren't destructure, aka all props xept cartItems and history
	return (
	<div className="cart-dropdown">
		<div className="cart-items">
			{ 
				cartItems.length ? 
				cartItems.map(cartItem => (
					<CartItem key={cartItem.id} item={cartItem} /> 
			))
			: <span className="empty-message">your cart is empty</span>
			}
		</div>
		<CustomButton onClick={() => {
			history.push("/checkout");
			dispatch(toggleCartHidden()); //
			}}>Go to Checkout</CustomButton>
	</div>
)};

// export default CartDropdown;

const MapStateToProps = createStructuredSelector ({
	cartItems: selectCartItems
});

export default withRouter(connect(MapStateToProps)(CartDropdown)); //withrouter is taking the inside component as its argument
//when you wrap omps like this, it actually evals from inside out. We'll get our connect comp first, before withRouter, which means that our connect 
//comp will have access to the props we're looking for, which in this case is history