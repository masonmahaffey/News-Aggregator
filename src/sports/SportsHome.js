import React from 'react'; 
import SportsScores from './SportsScores.js';
import SportsDropDownMenu from './SportsDropDownMenu';
import $ from 'jquery'

//to be put in a config file
const newsApiKey = '275258a3655c449ba4907833f5baf08b';
const apiMain = 'https://newsapi.org/v1/articles?source=';	
const apiTail = '&apiKey='


class ArticleColOne extends React.Component{
	render (){
		return(
			<div>
	 			{this.props.articles.map(function(article, index){
	 		//this returns the individual talkSPORT articles and photos
			return(
				<div key={index}>
					<div style={{marginBottom: 10, float:'left'}}>
						<div style={{fontSize: 16, margin:'4%'}}><a href={article.url}><img src={article.urlToImage} alt='s'
							style={{width:'65%', height:'45%'}} /></a>
							<br/>
							<a style={{color:'black', fontWeight:500, fontSize:15}} href={article.url}></a>
						</div>
					</div>
					<div className="talkSportsTitles" style={{borderBottom:'1px solid lightgrey'}}>
						{article.title}
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
			<div className="col-xs-11 col-sm-6 col-md-3" style={{border:'3px solid lightgrey', height:'90vh', overflow:'scroll', backgroundColor:'#F3F1F4'}}>
				{/*<img alt='talksports' src={require('./images/talksport')} className="sportsSourcePics" />*/}
				<ArticleColOne articles={this.state.sportsArticlesOneArray} />
			</div>
		);
	}
}

class ArticleColTwo extends React.Component{
	//this returns ESPN individual articles and photos
	render (){
		return(
			<div className="espn_articles">
	 			{this.props.articles.map(function(article, index){
	 				if(index == 0){
	 					return(
	 						<div key={index}>
	 							{/*return the first ESPN headline as a BIG picture*/}
								<div key={index} style={{textAlign:"center"}}>
									<div style={{marginBottom: 5, float:'left'}} >
										<div style={{fontSize: 30, margin:'4%'}}><a href={article.url}><img src={article.urlToImage} alt='s'
											style={{width:'100%', height:'65%', border: '1px solid black'}} /></a>
											<a className="big_espn_title" href={article.url}>{article.title}</a>
										</div>
									</div>		
									<div className="espn_desc" style={{marginBottom: 10, borderBottom:'1px solid lightgrey'}}>
										{article.description}
									</div>
								</div>
							</div>
	 					)

	 				}else if(index !== 0){
	 					//return the other ESPN headlines as smaller
						return(
							<div key={index}>
								<div style={{marginBottom: 10}} >
									<div style={{fontSize: 16, margin:'4%'}}><a href={article.url}><img src={article.urlToImage} alt='s'
										style={{width:'65%', height:'45%'}} /></a>
										<a style={{color:'black', fontWeight:500, fontSize:15}} href={article.url}>{article.title}</a>
									</div>
								</div>		
								<div className="espn_desc" style={{marginBottom: 10, borderBottom:'1px solid lightgrey'}}>
									{article.description}
								</div>
							</div>
						)
					}
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
	}
	render (){
		var articlesArrayTwo =[];
		this.state.sportsArticlesTwoArray.map((article, index)=>{
			articlesArrayTwo.push(article.title)
		})
		return(
			<div className="col-xs-11 col-sm-5 col-md-5" style={{margin:'auto', backgroundColor:'#F3F1F4', borderRight:'3px solid lightgrey', borderLeft:'3px solid lightgrey', height:'90vh', overflow:'scroll'}}>
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
						<div key={index} style={{margin:'auto'}}>
								<div style={{float:'left'}}><a href={article.url}>
									<img src={article.urlToImage} alt='s'style={{width:'45%', height:'35%'}} /></a>
									<a style={{color:'black', fontWeight:500, fontSize:15}} href={article.url}></a>
								</div>			
								<div className="foxSports" style={{float:'right', marginBottom:'8px'}}>
									{article.title}
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



