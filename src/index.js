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
import Nba from './sports/Nba.js';
import Nfl from './sports/Nfl.js';
import Mlb from './sports/Mlb.js';
import Nhl from './sports/Nhl.js';
import SportsHome from './sports/SportsHome.js';


ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App} >
			<IndexRoute component={General} />
			<Route path="entertainment" component={Entertainment} />
			<Route path="sports" component={Sports} >
				<IndexRoute component={SportsHome} />
				<Route path="/nba" component={Nba} />
				<Route path="/nfl" component={Nfl} />
				<Route path="/mlb" component={Mlb} />	
				<Route path="/nhl" component={Nhl} />				
			</Route>
			<Route path="business" component={Business} />
			<Route path="global" component={Global} />
			<Route path="news-search/:newsToSearchFor" component={SearchResults} />
		</Route>
	</Router>,	
  document.getElementById('root')
);
