import { createSelector } from "reselect"; 

// const COLLECTION_ID_MAP = {
// 	hats: 1,
// 	sneakers: 2,
// 	jackets: 3,
// 	womens: 4,
// 	mens: 5
// }

const selectShop = state => state.shop //our input selector, which gets state and returns state.shop

export const selectCollections = createSelector(
	[selectShop],
	shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
	[selectCollections],
	collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = collectionUrlParam => //curried function
	createSelector(
		[selectCollections],
		// collections => collections.find( //drawback is worst case scenario, looping through every one
		// collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]) //looks until returns true
		collections => collections[collectionUrlParam]
	)