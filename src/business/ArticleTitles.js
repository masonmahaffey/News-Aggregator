///////////////////////////////////////////////////////////////////////////
////////////////Layout and Logic consistent with General.js////////////////
///////////////////////////////////////////////////////////////////////////

import React, { Component } from 'react'
import $ from 'jquery';
const newsApiKey = '275258a3655c449ba4907833f5baf08b';
const apiMain = 'https://newsapi.org/v1/articles?source=';	
const apiTail = '&apiKey='
var	sourceArray = [
		'business-insider', 'financial-times', 'business-insider-uk', 'fortune', 'the-economist'
]

class LatestNews extends Component{
	render() {
		return(
		<div className='hidden-xs' style={{padding:7, borderLeft:'1px solid #ddd',borderBottom:'5px solid black',
			fontFamily:'Days One', fontSize:25, textAlign:'center'}}>
			Business News
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
				<div style={{position:'absolute', right:-33, top:50}}><img alt='what' style={{width:30, height:30}} src={require('../arrow.png')}/></div>
				<div style={{marginTop:50}}>
					<img src={this.props.article.urlToImage} alt='not found' style={{width:'100%',height:'120%',marginBottom:20}}/>
					<div style={{position:'absolute', top:65, right:3}}><a target='_blank' className='hidden-xs' href={href}><img alt='what' style={{height:45, width:60}} className='image-hover' src={require('../facebook.png')}/></a></div>
				</div>
				<div style={{fontSize:30, marginBottom:16}}>{article.title}</div>
				<div style={{fontSize:20, marginBottom:15}}>{article.description}</div>
				<div style={{fontSize:20, marginBottom:10, color:'grey', textAlign:'right', width:'100%'}}>
				<a target='_blank' href={article.url}><img alt='what' className='image-hover' style={{width:'30%', height:'30%'}} src={require('../read.jpg')}/></a>{this.props.article.author}
				</div>
			</div>
		)
	}
}

class JustTitles extends Component{
	constructor(props) {
		super(props);
		this.childOnClick=this.childOnClick.bind(this)
		this.state = {
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
		var justTitles=[ <LatestNews key='LatestNews'/> ]
		this.state.articlesArray.map((article, index)=>{
			justTitles.push(<JustTitles onClick={this.parentOnClick} key={index} article={article}/>)
			return 'why'
		})
		return(
			<div>
				<div className='hidden-xs col-md-offset-3 col-md-6 col-sm-9'style={{marginTop:3}}>
					<Description article={this.state.article} />
				</div>
				<div className='visible-xs'style={{marginTop:3, height:'70vh',overflow:'scroll'}}>
					<Description article={this.state.article} />
				</div>
				<div className='col-xs-12 visible-xs' style={{
				height:'25vh', marginTop:40,
				padding:0, marginRight:0, backgroundColor:'#F3F1F4', borderLeft:'1px solid #ddd', 
				right:0, overflow:'scroll'}}>
					{justTitles}
				</div>
				<div className='col-sm-3 hidden-xs' style={{
				padding:0, marginRight:0, backgroundColor:'#F3F1F4', borderLeft:'1px solid #ddd', 
				height:'100vh', position:'fixed', right:0, marginTop:40,overflow:'scroll'}}>
					{justTitles}
				</div>
			</div>
		)
	}
}


export default ArticleTitles;
