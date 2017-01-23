import './sports.css';
import React from 'react';
import $ from 'jquery'; 

import Nba from './Nba';
import Nfl from './Nfl';
import Mlb from './Mlb';
import Nhl from './Nhl';
import {IndexLink, Link } from 'react-router';


class SportButtons extends React.Component{
	render(){
		return(
			<div className="container sportsnav" style={{fontSize:17, fontFamily:'Roboto'}}>
			        <ul className="nav navbar-nav hidden-xs">
			          <li><IndexLink to="/sports" activeClassName="active">Sports Home</IndexLink></li>
				          <li><Link to="/nba" activeClassName="active">NBA</Link></li>
				          <li><Link to="/nfl" activeClassName="active">NFL</Link></li>
				          <li><Link to="/mlb" activeClassName="active">MLB</Link></li>
				          <li><Link to="/nhl" activeClassName="active">NHL</Link></li>
			        </ul>
			</div>
		)
	}
}



var Sports = React.createClass({
	displaySport: function(sport){
		this.props.router.push('/sports/' + sport)
	}, 

	render: function(){
		return(
			<div>
				{/*<SportButtons displaySport={this.displaySport}/>*/}
				{this.props.children}
			</div>
		)
	}
})

export default Sports;