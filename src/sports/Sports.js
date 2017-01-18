import './sports.css';
import React from 'react';
import $ from 'jquery'; 

const newsApiKey = '275258a3655c449ba4907833f5baf08b';
const apiMain = 'https://newsapi.org/v1/articles?source=';	
const apiTail = '&apiKey='


class ArticleColOne extends React.Component{
	render (){
		return(
			<div>
	 			{this.props.articles.map(function(article, index){

			return(
				<div key={index} className="talkSportsTitles">
					{article.title}
				</div>
			)
			})}
			</div>
		)
	}
}

class FirstSportsComponent extends React.Component{
		constructor(props){
		super(props);
		this.state = {sportsArticlesOneArray: []};
		this.componentDidMount = this.componentDidMount.bind(this);
	}
	componentDidMount () {
		var apiOneSource = 'talksport';
		var url = apiMain + apiOneSource + apiTail + newsApiKey;
		$.getJSON(url, (sportsDataTalkSport) =>{
			this.setState({sportsArticlesOneArray: sportsDataTalkSport.articles})
		});	
	}
	render (){
		// console.log(this.state.sportsArticlesArray)
		return(
			<div className="col-xs-11 col-sm-6 col-md-3" style={{marginLeft:20, border:'3px solid lightgrey', height:'70vh', overflow:'scroll'}}>
				<img alt='talksports' src={require('./images/talksport')} className="sportsSourcePics" />
				<ArticleColOne articles={this.state.sportsArticlesOneArray} />
			</div>
		);
	}
}

class ArticleColTwo extends React.Component{
	render (){
		return(
			<div className="espnArticles">
	 			{this.props.articles.map(function(article, index){
					return(
						<div key={index} className="espnTitles">
							{article.title}
						</div>
					)
				})}
			</div>
		)
	}
}

class ArticlesColumnTwo extends React.Component{
	constructor(props){
		super(props);
		this.state = {sportsArticlesTwoArray: []};
		this.componentDidMount = this.componentDidMount.bind(this);
	}
	componentDidMount () {
		var apiTwoSource = 'espn';
		var url = apiMain + apiTwoSource + apiTail + newsApiKey;
		$.getJSON(url, (sportsData) =>{
			this.setState({sportsArticlesTwoArray: sportsData.articles})
		});	
	}
	render (){
		// console.log(this.state.sportsArticlesArray)
		return(
			<div className="col-xs-11 col-sm-5 col-md-5" style={{marginLeft: 40}}>
				<div className="espn_img">
					<img alt='espn' src={require('./images/ESPN.png')} className="sportsSourcePics" />
				</div>
				<ArticleColTwo articles={this.state.sportsArticlesTwoArray} />
			</div>
		);
	}
}

var SecondSportsComponent = React.createClass({
	render: function(){
		return(
			<div className='espncolumn'>
				<ArticlesColumnTwo />
			</div>
		)
	}
})

class ArticleColThree extends React.Component{
	render (){
		return(
			<div>
	 			{this.props.articles.map(function(article, index){
			return(
				<div key={index} className="foxSports">
					{article.title}
				</div>
			)
			})}
			</div>
		)
	}
}

class ArticlesColumnThree extends React.Component{
		constructor(props){
		super(props);
		this.state = {sportsArticlesThreeArray: []};
		this.componentDidMount = this.componentDidMount.bind(this);
	}
	componentDidMount () {
		var apiThreeSource = 'fox-sports';
		var url = apiMain + apiThreeSource + apiTail + newsApiKey;
		$.getJSON(url, (sportsDataFox) =>{
			this.setState({sportsArticlesThreeArray: sportsDataFox.articles})
		});	
	}
	render (){
		// console.log(this.state.sportsArticlesArray)
		return(
			<div className="col-xs-11 col-sm-7 col-md-3" style={{float:'right', margin:'auto'}}>
			<img alt='fox-sports' src={require('./images/Fox_Sports_Logo.png')}  style={{
					float:'left',width:'50%', height:'50%', margin:'20px 23% 20px'}} />
				<ArticleColThree articles={this.state.sportsArticlesThreeArray} />
			</div>
		);
	}
}

var ThirdSportsComponent = React.createClass({
	render: function(){
		return(
			<div className='foxsportscolumn'>
				<ArticlesColumnThree />
			</div>
		)
	}
})

var Sports = React.createClass({
	render: function(){
		return(
			<div>
				<FirstSportsComponent />
				<SecondSportsComponent />
				<ThirdSportsComponent />
			</div>
		)
	}
})

export default Sports