import React from 'react';
import './entertainment.css';

var Child = React.createClass({
	render: function(){
		return(
			<div>
				Test
			</div>
		)
	}
})

var Entertainment = React.createClass({
	render: function(){
		return(
			<div style={{backgroundColor:'red'}}>
				<Child />
			</div>
		)
	}
})

export default Entertainment;

