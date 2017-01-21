import React, { Component } from 'react'
import $ from 'jquery';
import './searchResults.css';
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


class LatestNews extends Component{
	render() {
		return(
		<div style={{padding:7, borderLeft:'1px solid #ddd',borderBottom:'5px solid black',
			fontFamily:'Days One', fontSize:25, textAlign:'center'}}>
			Search Results
		</div>
		)
	}
}

class Description extends Component{
	render(){
		var article = this.props.article
		var href='https://www.facebook.com/sharer/sharer.php?u=' + article.url 
			return(
			<div style={{padding:'1%'}}>
				<div style={{position:'absolute', right:-33, top:50}}><img style={{width:30, height:30}} src={require('../arrow.png')}/></div>
				<div style={{marginTop:50}}>
					<img src={this.props.article.urlToImage} alt='not found' style={{width:'100%',height:'120%',marginBottom:20}}/>
					<div style={{position:'absolute', top:65, right:3}}><a href={href}><img style={{height:45, width:60}} className='image-hover' src={require('../facebook.png')}/></a></div>
				</div>
				<div style={{fontSize:30, marginBottom:16}}>{article.title}</div>
				<div style={{fontSize:20, marginBottom:15}}>{article.description}</div>
				<div style={{fontSize:20, marginBottom:10, color:'grey', textAlign:'right', width:'100%'}}>
				<a href={article.url}><img className='image-hover' style={{width:'30%', height:'30%'}} src={require('../read.jpg')}/></a>{this.props.article.author}
				</div>
			</div>
		)
	}
}

class JustTitles extends Component{
	constructor(props) {
		super(props);
		this.childOnClick=this.childOnClick.bind(this)
		this.state={
			read: ''
		}
	}
	childOnClick(){
		this.props.onClick(this.props.article, this.props.article.publishedAt)
		this.setState({
			read: 'seen'
		})
	}
	render(){
		var article = this.props.article
		var json = JSON.stringify(article.publishedAt)
		var jsonToDate = JSON.parse(json)
		var publishedTime = new Date(jsonToDate).getTime()
		var rightNow = new Date().getTime()
		var daysAgo = (rightNow - publishedTime)/1000/60/60/24
		var hoursAgo = daysAgo*24; 
		var authorText = ""
		var publishText = ""
		if(article.author){authorText = "By " + article.author + " "}
		if(daysAgo>1){
			hoursAgo = (daysAgo - Math.floor(daysAgo))*24; 
			publishText += Math.floor(daysAgo) + " days "
		};
		var minutesAgo = hoursAgo*60
		if(hoursAgo > 3){
			publishText += Math.floor(hoursAgo) + " hours ago"
		}else if(hoursAgo > 1){
			minutesAgo = (hoursAgo - Math.floor(hoursAgo))*60;
			publishText += Math.floor(hoursAgo) + " hours "
			publishText += Math.floor(minutesAgo) + " minutes ago"
		}else{publishText += Math.floor(minutesAgo) + " minutes ago"};
		if(daysAgo>5){publishText = ""}
		if(authorText.length>30){authorText=authorText.slice(0,30)+'...'}
			
		return(
			<div className='click-article' onClick={this.childOnClick} style={{padding:'10px 20px', borderLeft:'1px solid #ddd',borderBottom:'2px solid #ddd'}}>
				<div style={{fontSize:16}}>{this.props.article.title}<span style={{color:'blue', marginRight:6,fontSize:13,float:'right'}}>{this.state.read}</span></div>
				<div style={{marginLeft:2, marginTop:5, fontSize:13, color:'grey'}}>
					<div style={{float:'left'}}>{authorText}</div>
					<div style={{float:'right', marginRight:10}}>{publishText}</div>
				</div>
				<br/>
			</div>
		)
	}
}

