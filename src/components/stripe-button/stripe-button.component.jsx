import React from "react"; 
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = "pk_test_C15aIgKXM5870XhhgxOMRJJN00rlFuGvSW";

	const onToken = token => {
		console.log(token);
		alert("Payment Successful")
	}

	return (
		<StripeCheckout 
			label="Pay Now"
			name="Crown Clothing Ltd."
			billingAddress
			shippingAddress
			image="https://sendeyo.com/up/d/f3eb2117da"
			desription={`Your total is ${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	)
};

export default StripeCheckoutButton;