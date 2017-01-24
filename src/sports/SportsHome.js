import React from 'react'; 
import SportsScores from './SportsScores.js';
import SportsDropDownMenu from './SportsDropDownMenu';
import $ from 'jquery';
import SimpleSlider from './Slider.js';


//to be put in a config file
const newsApiKey = '275258a3655c449ba4907833f5baf08b';
const apiMain = 'https://newsapi.org/v1/articles?source=';	
const apiTail = '&apiKey='
// var giveToSliderUrl = [];
// var giveToSliderTitle = [];


class ArticleColOne extends React.Component{
	render (){
		return(
			<div>
	 			{this.props.articles.map(function(article, index){
	 		//this returns the individual talkSPORT articles and photos
			return(
				<div key={index}>
					<div key={index}>
						<div style={{margin:'auto', marginBottom: 10, textAlign:'center'}} className="row">
							<div style={{fontSize: 16, margin:'4%'}}><a target="_blank" href={article.url}><img src={article.urlToImage} alt='s'
								style={{width:'65%', height:'45%', margin:'auto', textAlign:'center', border:'1px solid black'}} /></a>
								<br/>
								<a target="_blank" style={{color:'black', fontWeight:500, fontSize:15}} href={article.url}></a>
							</div>
						</div>
						<div className="talkSportsTitles" style={{borderBottom:'1px solid lightgrey'}}>
							{article.title}
						</div>
					</div>
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
		//this returns the TalkSPORT logo header
		return(
			<div className="col-xs-11 col-sm-6 col-md-3" style={{border:'2px solid lightgrey', height:'90vh', overflow:'scroll', backgroundColor:'#F3F1F4'}}>
				{/*<img alt='talksports' src={require('./images/talksport')} className="sportsSourcePics" />*/}
				<ArticleColOne articles={this.state.sportsArticlesOneArray} />
			</div>
		);
	}
}

class ArticleColTwo extends React.Component{
	render (){
		var photos = []
			
		
		return(
		
			<div className="espn_articles">
				<SimpleSlider className="hidden-xs" articles={this.props.articles} />
	 			{this.props.articles.map(function(article, index){
	 					//return the other ESPN headlines as smaller
						return(
							<div key={index}>
								<div key={index} style={{marginBottom: 10}} className='row' style={{borderBottom:'1px solid lightgrey'}}>
									<div style={{fontSize: 16, margin:'4%'}}><a target="_blank" href={article.url}>
										<img src={article.urlToImage} alt='s' style={{width:'50%', height:'35%', border:'1px solid black'}} /></a>
										<a target="_blank" style={{color:'black', fontWeight:500, fontSize:15}} href={article.url}>{article.title}</a>
									</div>	
									<div className="espn_desc" style={{paddingBottom: 10, marginBottom: 10}}>
										{article.description}
									</div>
								</div>
							</div>
						)
					})}
			</div>
		)
	}
}
//returns entire 2nd column
class SecondSportsComponent extends React.Component{
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
		console.log(this.state.sportsArticlesTwoArray)	
	}
	render (){
		var articlesArrayTwo =[];
		this.state.sportsArticlesTwoArray.map((article, index)=>{
			articlesArrayTwo.push(article.title)
		})
		return(
			<div className="col-xs-11 col-sm-5 col-md-5 second" style={{marginLeft:20, marginRight:20}} >
				 <ArticleColTwo articles={this.state.sportsArticlesTwoArray} />
			</div>
		);
	}
}

//this returns the individual articles and pictures in Column3
class ArticleColThree extends React.Component{
	render (){
		return(
			<div>
	 			{this.props.articles.map(function(article, index){
					return(
						<div key={index} style={{borderBottom:'1px solid lightgrey', padding:10}} className="row">
								<div><a target="_blank" href={article.url}>
									<img src={article.urlToImage} alt='s'style={{width:'45%', height:'45%', border:'1px solid black'}} /></a>
									<a target="_blank" style={{color:'black', fontWeight:500, fontSize:14}} href={article.url}>{article.title}</a>
								</div>			
						</div>
					)
				})}
			</div>
		)
	}
}







//This returns third column
class ThirdSportsComponent extends React.Component{
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
			<div className="col-xs-11 col-sm-6 col-md-3 third">
				<ArticleColThree articles={this.state.sportsArticlesThreeArray} />
			</div>
		);
	}
}


//renders all components of the Sports homepage
var SportsHome = React.createClass({
render: function(){
		return(
			<div>
				{/*// <SportsScores />*/}
				<div className="sports_page">
					<FirstSportsComponent />
					<SecondSportsComponent />
					<ThirdSportsComponent />
				</div>
			</div>
		)
	}
})



export default SportsHome;



