import React, { Component } from 'react';
import $ from 'jquery';
import './sports.css';


class ScorePanel extends React.Component{
	render (){
		return(
			<div className="col-xs-11">
			This is a test. Score Banner for top sporting events around the world
			</div>
		);
	}
}

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