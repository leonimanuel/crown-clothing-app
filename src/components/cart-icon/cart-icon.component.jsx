import React from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"//so now we're importing the icon as a react component instead of as a separate file. Why??
import "./cart-icon.styles.scss";

import { connect } from "react-redux";
import { toggleCartHidden} from "../../redux/cart/cart.actions"


const CartIcon = ({toggleCartHidden}) => (
	<div className="cart-icon" onClick={toggleCartHidden}>
		<ShoppingIcon className="shopping-icon" />
		<span className="item-count">0</span>
	</div>
	);

// export default CartIcon; 

const mapDispatchToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())

});

export default connect (null, mapDispatchToProps)(CartIcon);
