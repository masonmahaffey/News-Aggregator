import React, { Component } from 'react'
import $ from 'jquery';
const newsApiKey = '275258a3655c449ba4907833f5baf08b';
const apiMain = 'https://newsapi.org/v1/articles?source=';	
const apiTail = '&apiKey='
var	sourceArray = [
		'business-insider-uk', 'ars-technica'
]


class JustTitles extends Component{
	constructor(props) {
		super(props);
		this.childOnClick=this.childOnClick.bind(this)
	}
	childOnClick(){
		this.props.onClick(this.props.article.description)
	}
	render(){
		return(
			<div onClick={this.childOnClick}>{this.props.article.title}</div>
		)
	}
}

class ArticleTitles extends Component{
	constructor(props) {
		super(props);
		this.state = {
			articlesArray : [],
			display:false,
			description:''
		}
    this.componentDidMount = this.componentDidMount.bind(this);		
    this.parentOnClick = this.parentOnClick.bind(this);		
	}
	parentOnClick(description){
		this.setState({description:description})
	}
	componentDidMount() {
		sourceArray.map((source, index)=>{
		var url = apiMain + source + apiTail + newsApiKey;
    	$.getJSON(url, (newsData) =>{
    		this.setState({
    			articlesArray: 
    			this.state.articlesArray.concat(newsData.articles)})
    		console.log(this.state.articlesArray)

    	})})
    	console.log(this.state.articlesArray)
	}	
	render(){
		var justTitles=[]
		var description
		this.state.articlesArray.map((article, index)=>{
			justTitles.push(<JustTitles onClick={this.parentOnClick} key={index} article={article}/>)
		})
		console.log(this.state.description)
		return(
			<div>
				<div className='col-md-offset-3 col-md-6'>
					<h1>{this.state.description}</h1>
				</div>
				<div className='col-md-3' style={{
				padding:0, marginRight:0, backgroundColor:'#F3F1F4', borderLeft:'1px solid #ddd', 
				height:'100vh', position:'fixed', right:0, overflow:'scroll'}}>
					{justTitles}
				</div>
			</div>
		)
	}
}


export default ArticleTitles;
