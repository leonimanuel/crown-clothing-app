//remember, a reducer is really a fucntion that gets two properties:
//a state object which represents either last or initial state,
//and then it receives an action
//that action is just an object that has a type (string value),
//and might also have a payload (can be anything)

//every single reducer gets every action that ever gets fired, even if those actions are not related to the given reducer.

//action object: 
// {
// 	type: 
// 	payload: 
// }

//redux doesn't know about states when app initilializes, only when action fires. so we need to set an initial state
const INITIAL_STATE = {
	currentUser: null //instantiation
}

//									default parameter value (ES6 feature). Means that if state is ever UNDEFINED, it will fall back and use what you defined as a default. remember: null is considered a value.
const userReducer = (state = INITIAL_STATE, action) => {//state is going to be current state that the redux store passes to this reducer whenever an action fires
	switch (action.type) {
		case "SET_CURRENT_USER":
			return {
				...state, //spreading. Basically keep all this stuff except the following as it was..?
				currentUser: action.payload
			}

		default:
			return state; //every single reducer gets every action that ever gets fired, even if those actions are not related to the given reducer.
										//so: if an action gets fired that this reducer doesn't care about, we want it to return the same state
	}
}

export default userReducer; //now lets bring this into root reducer.