import React, { Component } from 'react';
import $ from 'jquery';
import './sports.css';

const scheduleURL = 'https://api.sportradar.us/nba-t3/games/2016/REG/schedule.json?api_key=ubarc7bp4gcj8p45kxvp4mbk';
const apiKey='ubarc7bp4gcj8p45kxvp4mbk';
const rankings ='http://api.sportradar.us/nba-t3/seasontd/2016/REG/rankings.json?api_key=ubarc7bp4gcj8p45kxvp4mbk';

var ScorePanel = React.createClass({
	getInitialState: function() {
		return({
			name: ''
		})
	},
	componentDidMount: function() {
		$.getJSON(rankings, (rankingsData) => {
			var name = rankingsData.conferences[0].name;
			this.setState({
				name:name
			})
		})
	},
	render: function(){
		return(
			<div className="col-xs-11" style={{backgroundColor:'#2E2B31'}}>
				{this.state.name}
			</div>
		);
	}
})

//XMLHttpRequest cannot load
//http://api.sportradar.us/nba-t3/seasontd/2016/REG/rankings.json?api_key=ubarc7bp4gcj8p45kxvp4mbk.
//No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin
//'http://localhost:3000' is therefore not allowed access.

class SportsScores extends React.Component{
	render(){
		return(
			<div className="banner_top">
				<ScorePanel />
			</div> 
		)
	}
}



export default SportsScores; 