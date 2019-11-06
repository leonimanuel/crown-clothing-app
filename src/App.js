import React from 'react';
import { Switch, Route } from "react-router-dom";


import './App.css';
import HomePage from "./pages/homepage/homepage.component"
import ShopPage from "./pages/shop/shop.component"

// const HatsPage = () => (
// 	<div>
// 		<h1>Hats Page</h1>
// 	</div>
// );

function App() {
	return (
		<div>
			<Switch> {/*The moment switch sees something match the path (as long as a route gets rendered) it renders only that. Useful if we don't want to accidentally render multiple components*/}
				{/* when path is at the base url, open the homepage. "exact" means the path has to be exactly '/'*/}
				<Route exact path='/' component={HomePage} />
				<Route path='/shop' component={ShopPage} />
			</Switch>
		</div>
	)
}

export default App;
