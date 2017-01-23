import React, { Component } from 'react';
import $ from 'jquery';

var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&zip='
var urlTail = ',us&appid=0ea662971e6d6306ad9a84ede4d36865'

//rendering weather, styling done here
class Results extends Component {
	render(){
		var weather = this.props.propertyOfResultsNamedParentsState
		var today = new Date();
		var todayString = today.toDateString().slice(0,10)
		var windDirection = ''
		// logic for wind direction
		if(weather.wind > 45){windDirection='East'
		}else if(weather.wind > 135){windDirection='South'
		}else if(weather.wind > 225){windDirection='West'
		}else{windDirection='North'}	
		return(
			<div style={{fontSize:18, color:'white', paddingTop:10, paddingBottom:10}}>
				<div style={{position:'relative'}}>
					<div >
						<div style={{fontSize:21}}> {todayString} </div>
						<div> {weather.name} </div> 
					</div>
					<div style={{width:60, height:60, margin:'auto', textAlign:'center'}}>
						<img style={{margin:'auto', height:'100%', width:'100%'}} alt='' src={weather.iconUrl} /> 
					</div>
				</div>
				<div style={{marginBottom:10}}>
					<div style={{border:'3px solid white', display:'inline-block', padding:5, borderRadius:'50%', fontSize:20}}>{Math.floor(weather.temp)}&deg;</div> 
					<span style={{fontSize:20, marginLeft:15, color:'#DD3939'}}>{Math.floor(weather.max)} &deg;</span> / <span style={{fontSize:18,color:'#0099FF'}}>{Math.floor(weather.min)} &deg;</span></div>
				<div >{weather.description} </div>
				<div> Humidty: {weather.humidity}% </div>
				<div> Wind: {windDirection} at {Math.round(weather.windSpeed)} MPH</div>
			</div>
		)
	}
}

// getJSON for weather data and passing it down as props
var WeatherSearchSubmit = React.createClass({
	getInitialState: function() {
		return({
			temp:"", description: "", iconUrl: "",
			zip: "", name:"", humidity:"", max:"",
			min:"", wind:"", windSpeed:""
		})
	},
	componentDidMount: function() {
		var url = weatherUrl + 30033 + urlTail
		//defaulted weather to the zipcode 30033
		$.getJSON(url, (weatherData) => {
			var temp = weatherData.main.temp;
			var description = weatherData.weather[0].description;
			var iconUrl = 'http://openweathermap.org/img/w/' + weatherData.weather[0].icon + ".png";
			var cityName = weatherData.name;
			this.setState({
				temp: temp,
				iconUrl: iconUrl,
				description: description,
				zip:this.props.input,
				name: cityName,
				humidity: weatherData.main.humidity, 
				max: weatherData.main.temp_max+1,
				min: weatherData.main.temp_min-1,
				wind: weatherData.wind.deg,
				windSpeed: weatherData.wind.speed
			})
		})
	},
	weatherSearchSubmit: function(event){
		//getting weather data on submit of the weather input box
		event.preventDefault();
		var url = weatherUrl + event.target[0].value + urlTail
		$.getJSON(url, (weatherData) => {
			var temp = weatherData.main.temp;
			var description = weatherData.weather[0].description;
			var iconUrl = 'http://openweathermap.org/img/w/' + weatherData.weather[0].icon + ".png";
			var cityName = weatherData.name;
			this.setState({
				temp: temp,
				iconUrl: iconUrl,
				description: description,
				zip:this.props.input,
				name: cityName,
				humidity: weatherData.main.humidity, 
				max: weatherData.main.temp_max,
				min: weatherData.main.temp_min,
				wind: weatherData.wind.deg,
				windSpeed: weatherData.wind.speed
			})
		})
	},
	render: function(){
		// changing background animation depening on current weather.description
		// var weatherSource = './images/'
		// if(this.state.description.indexOf('cloud')>-1){
		// 	weatherSource+='cloud.png'
		// }else if(this.state.description.indexOf('mist')>-1){
		// 	weatherSource+='mist.png'
		// }else if(this.state.description.indexOf('rain')>-1){
		// 	weatherSource+='rain.png'
		// }else if(this.state.description.indexOf('snow')>-1){
		// 	weatherSource+='snow.png'
		// }else if(this.state.description.indexOf('thunder')>-1){
		// 	weatherSource+='thunder.png'}			
		// <img alt=' ' src={require('./images/mist.png')}/>
		return(
			<div style={{paddingBottom:10}}>
				<form onSubmit={this.weatherSearchSubmit} style={{padding:10}}>
		     		<input type="text" className='form-control' placeholder="Weather search by zip code" />
			   </form>
			   <div className='weather-move' style={{position:'absolute'}}></div>
			   <div className='weather-wrapper' style={{textAlign:'center', backgroundColor: '#2E2B31', width:'100%', margin:'auto'}}>
					<Results propertyOfResultsNamedParentsState={this.state}/>

			   </div>
		   </div>
		)
	}
})

// weather boss
var Weather = React.createClass({
	render: function(){
		return(
			<WeatherSearchSubmit />
		)
	}
})

export default Weather 