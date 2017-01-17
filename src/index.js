import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import General from './general/General.jsx'
import Entertainment from './entertainment/Entertainment.jsx'
import Sports from './sports/Sports.jsx'
import Business from './business/Business.js'

//this is a comment

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
