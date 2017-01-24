import React, { Component } from 'react'
import $ from 'jquery';
import './global.css';
const newsApiKey = '275258a3655c449ba4907833f5baf08b';
const apiMain = 'https://newsapi.org/v1/articles?source=';	
const apiTail = '&apiKey='
var	sourceArray = [
		'business-insider-uk', 'ars-technica', 'associated-press', 'buzzfeed', 'bbc-news', 'bbc-sport', 'bloomberg', 'business-insider', 'the-verge', 'fox-sports', 'google-news', 'the-wall-street-journal',
		'cnbc', 'cnn', 'daily-mail', 'engadget', 'entertainment-weekly', 'financial-times', 'focus', 'fortune', 'four-four-two', 'polygon',
		'hacker-news', 'ign', 'independent', 'mashable', 'metro', 'mirror', 'mtv-news', 'mtv-news-uk', 'national-geographic', 'new-scientist', 'newsweek', 'new-york-magazine', 
		'sky-news', 'sky-sports-news', 't3n', 'talksport', 'techcrunch', 'recode', 'reddit-r-all', 'reuters', 'the-washington-post', 'time', 'usa-today', 'wired-de', 'wirtschafts-woche', 'nfl-news', 
		'techradar', 'the-economist', 'the-guardian-au', 'the-guardian-uk', 'the-huffington-post', 'the-lad-bible', 'the-new-york-times', 'the-next-web','the-sport-bible', 'the-telegraph'
]


const countries = ['Australia','United Kingdom','Great Britain','Canada','Mexico','Belize','Guatemala','Puerto Rico', 'El Salvador','Panama','Columbia', 'Germany', 'Turkey', 'China', 'Japan', 'Norway', 'Sweden', 'Denmark', 'India', 'Europe','Africa','Taiwan'];

class Countries extends Component {

	constructor(props) {
		super(props);
		this.state = {
			countryName: this.props.countryData
		}
		// this.countryLoad = this.countryLoad.bind(this);
	}
	// countryLoad(event){
	// 	event.preventDefault;

	// 	this.props.countryLoad(this.state.countryName)
	// }

	render(){
		return(
			<div>
				<a style={{cursor: 'pointer'}} onClick={this.props.countryLoad}>
					<h3 style={{color: 'white',cursor: 'pointer'}}>{this.state.countryName}</h3>
				</a>
			</div>

		)
	}
}


class Global extends Component {

	constructor(props) {
		super(props);
		this.state = {
			searchedArticlesArray : [],
			countryList : countries
		}
	    this.componentDidMount = this.componentDidMount.bind(this);		
	    this.getArticles = this.getArticles.bind(this);	
	    this.handleInputChange = this.handleInputChange.bind(this);	
	    this.countryLoadMethod = this.countryLoadMethod.bind(this);
	}

	getArticles(source){
    	var url = apiMain + source + apiTail + newsApiKey;
    	$.getJSON(url, (newsData) =>{
    		this.setState({
    			searchedArticlesArray: 
    			this.state.searchedArticlesArray.concat(newsData.articles)}
    		)
    	});		
	}

	handleInputChange(event){
		var newFilterValue = event.target.value;
		var filteredCountries = [];
		this.setState({
			countryList: []
		})
		// console.log(this.state.countryList)
		console.log(newFilterValue);
		countries.map(function(currCountry, index){
			if(currCountry.indexOf(newFilterValue) != -1){
				filteredCountries.push(currCountry)
			}
		})

			this.setState({
				countryList: filteredCountries
			})
		

	}

	componentDidMount() {
		sourceArray.map((source, index)=>{
			this.getArticles(source)
			return 'what is the point of this stupid warning'
		})
	}

	countryLoadMethod(){
		console.log('whichCountry')
		// $.getJSON('https://newsapi.org/v1/sources?language=en',function(returnData){
		// 	console.log(returnData);
		// });
	}

