import React, { Component } from 'react';
import $ from 'jquery';

var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&zip='
var urlTail = ',us&appid=0ea662971e6d6306ad9a84ede4d36865'
//let user input fill in location in URL




class Results extends Component {
	constructor(props) {
		super(props);
		this.state = {
			temp:"",
			description: "",
			iconUrl: ""
		}
		this.componentDidMount = this.componentDidMount.bind(this)
	}
	componentDidMount() {
		var url = weatherUrl + this.props.input + urlTail
		$.getJSON(url, (weatherData) => {
			// console.log(weatherData)
			var temp = weatherData.main.temp;
			// var temp = 3
			var description = weatherData.weather[0].description;
			var iconUrl = 'http://openweathermap.org/img/w/' + weatherData.weather[0].icon + ".png";
			this.setState({
				temp: temp,
				iconUrl: iconUrl,
				description: description
			})
		})
	}
	render(){
		return(
			<div><img alt='aa' src={this.state.iconUrl} /> </div>
		)
	}
}


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
		     		<input type="text" placeholder="Search by zip code..." />
		     		<button type="submit" className="btn btn-success">
		     			Search
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

export default Weather 