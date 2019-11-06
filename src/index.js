import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"; //component that we're gonna wrap around our app
import './index.css';
import App from './App';

ReactDOM.render(
	<BrowserRouter>
		<App /> 
	</BrowserRouter>, 
	document.getElementById('root')
);
