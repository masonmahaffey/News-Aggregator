import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import General from './general/General.js'
import Entertainment from './entertainment/Entertainment.js'
import Sports from './sports/Sports.js'
import Business from './business/Business.js'

//this is a comment, 2

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App} >
			<IndexRoute component={General} />
			<Route path="entertainment" component={Entertainment} />
			<Route path="sports" component={Sports} />
			<Route path="business" component={Business} />
		</Route>
	</Router>,	
  document.getElementById('root')
);