 // <section className="stage">
 //    <figure className="ball"><span className="shadow"></span></figure>
 //  </section>


	//Render all of the HTML/CSS
	//====================================================================================================
	render() {
		var countryRows = [];
	    this.state.countryList.map(function(currentCountry, index){
	    	countryRows.push(<Countries countryLoad={this.countryLoadMethod} countryData={currentCountry} key={index} />)
		}.bind(this))

	    // <input onChange={this.handleInputChange} type="text" className="form-control h-5" placeholder="Name Of Country" style={{marginTop: '10px'}}/>
		return(
			<div className="container" style={{paddingRight: '0px',paddingLeft: '0px',backgroundColor: 'back', width: '100vw', height: '400px'}}>
			<div style={{height: '40px', width: '100%', backgroundColor: '#4F4F4F',borderTop: '1px solid black'}}></div>
			<div className='col-sm-2' style={{backgroundColor:'#2E2B31', height:'87vh', width:' 23vw',marginRight: '-13px', float: 'left', overflow: 'scroll'}}>
				
				 <div style={{marginTop: '20px'}}>
				 	{countryRows}
				</div>
			</div>
				<div className="col-md-3" style={{float: 'right'}}>
				  <div style={{fontSize:17, height:'87vh',overflow:'scroll', backgroundColor:'#F3F1F4'}}>
			 		{	
			 		//map through the searchedArticles array
				  	//====================================================================================================
			 			this.state.searchedArticlesArray.map((article, index) => {

			 				if (index < 40) {
				 		// var searchInput = 'trump';
				 		// var indexOfTitle = article.title.toLowerCase().indexOf(searchInput)
				 		// if((indexOfTitle > -1)&&(searchInput.length>0)){

					 		var json = JSON.stringify(article.publishedAt)
					 		var jsonToDate = JSON.parse(json)
					 		var publishedTime = new Date(jsonToDate).getTime()
					 		var rightNow = new Date().getTime()
					 		var daysAgo = (rightNow - publishedTime)/1000/60/60/24
					 		var hoursAgo = daysAgo*24; 
					 		var authorText = ""
					 		var publishText = ""
					 		if(article.author){
					 			authorText = "By " + article.author + " "
					 		}
					 		if(daysAgo>1){
					 			hoursAgo = (daysAgo - Math.floor(daysAgo))*24; 
					 			publishText += Math.floor(daysAgo) + " days "
				 			};
				 			var minutesAgo = hoursAgo*60
				 			if(hoursAgo > 3){
				 				publishText += Math.floor(hoursAgo) + " hours ago"
				 			}
					 		else if(hoursAgo > 1){
					 			minutesAgo = (hoursAgo - Math.floor(hoursAgo))*60;
					 			publishText += Math.floor(hoursAgo) + " hours "
					 			publishText += Math.floor(minutesAgo) + " minutes ago"
					 		}
					 		else{
					 			publishText += Math.floor(minutesAgo) + " minutes ago"
					 		};
					 		if(daysAgo>5){
					 			publishText = ""
					 		}
					 		if(authorText.length>30){
					 			authorText=authorText.slice(0,30)+'...'
					 		}

					 		//frontText
				 			var articleTitle = article.title;
				 			//highlightText
				 			var highlightText = 'dam'
				 			//backText
				 			var backText = 'kablam'

							return(
									<div className='col-xs-12' style={{backgroundColor: '#2E2B31', borderBottom: '1px solid #222222',float: 'left',marginRight:'80%'}}>
										<div style={{backgroundColor: '#2E2B31', paddingBottom:15}} key={index}>
											<RenderSearchedNews index={index} article={article} imageUrl={article.urlToImage} url={article.url} articleTitle={articleTitle} highlightText={highlightText}
												backText={backText} authorText={authorText} publishText={publishText} />
										</div>
									</div>
							)			 		
			 			}
			 			// else{
			 			// 	return null	
			 			// }
					})}
				</div>

				</div>
			</div>
		)		
	}
}



