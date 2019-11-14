import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"; //component that we're gonna wrap around our app
import './index.css';
import App from './App';
import { Provider } from "react-redux";

//bring in the actual persistor that we need as well as component that will elverage inside of our app that will give it the context our new persisted reducer
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from './redux/store'

ReactDOM.render(
	<Provider store={store}> {/*the provider is a componnet class that we get from react reux that once passed the store object will be able to give that store context to the rest of the app. Can pull values off of the store and into our components, as well as dispatch values to the store*/}
		<BrowserRouter>
			<PersistGate persistor={persistor}>
				<App /> {/*wrapping app in persistor so that it always has access to the persistence flow*/}
			</PersistGate>
		</BrowserRouter>
	</Provider>, 
	document.getElementById('root')
);
