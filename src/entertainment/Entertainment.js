import React from 'react';
import './entertainment.css';
import $ from 'jquery';


//Sources to pull from: buzzfeed, entertainment-weekly, and mtv-news
//Box1 = entertainment-weekly
//Box2 = buzzfeed
//Box3 = mtv
//To display entertainment data, we can use inspiration from Pinterest. Display small images and brief summary of article.




var entertainmentURL = 'https://newsapi.org/v1/articles?source=';
var entertainmentURLTail = '&sortBy=top&apiKey=09a731f9f7e9481c9deffbec56d9b6c9';
// var entertainmentAPIKey = '09a731f9f7e9481c9deffbec56d9b6c9';





//================ Buzzfeed(BF) goes in Box2 ==========================

//Use this to map through bfArticlesArray to find TOP news. Display in Box2.
//Map through each "article" in the array and call each of them "index". Need to have key.
class BF extends React.Component{
	render(){
		return(
			<div>
				{/* Get the URL and title of each article */}
				{this.props.articles.map((article, index)=>{
					return(
						<div key={index}>
							<a href={article.url}>{article.title}</a>
						</div>
					)
				})}
			</div>

		)
	}
}


//Display BF articles in Box2.
class Box2 extends React.Component{
	constructor(props) {
		super(props);
		this.state = {buzzfeedArticlesArray:[]};
		this.componentDidMount = this.componentDidMount.bind(this);
	}	

	componentDidMount() {
		//Get BF articles using getJSON and store into bfArticlesArray
		//Specify source
		var entertainmentSource2 = 'buzzfeed';
		var url = entertainmentURL + entertainmentSource2 + entertainmentURLTail;
		$.getJSON(url, (buzzfeedArticles)=>{
			//Put articles into array and setState with it
			this.setState({buzzfeedArticlesArray: buzzfeedArticles.articles});
		});
	}
	render(){
		return(
			<BF articles={this.state.buzzfeedArticlesArray}/>
		)
	}
}


//==================== Entertainment-Weekly goes in Box1 ====================

//Map through the ewArticlesArray to find the TOP news. Display in Box1. 
class EW extends React.Component{
	render(){
		return(
			<div className="ew">
			Entertainment Weekly
				{this.props.articles.map(function(article, index){
					return (
						<div key={index} style={{border: '3px solid white', fontSize:18, backgroundColor:'lightgrey', display: 'block', width:'30%' }}>
							<a href={article.url}>{article.title}</a>
						</div>
					) 
				})}
			</div>
		)
	}
} 


//Display EW articles in Box1
class Box1 extends React.Component{
	constructor(props) {
		super(props);
		//Need an array to store data gathered from the getJSON call
		//Need an initial state
		this.state = {ewArticlesArray: []};
		//Bound "this" from componentDidMount with the "this" from "Column1"
		this.componentDidMount = this.componentDidMount.bind(this);
	}
	componentDidMount() {
		//get JSON here and use it to set state
		//put data into an array to map through it for the TOP news
		var entertainmentSource1 = 'entertainment-weekly';
		var url = entertainmentURL + entertainmentSource1 + entertainmentURLTail;
		$.getJSON(url, (ewArticles) =>{
			this.setState({ewArticlesArray: ewArticles.articles});
		});
	}
	render(){
		return(
			<div>
				{/*Return articles for entertainment-weekly through EW*/}
				<EW articles={this.state.ewArticlesArray}/>
			</div>
		)
	}
}


//============ The entire wrapper for the entertainment page ==================
var Entertainment = React.createClass({
	render: function(){
		return(
			<div style={{backgroundColor:'red'}}>
				<Box1 />
				<Box2 />
			</div>
		)
	}
})

export default Entertainment;

