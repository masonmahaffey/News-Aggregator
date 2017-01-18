import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import General from './general/General.js'
import Entertainment from './entertainment/Entertainment.js'
import Sports from './sports/Sports.js'
import Business from './business/Business.js'
import Global from './global/Global.js'
import SearchResults from './search/SearchResults.js'


ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App} >
			<IndexRoute component={General} />
			<Route path="entertainment" component={Entertainment} />
			<Route path="sports" component={Sports} />
			<Route path="business" component={Business} />
			<Route path="global" component={Global} />
			<Route path="news-search/:newsToSearchFor" component={SearchResults} />
		</Route>
	</Router>,	
  document.getElementById('root')
);