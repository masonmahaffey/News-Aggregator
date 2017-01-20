import React from 'react';
import '../index.css';
import $ from 'jquery'
import Weather from './Weather'
import TopNewsByCategory from './TopNewsByCategory'
import MainArticles from './MainArticles'
const newsApiKey = '275258a3655c449ba4907833f5baf08b';
const apiMain = 'https://newsapi.org/v1/articles?source=';	
const apiTail = '&apiKey='


var BreakingNews = React.createClass({
	getInitialState: function() {
		return({articlesArray: []})
	},
	componentDidMount: function() {
		var apiSource = 'bbc-news';
		var url = apiMain + apiSource + apiTail + newsApiKey;
		$.getJSON(url, (newsData) =>{
			this.setState({articlesArray: newsData.articles})
		});		
	},
	render: function(){
		return(
			<div className='c1c1'>
				<div className='scrollingNews hidden-xs'>
				{this.state.articlesArray.map(function(article, index){
					return(
						<div key={index} style={{fontSize:17, marginLeft:40, color:'white', display: 'inline-block'}}>
							{article.description}
						</div>
					)	
				})}
				</div>
			</div>
		);
	}
})



var SideBar = React.createClass({
	render: function(){
		return(
			<div style={{height:'100vw', width: '100%', backgroundColor:'#2E2B31', color: 'white'}}>
				<Weather />
				<TopNewsByCategory />
			</div>
		)
	}
})


class Twitter extends React.Component{
	render(){
		return(
			<div>
				
			</div>
		)
	}
}
var General = React.createClass({
	render: function(){
		return(
			<div style={{backgroundColor:'white'}}>
				{/*<BreakingNews />*/}
				<div className='col-md-2 hidden-xs hidden-sm' style={{height:'94vh', position:'fixed', paddingLeft:0, paddingRight:0, overflow:'scroll'}}>
					<SideBar />
				</div>
				<div className='col-md-7 col-md-offset-2'>
					<Twitter />
				</div>
				<div className='col-md-3 hidden-xs hidden-sm' style={{paddingLeft: 0, paddingRight:0}}>
						<MainArticles />
				</div>
			</div>
		)
	}
})

export default General;
