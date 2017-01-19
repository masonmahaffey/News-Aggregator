import React, { Component } from 'react';
import $ from 'jquery';

var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&zip='
var urlTail = ',us&appid=0ea662971e6d6306ad9a84ede4d36865'
//let user input fill in location in URL




class Results extends Component {
	render(){
		return(
			<div>
				{this.props.propertyOfResultsNamedParentsState.temp} 
				<img alt='aa' src={this.props.propertyOfResultsNamedParentsState.iconUrl} /> 
				{this.props.propertyOfResultsNamedParentsState.name}
			</div>
		)
	}
}


var WeatherSearchSubmit = React.createClass({
	getInitialState: function() {
		return({
			temp:"",
			description: "",
			iconUrl: "",
			zip: "",
			name:""
		})
	},
	weatherSearchSubmit: function(event){
		event.preventDefault();
		var url = weatherUrl + event.target[0].value + urlTail
		$.getJSON(url, (weatherData) => {
			console.log(weatherData)
			var temp = weatherData.main.temp;
			var description = weatherData.weather[0].description;
			var iconUrl = 'http://openweathermap.org/img/w/' + weatherData.weather[0].icon + ".png";
			var cityName = weatherData.name;
			this.setState({
				temp: temp,
				iconUrl: iconUrl,
				description: description,
				zip:this.props.input,
				name: cityName
			})
		})
	},
	render: function(){
		// console.log(this.state.value)
		return(
			<div>
				<form onSubmit={this.weatherSearchSubmit}>
		     		<input type="text" placeholder="Search by zip code..." />
		     		<button type="submit" className="btn btn-success">
		     			Search
		     		</button>
			   </form>
			   <Results propertyOfResultsNamedParentsState={this.state}/>
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

export default Weather 