var newZ = 0

//this is the rendered news in on the search box
class RenderSearchedNews extends Component{
	constructor(props) {
		super(props);
		this.state = {
			displayVariable: 'none',
			zIndex: newZ,
			loadCount: 0
		}
		this.openOnClick = this.openOnClick.bind(this)
	}
	openOnClick(){
		newZ++
		this.setState({
			displayVariable: 'block',
			zIndex: newZ
		})
	}

	setInitialWindow(){
		if(this.props.index === 0){
			console.log("==")
			newZ++
			this.setState({
				displayVariable: 'block',
				zIndex: newZ
			})
		}
	}

	render(){

		if (this.state.loadCount < 1) {
			this.setInitialWindow()
			this.setState({
				loadCount: 1
			});
		}

		return(
			<div style={{backgroundColor: '#2E2B31'}} style={{marginTop: '16px'}}>
				<div className='article-title' onClick={this.openOnClick}>
					<div style={{color:'white'}}>{this.props.articleTitle}</div>
					<div style={{marginLeft:2, marginTop:5, fontSize:13, color:'darkgrey'}}>
						<div style={{float:'left'}}>{this.props.authorText}</div>
						<div style={{float:'right'}}>{this.props.publishText}</div>
					</div>
				</div>

				<SearchedNewsDescription imageUrl={this.props.imageUrl} url={this.props.url} frontText={this.props.frontText} 
				highlightText={this.props.highlightText} backText={this.props.backText} authorText={this.props.authorText} 
				publishText={this.props.publishText} open={this.state.displayVariable} zIndex={this.state.zIndex}
				article={this.props.article}/>
			</div>
		)
		if (this.props.index == 0) {
			this.openOnClick()
		}
	}
}
class SearchedNewsDescription extends Component{
	render(){
		return(
			<div className='article-description' style={{zIndex:this.props.zIndex, display:this.props.open, 
				position:'fixed', right: '27%', top:117, height:'90vh', 
				width:'48vw', backgroundColor:'white',marginTop: '-7px'}}>
				
				<div className='col-md-12' style={{marginTop:'2vh'}}>
					<img src={this.props.imageUrl} alt='a' style={{width:'100%',height:'100%'}}/>
				</div>

				<div className='col-md-12' style={{marginTop:'2vh',}}>
					<div style={{fontSize:22,float: 'left', fontWeight: 'bold', marginBottom: -3, marginLeft: 8}}><h2>{this.props.article.title}</h2></div>
					<div style={{fontSize:18, float: 'left', marginBottom:7}}><p>{this.props.article.description}</p></div>
					
				</div>
				<div className="col-sm-11" style={{fontSize: 16, color:'lightgrey'}}>
					<div style={{float:'left',fontSize: 16, color:'grey', marginBottom:20, marginRight: 10}}>{this.props.article.author}</div>
					<div style={{float:'left',fontSize: 16, color:'darkgrey', marginBottom:20}}>{this.props.publishText}</div>
					<div style={{float: 'right'}}><a href={this.props.url}>Read Full Article</a></div>
				</div>
			</div>
		)
	}
}


export default Global;


// var countryRows = [];
//       this.state.countryList.map(function(currentCity, index){

//         createMarker(currentCity)
//         cityRows.push(<GoogleCity zoomFunction={this.zoomToCity} cityObject={currentCity} key={index} />);
// }.bind(this));

// {countryRows}
								// <img src={article.urlToImage} alt='a' style={{width:'100%', height:'100%'}}/>
								// <a href={article.url} style={{fontSize:15}}>	
								// 	{frontText}
								// 	<span style={{backgroundColor:'yellow'}}>{highlightText}</span>
								// 	{backText}
								// </a><br/>
								// <div style={{fontSize:13, color:'grey'}}><span style={{float:'left'}}>{authorText}</span><span style={{float:'right'}}>{publishText}</span></div>

