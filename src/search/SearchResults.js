import React, { Component } from 'react'
import $ from 'jquery';
import './searchResults.css';
const newsApiKey = '275258a3655c449ba4907833f5baf08b';
const apiMain = 'https://newsapi.org/v1/articles?source=';	
const apiTail = '&apiKey='
var	sourceArray = [
		'buzzfeed', 'bbc-news', 'bbc-sport', 'business-insider', 'fox-sports', 'google-news', 'the-wall-street-journal',
		'cnbc', 'cnn', 'daily-mail', 'entertainment-weekly', 'financial-times', 'fortune', 
		'metro','mtv-news', 'national-geographic', 'new-scientist', 'newsweek', 'new-york-magazine', 
		'sky-news', 'sky-sports-news', 'techcrunch', 'reddit-r-all', 'reuters', 'the-washington-post', 'time', 'usa-today', 'nfl-news', 
		'techradar',  'the-guardian-uk', 'the-huffington-post', 'the-new-york-times','the-sport-bible',
	]
// class KeyWords extends Component{
// 	constructor(props) {
// 		super(props);
// 		this.state ={
// 			wordString : ''
// 		}
// 		this.componentDidMount = this.componentDidMount.bind(this)
// 	}
// 	componentDidMount() {	
// 		var wordString = ''
// 		for(let i = 0; i < this.props.articles; i++){
//     		wordString += this.props.articles[i].title
//     		console.log('a')
//     		this.setState({
//     		wordString:wordString
//     	})
//     	}
    	
    		
// 	}
// 	render() {
		
// 		return(
// 			<div>{findKeyWords(this.state.wordString)}</div>
// 		)
// 	}
// }

// function findKeyWords(wordString){
// 	wordString = wordString.replace(/\,|\.|\'|\!|\?| a| is| to| the| at| from| us| in| for| with| on| of| \|| his| her| by| over| what| first| that| out| us| fox|/gi, "")
// 	var wordArray = wordString.toLowerCase().split(' ')
// 	var topTenCounters = 6
// 	var topTenWords = []
// 	for(let i = 0; i < wordArray.length; i++){
// 		var wordCounter = 0
// 		var word = wordArray[i]
// 		for(let j = 0; j < wordArray.length; j++){
// 			if(wordArray[i] === wordArray[j]){
// 				wordCounter++;
// 			}
// 		}	
// 			if((wordCounter > topTenCounters)&&(topTenWords.indexOf(word) == -1)){
// 				topTenWords.push(word);
// 			}
		
// 	}
// 	return topTenWords.join(", ")
// }






//header for news feed on the right (child of news feed)  / hidden in mobile
class LatestNews extends Component{
	render() {
		return(
		<div className='hidden-xs' style={{padding:7, borderLeft:'1px solid #ddd',borderBottom:'5px solid black',
			fontFamily:'Days One', fontSize:25, textAlign:'center'}}>
			Search Results
		</div>
		)
	}
}

//mid section of page, Description
class Description extends Component{
	render(){
		var article = this.props.article
		//facebook share link
		var href='https://www.facebook.com/sharer/sharer.php?u=' + article.url 
			return(
			<div style={{padding:'1%'}}>
				<div style={{position:'absolute', right:-33, top:10}}><img alt='what' style={{width:30, height:30}} src={require('../arrow.png')}/></div>			
				<div style={{marginTop:5}}>
					<img src={this.props.article.urlToImage} alt='not found' style={{width:'100%',height:'120%',marginBottom:20}}/>
					<div style={{position:'absolute', top:15, right:0}}><a href={href}><img alt='what' style={{height:45, width:60}} className='image-hover' src={require('../facebook.png')}/></a></div>
				</div>
				<div style={{fontSize:30, marginBottom:24}}>{article.title}</div>
				<div style={{fontSize:20, marginBottom:24}}>{article.description}</div>
				<div style={{fontSize:20, marginBottom:10, color:'grey', textAlign:'right', width:'100%'}}>
					<a href={article.url}><img alt='what' className='image-hover' style={{width:'30%', height:'30%'}} src={require('../read.jpg')}/></a>{this.props.article.author}
				</div>
			</div>
		)
	}
}

