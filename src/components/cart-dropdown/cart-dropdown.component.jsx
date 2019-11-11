import React from "react";
import { connect } from "react-redux";

import CartItem from "../cart-item/cart-item.component"
import CustomButton from "../custom-button/custom-button.component";

import { selectCartItems } from "../../redux/cart/cart.selectors";
import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems }) => (
	<div className="cart-dropdown">
		<div className="cart-items">
			{
				cartItems.map(cartItem => (
					<CartItem key={cartItem.id} item={cartItem} /> 
			))}
		</div>
		<CustomButton>Go to Checkout</CustomButton>
	</div>
);

// export default CartDropdown;

const MapStateToProps = state => ({
	cartItems: selectCartItems(state)
});

export default connect (MapStateToProps)(CartDropdown);