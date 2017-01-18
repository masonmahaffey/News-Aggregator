import React, { Component } from 'react';
import $ from 'jquery';

var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&zip='+location+', us&appid='+weatherApiKey;

const weatherApiKey = '0ea662971e6d6306ad9a84ede4d36865';


//location obtained by user input in search box
class WeatherChild extends Component{
	render(){
		return(			
			<form onSubmit={this.weatherSearchSubmit}>
	     		<input type = "text" placeholder="Search by zip code..." />
	     		<button type = "submit" className="btn btn-success">
	     			Search weather for location
	     		</button>
		   </form>
		)
	}
}




class Weather extends Component{
	constructor(props) {
		super(props);

	}

	// weatherSearchSubmit(event){
	// 	event.preventDefault();
	// };
	render(){
		return(
			<div>
				<WeatherChild />

			</div>
		)
	}
}

export default Weather 