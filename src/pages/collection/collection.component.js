import React from "react";

import CollectionItem from "../../components/collection-item/collection-item.component"
import {connect} from "react-redux";

import { selectCollection } from "../../redux/shop/shop.selectors"


import "./collection.styles.scss";

const CollectionPage = ({ collection }) => {
	// console.log(collection) // will spit out the categoryId of whatever category we're on
	const { title, items } = collection;
	return (
		<div className="collection-page">
			<h2 className="title">{ title }</h2> 
			<div className="items">
				{
					items.map(item => 
						<CollectionItem key={item.id} item={item} />)
				}
			</div>
		</div>
	)
};

const mapStateToProps = (state, ownProps) => ({ //??131 ownProps = props of componenet that we're wrapping in connect
	collection: selectCollection(ownProps.match.params.collectionId)(state)
})


export default connect(mapStateToProps)(CollectionPage);