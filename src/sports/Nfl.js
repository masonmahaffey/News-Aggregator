import React from 'react';
import SportsDropDownMenu from './SportsDropDownMenu';
import SportsScores from './SportsScores.js';
import $ from 'jquery'

//to be put in a config file
const newsApiKey = '275258a3655c449ba4907833f5baf08b';
const apiMain = 'https://newsapi.org/v1/articles?source=';	
const apiTail = '&apiKey='

//this returns the individual articles and pictures
class NFLArticles extends React.Component{
	render (){
		return(
			<div>
	 			{this.props.articles.map(function(article, index){
					return(
						<div key={index} className="nfl_articles">
							<div style={{marginBottom: 10, float:'left', borderBottom:'1px solid lightgrey'}} >
								<div style={{fontSize: 20, margin:'4%'}}>
									<a href={article.url}>
										<img src={article.urlToImage} alt='s' style={{width:'65%', height:'45%'}} />
									</a>
									<a style={{color:'black', fontWeight:500, fontSize:15}} href={article.url}>{article.title}</a>
								</div>
							</div>			
					</div>
					)
				})}
			</div>
		)
	}
}

//this handles ajax requests and reutrns the article component
class NFL extends React.Component{
	constructor(props){
	super(props);
	this.state = {NFLArray: []};
	this.componentDidMount = this.componentDidMount.bind(this);
	}
	componentDidMount () {
		var apiThreeSource = 'nfl-news';
		var url = apiMain + apiThreeSource + apiTail + newsApiKey;
		$.getJSON(url, (NFL) =>{
			this.setState({NFLArray: NFL.articles})
		});	
	}
	render (){
		console.log(this.state.NFLarray)
		return(
			<div className="col-xs-11 col-sm-7 col-md-3">
				<NFLArticles articles={this.state.NFLArray} />
			</div>
		);
	}
}

class Nfl extends React.Component{
	render(){
		return(
			//this returns background and all components
			<div className="packers" style={{backgroundColor:'darkgreen', height:'100vh', width:'100vw'}}>
				<SportsScores />
				<NFL />
			</div>
		)
	}
}


export default Nfl;