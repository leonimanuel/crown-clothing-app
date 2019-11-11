import React from "react";
import { connect } from "react-redux";

import "./collection-item.styles.scss";

import CustomButton from "../custom-button/custom-button.component"
import { addItem } from "../../redux/cart/cart.actions"

const CollectionItem = ({item, addItem}) => {
	const {name, price, imageUrl } = item; //doing this because we still want these values since we use them in our comp definitions

	return (
		<div className='collection-item'>
			<div 
			className="image"
			style={{
				backgroundImage: `url(${imageUrl})`
			}} />
			<div className='collection-footer'>
				<span className='name'>{ name }</span>
				<span className='price'>{ price }</span>
			</div>
			<CustomButton onClick={() => addItem(item)} inverted>Add to cart</CustomButton>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItem(item)) //whenever there's an add item, it will get an item in as the property, of this function that will represent the addItem prop that gets passed in.
	
})

export default connect(null, mapDispatchToProps)(CollectionItem);