//News Feed on right
class JustTitles extends Component{
	constructor(props) {
		super(props);
		this.childOnClick=this.childOnClick.bind(this)
		// changes color of news feed when clicked
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
		//logic for changing json date object to a string, then math for posted time
		var article = this.props.article
		var json = JSON.stringify(article.publishedAt)
		var jsonToDate = JSON.parse(json)
		var publishedTime = new Date(jsonToDate).getTime()
		var rightNow = new Date().getTime()
		var daysAgo = (rightNow - publishedTime)/1000/60/60/24
		var hoursAgo = daysAgo*24; 
		var authorText = ""
		var publishText = ""

		//creating author string and published time string to display, order of lines must stay same.
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
		
		//onclick change all font colors to lightgrey
		var readColor = 'black'
		var authorColor = 'grey'
		var keyWordColor = 'black'
		var keyBg = 'yellow'
		if(this.state.read === 'seen'){readColor='lightgrey'; authorColor='lightgrey'; keyWordColor='lightgrey'; keyBg='none'}

		return(
			<div className='click-article' onClick={this.childOnClick} style={{color:readColor, padding:'10px 20px', borderLeft:'1px solid #ddd',borderBottom:'2px solid #ddd'}}>
				<div style={{fontSize:16}}>
					<div>{this.props.frontText}
						<span style={{backgroundColor:keyBg, color:keyWordColor}}>{this.props.highlightText}</span>
						{this.props.backText}
					</div>
				</div>
				<div style={{marginLeft:2, marginTop:5, fontSize:13, color:authorColor}}>
					<div style={{float:'left'}}>{authorText}</div>
					<div style={{float:'right', marginRight:10}}>{publishText}</div>
				</div>
				<br/>
			</div>
		)
	}
}

//parent of description and newsfeed
class SearchResults extends Component{
	constructor(props) {
		super(props);
		this.state = {
			articlesArray : [],
			article:{},
			displayFirst: true
		}
    this.componentDidMount = this.componentDidMount.bind(this);		
    this.parentOnClick = this.parentOnClick.bind(this);		
    // this.displayFirstArticle = this.displayFirstArticle.bind(this);
    this.getArticles = this.getArticles.bind(this);
	}
	// this function is called in its child, and the child will run this function with
	// the input value as this functions parameter
	getArticles(source){
    	var url = apiMain + source + apiTail + newsApiKey;
    	$.getJSON(url, (newsData) =>{
    		this.setState({
    			articlesArray: 
    			this.state.articlesArray.concat(newsData.articles),
    			article:newsData.articles[2]
    		})
    	});		
	}	
	// displayFirstArticle(firstArticle){
	// 	if(this.state.displayFirst){
	// 		this.setState({
	// 			article: firstArticle,
	// 			displayFirst: false
	// 		})
	// 	}
	// }
	parentOnClick(article){
		this.setState({
			article: article
		})
	}
	componentDidMount() {
		sourceArray.map((source, index)=>{
			this.getArticles(source)
			return 'what is the point of this stupid warning'
		})
	}
	render(){
		// console.log(this.state.wordString)
		//defaulting justTitles array to <LatestNews/> (which is header on top of newsfeed)
		var justTitles=[ <LatestNews key='LatestNews'/> ]
		// var shown = false
		this.state.articlesArray.map((article, index)=>{
			var searchInput = this.props.params.newsToSearchFor.toLowerCase()
			var indexOfTitle = article.title.toLowerCase().indexOf(searchInput)
			if((indexOfTitle > -1)&&(searchInput.length > 0)){
				// if(!shown){
				// 	this.displayFirstArticle(article); 
				// 	shown=true;
				// }
				var frontText = article.title.slice(0, indexOfTitle)
			 	var highlightText = article.title.slice(indexOfTitle, indexOfTitle + searchInput.length)
			 	var backText = article.title.slice(indexOfTitle + searchInput.length)
				justTitles.push(<JustTitles onClick={this.parentOnClick} key={index} article={article} frontText={frontText} highlightText={highlightText} backText={backText}/>)
				return 'something'
			}
			return 'something'
		})
			 		
		//bootstrap for mobile friendly with hidden components and changing column size
		return(
			<div>
				{/*<div className='col-md-3 hidden-xs hidden-sm' style={{height:'94vh', position:'fixed', left:0, paddingLeft:0, paddingRight:0, overflow:'scroll'}}>
					<div style={{height:'100vh', width: '100%', backgroundColor:'#2E2B31', color: 'white'}}>
						<KeyWords article={this.state.articlesArray}/>
					</div>
				</div>				*/}

				<div className='hidden-xs col-md-7  col-sm-9'style={{marginTop:3}}>
					<Description article={this.state.article} />
				</div>
				<div className='col-sm-5 hidden-xs' style={{padding:0, marginRight:0, backgroundColor:'#F3F1F4', 
					borderLeft:'1px solid #ddd', height:'100vh', position:'fixed', right:0, overflow:'scroll'}}>
					{justTitles}
				</div>

					{/********************** Mobile View *********************/}
					<div className='visible-xs'style={{marginTop:3, height:'65vh',overflow:'scroll'}}>
						<Description article={this.state.article} />
					</div>
					<div className='col-xs-12 visible-xs' style={{height:'25vh',padding:0, marginRight:0, 
						backgroundColor:'#F3F1F4', borderLeft:'1px solid #ddd', right:0, overflow:'scroll'}}>
						{justTitles}
					</div>
					{/********************** Mobile View *********************/}
			</div>
		)
	}
}

export default SearchResults