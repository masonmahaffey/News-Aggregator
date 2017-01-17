import React from 'react';
import './sports.css';

var Child = React.createClass({
	render: function(){
		return(
			<div>
				Test
			</div>
		)
	}
})

var Sports = React.createClass({
	render: function(){
		return(
			<div style={{backgroundColor:'lightgreen'}}>
				<Child />
			</div>
		)
	}
})

export default Sports;

