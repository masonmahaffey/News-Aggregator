import React, { Component } from 'react';
import $ from 'jquery';

var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&zip='+location+', us&appid='+weatherApiKey;
//let user input fill in location in URL


const weatherApiKey = '0ea662971e6d6306ad9a84ede4d36865';


var Results = React.createClass({
	render: function(){
		return(
			<div>
				{this.props.input}
			</div>
		)
	}
})

var WeatherSearchSubmit = React.createClass({
	getInitialState: function() {
		return({
			value: ""
		})
	},
	weatherSearchSubmit: function(event){
		event.preventDefault();
		this.setState({
			value: event.target[0].value
		}) 

	},
	render: function(){
		// console.log(this.state.value)
		return(
			<div>
			<form onSubmit={this.weatherSearchSubmit}>
	     		<input type = "text" placeholder="Search by zip code..." />
	     		<button type = "submit" className="btn btn-success">
	     			Search weather for location
	     		</button>
	     		
		   </form>
		   <Results input={this.state.value}/>
		   </div>
		)
	}
	
})

var Weather = React.createClass({

	

	render: function(){
		return(
			<WeatherSearchSubmit />
		)
	}
})



//location obtained by user input in search box



export default Weather 






//location obtained by user input in search box
// class WeatherChild extends Component{
// 	render(){
// 		return(	
// 			<weatherSearchSubmit />	
// 				<form onSubmit={this.weatherSearchSubmit}>
// 		     		<input type = "text" placeholder="Search by zip code..." />
// 		     		<button type = "submit" className="btn btn-success">
// 		     			Search weather
// 		     		</button>
// 			   </form>
// 		)
// 	}
// }


// class weatherSearchSubmit extends Component{
// 	render(){
// 		return(
// 			<div>
// 			Test
// 			</div>
// 		)
// 	}

// }

// class Weather extends Component{
// 	constructor(props) {
// 		super(props);

// 	}

// 	// weatherSearchSubmit(event){
// 	// 	event.preventDefault();
// 	// };
// 	render(){
// 		return(
// 			<div>
// 				<WeatherChild />

// 			</div>
// 		)
// 	}
// }

// export default Weather 