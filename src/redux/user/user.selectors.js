import { createSelector } from "reselect";

const selectUser = state => state.user;

//can use multiple input selectors if we wanted
export const selectCurrentUser = createSelector(
	[selectUser], // an array of input selectors
	user => user.currentUser //the function that gets the return of the input selector
);