class SearchResults extends Component{
	constructor(props) {
		super(props);
		this.state = {
			articlesArray : [],
			article:{

			}
		}
    this.componentDidMount = this.componentDidMount.bind(this);		
    this.parentOnClick = this.parentOnClick.bind(this);		
	}
	parentOnClick(article){
		this.setState({
			article:article
		})
	}
	componentDidMount() {
		sourceArray.map((source, index)=>{
			var url = apiMain + source + apiTail + newsApiKey;
    		$.getJSON(url, (data) =>{
    			this.setState({
    				articlesArray:this.state.articlesArray.concat(data.articles),
    				article:data.articles[1]
    			})
    		})
    	})
	}	
	render(){
		var justTitles=[<LatestNews />]
		this.state.articlesArray.map((article, index)=>{
			justTitles.push(<JustTitles onClick={this.parentOnClick} key={index} article={article}/>)
		})
		return(
			<div>
				<div className='col-md-offset-3 col-md-6'style={{marginTop:3}}>
					<Description article={this.state.article} />
				</div>
				<div className='col-md-3' style={{marginTop:40,
				padding:0, marginRight:0, backgroundColor:'#F3F1F4', borderLeft:'1px solid #ddd', 
				height:'100vh', position:'fixed', right:0, overflow:'scroll'}}>
					{justTitles}
				</div>
			</div>
		)
	}
}
// class SearchResults extends Component{
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			searchedArticlesArray : []
// 		}
//     this.componentDidMount = this.componentDidMount.bind(this);		
//     this.getArticles = this.getArticles.bind(this);		
// 	}
// 	getArticles(source){
//     	var url = apiMain + source + apiTail + newsApiKey;
//     	$.getJSON(url, (newsData) =>{
//     		this.setState({
//     			searchedArticlesArray: 
//     			this.state.searchedArticlesArray.concat(newsData.articles)}
//     		)
//     	});		
// 	}
// 	componentDidMount() {
// 		sourceArray.map((source, index)=>{
// 			this.getArticles(source)
// 			return 'what is the point of this stupid warning'
// 		})
// 	}
// 	render(){
// 		return(
// 			<div style={{fontSize:17, height:'93vh', float:'right',overflow:'scroll', backgroundColor:'#F3F1F4'}}>
// 			 	{this.state.searchedArticlesArray.map((article, index)=>{
// 			 		var searchInput = this.props.params.newsToSearchFor.toLowerCase()
// 			 		var indexOfTitle = article.title.toLowerCase().indexOf(searchInput)
// 			 		if((indexOfTitle > -1)&&(searchInput.length>0)){
// 				 		var json = JSON.stringify(article.publishedAt)
// 				 		var jsonToDate = JSON.parse(json)
// 				 		var publishedTime = new Date(jsonToDate).getTime()
// 				 		var rightNow = new Date().getTime()
// 				 		var daysAgo = (rightNow - publishedTime)/1000/60/60/24
// 				 		var hoursAgo = daysAgo*24; 
// 				 		var authorText = ""
// 				 		var publishText = ""
// 				 		if(article.author){authorText = "By " + article.author + " "}
// 				 		if(daysAgo>1){
// 				 			hoursAgo = (daysAgo - Math.floor(daysAgo))*24; 
// 				 			publishText += Math.floor(daysAgo) + " days "
// 				 		};
// 				 		var minutesAgo = hoursAgo*60
// 				 		if(hoursAgo > 3){
// 				 			publishText += Math.floor(hoursAgo) + " hours ago"
// 				 		}else if(hoursAgo > 1){
// 				 			minutesAgo = (hoursAgo - Math.floor(hoursAgo))*60;
// 				 			publishText += Math.floor(hoursAgo) + " hours "
// 				 			publishText += Math.floor(minutesAgo) + " minutes ago"
// 				 		}else{publishText += Math.floor(minutesAgo) + " minutes ago"};
// 				 		if(daysAgo>5){publishText = ""}
// 				 		if(authorText.length>30){authorText=authorText.slice(0,30)+'...'}
// 			 			var frontText = article.title.slice(0, indexOfTitle)
// 			 			var highlightText = article.title.slice(indexOfTitle, indexOfTitle + searchInput.length)
// 			 			var backText = article.title.slice(indexOfTitle + searchInput.length)
// 						return(
// 							<div className='col-xs-offset-9 col-xs-3' style={{backgroundColor: '#2E2B31', borderBottom: '1px solid #222222'}}>
// 							<div style={{backgroundColor: '#2E2B31', paddingBottom:15}} key={index}>
// 								<RenderSearchedNews article={article} imageUrl={article.urlToImage} url={article.url} frontText={frontText} highlightText={highlightText}
// 									backText={backText} authorText={authorText} publishText={publishText} />
// 							</div>
// 							</div>
// 						)			 		
// 			 		}else{
// 			 			return null	
// 			 		}
// 				})}
// 			</div>
// 		)
// 	}
// }
// var newZ = 0
// class RenderSearchedNews extends Component{
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			displayVariable: 'none',
// 			zIndex: newZ
// 		}
// 		this.openOnClick = this.openOnClick.bind(this)
// 	}
// 	openOnClick(){
// 		newZ++
// 		this.setState({
// 			displayVariable: 'block',
// 			zIndex: newZ
// 		})
// 	}
// 	render(){
// 		return(
// 			<div style={{backgroundColor: '#2E2B31'}}>
// 				<div className='article-title' onClick={this.openOnClick}>
// 					<div>{this.props.frontText}
// 						<span style={{backgroundColor:'yellow', color:'black'}}>{this.props.highlightText}</span>
// 						{this.props.backText}
// 					</div>
// 					<div style={{marginLeft:2, marginTop:5, fontSize:13, color:'lightgrey'}}>
// 						<div style={{float:'left'}}>{this.props.authorText}</div>
// 						<div style={{float:'right'}}>{this.props.publishText}</div>
// 					</div>
// 				</div>

