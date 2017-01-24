//Page made in one file for easier access, to keep layouts among pages consistent
import React, { Component } from 'react'
import '../index.css';
import $ from 'jquery'
import Weather from './Weather'
import TopNewsByCategory from './TopNewsByCategory'
const newsApiKey = '275258a3655c449ba4907833f5baf08b';
const apiMain = 'https://newsapi.org/v1/articles?source=';	
const apiTail = '&apiKey='

//article Sources
const sourceArray = [
		'cnn', 'google-news', 'time'
]

//header for news feed on the right (child of news feed)  / hidden in mobile
class LatestNews extends Component{
	render() {
		return(
		<div className='hidden-xs' style={{padding:7, borderLeft:'1px solid #ddd',borderBottom:'5px solid black',
			fontFamily:'Days One', fontSize:25, textAlign:'center'}}>
			Latest News
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
					<div style={{position:'absolute', top:15, right:0}}><a target='_blank' href={href}><img alt='what' style={{height:45, width:60}} className='image-hover' src={require('../facebook.png')}/></a></div>
				</div>
				<div style={{fontSize:30, marginBottom:24}}>{article.title}</div>
				<div style={{fontSize:20, marginBottom:24}}>{article.description}</div>
				<div style={{fontSize:20, marginBottom:10, color:'grey', textAlign:'right', width:'100%'}}>
					<a target='_blank' href={article.url}><img alt='what' className='image-hover' style={{width:'30%', height:'30%'}} src={require('../read.jpg')}/></a>{this.props.article.author}
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
		var readColor = 'black'
		var authorColor='grey'
		if(this.state.read === 'seen'){readColor='lightgrey'; authorColor='lightgrey'}
		return(
			<div className='click-article' onClick={this.childOnClick} style={{color:readColor, padding:'10px 20px', borderLeft:'1px solid #ddd',borderBottom:'2px solid #ddd'}}>
				<div style={{fontSize:16}}>{this.props.article.title}</div>
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
class ArticleTitles extends Component{
	constructor(props) {
		super(props);
		this.state = {
			articlesArray : [],
			article:{}
		}
    this.componentDidMount = this.componentDidMount.bind(this);		
    this.parentOnClick = this.parentOnClick.bind(this);		
	}
	// this function is called in its child, and the child will run this function with
	// the input value as this functions parameter
	parentOnClick(article){
		this.setState({
			article:article
		})
	}
	componentDidMount() {
		for(let i = 0; i < sourceArray.length; i++){
			var url = apiMain + sourceArray[i] + apiTail + newsApiKey;
    		$.getJSON(url, (data) => {
    			this.setState({
    				articlesArray:this.state.articlesArray.concat(data.articles),
    				article:data.articles[1]
    			})
    		})
    	}
	}	
	render(){
		//defaulting justTitles array to <LatestNews/> (which is header on top of newsfeed)
		var justTitles=[ <LatestNews key='LatestNews'/> ]
		this.state.articlesArray.map((article, index)=>{
			justTitles.push(<JustTitles onClick={this.parentOnClick} key={index} article={article}/>)
			return 'something'
		})
		//bootstrap for mobile friendly with hidden components and changing column size
		return(
			<div>
				<div className='hidden-xs col-md-offset-3 col-md-6 col-sm-9'style={{marginTop:3}}>
					<Description article={this.state.article} />
				</div>
				<div className='col-sm-3 hidden-xs' style={{padding:0, marginRight:0, backgroundColor:'#F3F1F4', 
					borderLeft:'1px solid #ddd', height:'100vh', position:'fixed', right:0, overflow:'scroll'}}>
					{justTitles}
				</div>

					{/********************** Mobile View *********************/}
					<div className='visible-xs'style={{marginTop:3, height:'60vh',overflow:'scroll'}}>
						<Description article={this.state.article} />
					</div>
					<div className='col-xs-12 visible-xs' style={{height:'30vh',padding:0, marginRight:0, 
						backgroundColor:'#F3F1F4', borderLeft:'1px solid #ddd', right:0, overflow:'scroll'}}>
						{justTitles}
					</div>
					{/********************** Mobile View *********************/}
			</div>
		)
	}
}

//left side bar(children are in different files)
class SideBar extends Component{
	render(){
		return(
			<div style={{height:'100vh', width: '100%', backgroundColor:'#2E2B31', color: 'white'}}>
				<Weather />
				<TopNewsByCategory />
			</div>
		)
	}
}

// the big grand daddy for the front page
class General extends Component{
	render(){
		return(
			<div style={{backgroundColor:'#F8F8F8'}}>
				<div className='col-md-3 hidden-xs hidden-sm' style={{height:'94vh', position:'fixed', left:0, paddingLeft:0, paddingRight:0, overflow:'scroll'}}>
					<SideBar />
				</div>				
				<ArticleTitles />
			</div>
		)
	}
}

export default General;
