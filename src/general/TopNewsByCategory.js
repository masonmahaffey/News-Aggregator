import React, { Component } from 'react';
import $ from 'jquery'
const newsApiKey = '275258a3655c449ba4907833f5baf08b';
const apiMain = 'https://newsapi.org/v1/articles?source=';	
const apiTail = '&apiKey='
import { Link } from 'react-router'

var CategoryArticle = React.createClass({
	render: function(){
		var articles = this.props.articles.slice(0,3)
		return(
			<div>
				{articles.map(function(article, index){
					var title = article.title
					return(
						<div key={index} style={{padding:10, fontSize:16}}>
							<a href={article.url} style={{color:'white'}}>{title}</a>
						</div>
					)	
				})}
			</div>
		)
	}
})


class Entertainment extends Component{
	constructor(props){
		super(props);
		this.state = {articlesArray: [], bigArticle:{}};
		this.componentDidMount = this.componentDidMount.bind(this);
	}
	componentDidMount () {
		var apiSource = 'entertainment-weekly';
		var url = apiMain + apiSource + apiTail + newsApiKey;
		$.getJSON(url, (newsData) =>{
			this.setState({articlesArray: newsData.articles, 
				bigArticle:newsData.articles[newsData.articles.length-1]})});	
	}
	render (){
		return(
			<div style={{margin:'10px 0'}}>
				<div className='text-center'><Link to="/entertainment" style={{color:'white'}}>changing this c. Entertainment</Link></div>
				<CategoryArticle articles={this.state.articlesArray} />
			</div>
		);
	}
}

class World extends Component{
	constructor(props){
		super(props);
		this.state = {articlesArray: [], bigArticle:{}};
		this.componentDidMount = this.componentDidMount.bind(this);
	}
	componentDidMount () {
		var apiSource = 'national-geographic';
		var url = apiMain + apiSource + apiTail + newsApiKey;
		$.getJSON(url, (newsData) =>{
			this.setState({articlesArray: newsData.articles, 
				bigArticle:newsData.articles[newsData.articles.length-1]})});	
	}
	render (){
		return(
			<div style={{margin:'10px 0', backgroundColor:'#333333'}}>
				<div className='text-center'><Link to="/entertainment" style={{color:'white'}}>World</Link></div>
				<CategoryArticle articles={this.state.articlesArray} />
			</div>
		);
	}
}

class Money extends Component{
	constructor(props){
		super(props);
		this.state = {articlesArray: [], bigArticle:{}};
		this.componentDidMount = this.componentDidMount.bind(this);
	}
	componentDidMount () {
		var apiSource = 'business-insider';
		var url = apiMain + apiSource + apiTail + newsApiKey;
		$.getJSON(url, (newsData) =>{
			this.setState({articlesArray: newsData.articles, 
				bigArticle:newsData.articles[newsData.articles.length-1]})});	
	}
	render (){
		return(
			<div style={{margin:'10px 0'}}>
				<div className='text-center'><Link to="/business" style={{color:'white'}}>Money</Link></div>
				<CategoryArticle articles={this.state.articlesArray} />
			</div>
		);
	}
}

class Sports extends Component{
	constructor(props){
		super(props);
		this.state = {articlesArray: [], bigArticle:{}};
		this.componentDidMount = this.componentDidMount.bind(this);
	}
	componentDidMount () {
		var apiSource = 'espn';
		var url = apiMain + apiSource + apiTail + newsApiKey;
		$.getJSON(url, (newsData) =>{
			this.setState({articlesArray: newsData.articles, 
				bigArticle:newsData.articles[newsData.articles.length-1]})});	
	}
	render (){
		return(
			<div style={{margin:'10px 0', backgroundColor:'#333333'}}>
				<div className='text-center'><Link to="/entertainment" style={{color:'white'}}>Sports</Link></div>
				<CategoryArticle articles={this.state.articlesArray} />
			</div>
		);
	}
}

class TopNewsByCategory extends Component{
	render (){
		return(
			<div style={{fontSize:22, backgroundColor:'#2E2B31'}}>
				<Entertainment />
				<Sports />
				<Money />
				<World />
			</div>
		)
	}	
}

export default TopNewsByCategory 