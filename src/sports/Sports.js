import './sports.css';
import React from 'react';
import $ from 'jquery'; 

import Nba from './Nba';
import {IndexLink, Link } from 'react-router';


class SportButtons extends React.Component{

	render(){
		return(
			<div className="container" style={{fontSize:17, fontFamily:'Roboto'}}>
			        <ul className="nav navbar-nav hidden-xs">
			          <li><IndexLink to="/sports" activeClassName="active">SPORTS</IndexLink></li>
			          <li><Link to="/nba" activeClassName="active">NBA</Link></li>
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
				<SportButtons displaySport={this.displaySport}/>
				{this.props.children}
			</div>
		)
	}
})

export default Sports;