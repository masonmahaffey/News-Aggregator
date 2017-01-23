import React from 'react';
import './entertainment.css';
import $ from 'jquery';


//Sources to pull from: buzzfeed, entertainment-weekly, and mtv-news
//Box1 = entertainment-weekly
//Box2 = buzzfeed
//Box3 = mtv
//Box4 = mtv-uk
//Box5 = daily-mail


//To display entertainment data, we can use inspiration from Pinterest. Display small images and brief summary of article.
//To make it visually appealing, we need more articles and smaller images.




var entertainmentURL = 'https://newsapi.org/v1/articles?source=';
var entertainmentURLTail = '&sortBy=top&apiKey=09a731f9f7e9481c9deffbec56d9b6c9';
// var entertainmentAPIKey = '09a731f9f7e9481c9deffbec56d9b6c9';


//=========================== Daily-Mail goes in Box5 ================================
class Box5 extends React.Component{
	constructor(props) {
		super(props);
		this.state = {dailyMailArticlesArray:[]};
		this.componentDidMount = this.componentDidMount.bind(this);
	}
	componentDidMount() {
		var entertainmentSource5 = 'daily-mail';
		var url = entertainmentURL + entertainmentSource5 + entertainmentURLTail;
		$.getJSON(url, (dailyMailArticles)=>{
			this.setState({dailyMailArticlesArray: dailyMailArticles.articles});
		});
	}
	render(){
		return(
			<EW  articles={this.state.dailyMailArticlesArray}/>
		)
	}
}

//============================ MTV-UK goes in Box4 ===================================
class Box4 extends React.Component{
	constructor(props) {
		super(props);
		this.state = {mtvUKArticlesArray:[]};
		this.componentDidMount = this.componentDidMount.bind(this); 
	}
	componentDidMount() {
		var entertainmentSource4 = 'mtv-uk';
		var url = entertainmentURL + entertainmentSource4 + entertainmentURLTail;
		$.getJSON(url, (mtvUKArticles)=>{
			this.setState({mtvUKArticlesArray: mtvUKArticles.articles});
		});
	}
	render(){
		return(
			<EW articles={this.state.mtvUKArticlesArray}/>
		)
	}
}


//============================ MTV goes in Box3 ===================================

//Display MTV articles in Box3
class Box3 extends React.Component{
	constructor(props) {
		super(props);
		this.state = {mtvArticlesArray: []};
		this.componentDidMount = this.componentDidMount.bind(this);
	}
	componentDidMount() {
		//Get MTV top articles using getJSON and push them into array for mapping. Set state using array.
		var entertainmentSource3 = 'mtv-news';
		var url = entertainmentURL + entertainmentSource3 + entertainmentURLTail;
		$.getJSON(url, (mtvArticles)=>{
				this.setState({mtvArticlesArray: mtvArticles.articles});
			// console.log(mtvArticles)	
		});		
	}
	render(){
		return(
			<EW articles={this.state.mtvArticlesArray}/>
		)
	}
}




//======================= Buzzfeed(BF) goes in Box2 ==========================


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
			// console.log(buzzfeedArticles)	
		});
	}
	render(){
		return(
			<EW articles={this.state.buzzfeedArticlesArray}/>
		)
	}
}


//==================== Entertainment-Weekly goes in Box1 ====================

//Map through the ewArticlesArray to find the TOP news. Display in Box1. 
class EW extends React.Component{
	render(){
		return(
			<div className="ew">
				{this.props.articles.map(function(article, index){
					return (
						<div className='eachArticle col-lg-3 col-md-4 col-sm-6 col-xs-12' key={index} style={{border: '3px solid white', display: 'block', width:'100%', padding:'15px', marginBottom:'20px', borderRadius: '3%'}}>
							<img alt='a' src={article.urlToImage} style={{width:'100%', height:'100%', borderRadius: '3%'}}/>
							<div className='col-xs-6 col-sm-7 col-lg-8'>
								<a href={article.url} style={{font:'Helvetica', fontSize:16, fontWeight:'bold', color:'black', paddingLeft:'0'}} >{article.title}</a> 
							</div>
							<br/>
							<div className='col-xs-12' style={{fontSize:12, width: '100%'}}>
								{article.description}
							</div>

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
				{/* Return articles through EW */}
				{/* EW can actually be resused for the other sources */}
				<EW articles={this.state.ewArticlesArray}/>
			</div>
		)
	}
}


//============ The entire wrapper for the entertainment page ==================
var Entertainment = React.createClass({
	render: function(){
		return(
			<div>
				<div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'> 
					<Box1 />
				</div>
				<div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'> 
					<Box2 />
				</div>
				<div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'> 
					<Box3 />
				</div>
				<div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
					<Box4 />
				</div>
				<div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
					<Box4 />
				</div>
				<div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
					<Box5 />
				</div>
			</div>
		)
	}
})

export default Entertainment;


