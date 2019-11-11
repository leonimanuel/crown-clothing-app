//just functions that return objects
//only thing is that each object is in the corrent format that action is expected to be

export const setCurrentUser = user => ({
														//^either userAuth, userSnapshot that we create, or its null. 
	type: "SET_CURRENT_USER", //this is the exact same string that our reducer is expecting. Make sure to align action creators type with reducers type expectiona in order to get appropriate effects in our reducer
				//because these strings should never change, use CAPITALS AND _.
	payload: user
}); //now we have our user action
//now lets bring it into our components