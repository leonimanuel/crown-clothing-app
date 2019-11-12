import React from "react";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => ( //passing in full items rather than spread the props is cuz we want to adjust quantities. Basically we're firing additem action creator again
	<div className="checkout-item">
		<div className="image-containter">
			<img src={imageUrl} alt="item" />
		</div>
		<span className="name">{name}</span>
		<span className="quantity">{quantity}</span>
		<span className="price">{price}</span>
		<div className="remove">&#10005;</div>

	</div>
);

export default CheckoutItem;