// 				<SearchedNewsDescription imageUrl={this.props.imageUrl} url={this.props.url} frontText={this.props.frontText} 
// 				highlightText={this.props.highlightText} backText={this.props.backText} authorText={this.props.authorText} 
// 				publishText={this.props.publishText} open={this.state.displayVariable} zIndex={this.state.zIndex}
// 				article={this.props.article}/>
				
// 			</div>
// 		)
// 	}
// }
// class SearchedNewsDescription extends Component{
// 	render(){
// 		return(
// 			<div className='article-description' style={{zIndex:this.props.zIndex, display:this.props.open, 
// 				position:'fixed', border:'1px solid #ddd', paddingLeft:15, left:0, top:100, height:'93vh', 
// 				width:'70vw', backgroundColor:'white'}}>
// 				<div className='col-md-5' style={{marginTop:'11vh'}}>
// 					<img src={this.props.imageUrl} alt='a' style={{width:'100%',height:'100%'}}/>
// 				</div>
// 				<div className='col-md-6' style={{marginTop:'10vh'}}>
// 					<div style={{fontSize:30, marginBottom:20}}>{this.props.article.title}</div>
// 					<div style={{fontSize:20, marginBottom:20}}>{this.props.article.description}</div>
					
					
// 				</div>
// 				<div className="col-sm-11" style={{fontSize:18, color:'grey', marginTop:20}}>
// 					<div style={{float:'left',fontSize:20, marginBottom:20}}>{this.props.article.author}</div>
// 					<div style={{float:'right',fontSize:20, marginBottom:20}}>{this.props.publishText}</div>
// 				</div>
// 				<div className="col-sm-11" style={{fontSize:22}} >
// 					<a href={this.props.url}>Read Full Article</a>
// 				</div>
// 			</div>
// 		)
// 	}
// }


export default SearchResults
								// <img src={article.urlToImage} alt='a' style={{width:'100%', height:'100%'}}/>
								// <a href={article.url} style={{fontSize:15}}>	
								// 	{frontText}
								// 	<span style={{backgroundColor:'yellow'}}>{highlightText}</span>
								// 	{backText}
								// </a><br/>
								// <div style={{fontSize:13, color:'grey'}}><span style={{float:'left'}}>{authorText}</span><span style={{float:'right'}}>{publishText}</span></div>
