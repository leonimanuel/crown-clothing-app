import React from 'react';
import { Route } from "react-router-dom";

// import SHOP_DATA from "../../redux/shop/shop.data"
// import CollectionPreview from '../../components/collection-preview/collection-preview.component';

// import { selectCollections } from "../../redux/shop/shop.selectors";
// import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect"; 
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

const ShopPage = ({ match }) => ( //want match cuz here we want to display match.path
	<div className='shop-page'> 
		<Route exact path={`${match.path}`} component={CollectionsOverview} /> 
	<Route exact path={`${match.path}/:collectionId`} component={CollectionPage} /> {/*route name will be a parameter. colon allows us to accesscategoryId as a parameter*/}
	</div>
 );

// const mapStateToProps = createStructuredSelector({
// 	collections: selectCollections //referencing selector
// })

// export default connect(mapStateToProps)(ShopPage);
export default ShopPage




// class ShopPage extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			collections: SHOP_DATA

// 		}
// 	}
// 	render() {
// 		const {collections} = this.state; //destructuring
// 		return(
// 			<div className='shop-page'>
// 				{
// 					collections.map(({ id, ...otherCollectionProps}) => (
// 						<CollectionPreview key={id} {...otherCollectionProps} />
// 						))
// 				}
// 			</div>
// 		)
// 	}
// }

