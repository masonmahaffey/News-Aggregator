import React, { Component } from 'react';
import $ from 'jquery'
const newsApiKey = '275258a3655c449ba4907833f5baf08b';
const apiMain = 'https://newsapi.org/v1/articles?source=';	
const apiTail = '&apiKey='

class Articles extends Component{
	render (){
		var article = this.props.bigArticle
		return(
			<div style={{paddingLeft:0, marginLeft:-15, paddingRight:20, marginBottom:40, marginTop:5}}>
				<img src={article.urlToImage} alt='a' style={{width:'100%', height:'100%'}}/>
				<div style={{fontSize:21, marginBottom:8, fontWeight:700}}>{article.title}</div>
				<div style={{fontSize:16, marginBottom:15}}>{article.description}</div>
				<a href={article.url} style={{fontSize:18}}>Read Full Article</a>
			</div>
		)	
	}	
}

var EachArticle = React.createClass({
	render: function(){
		return(
			<div>
				{this.props.articles.map(function(article, index){
					var title = article.title
					var description = article.description
					// if(title.length > 70){title = title.slice(0,70)+'...'}
					// if(description.length > 185){description = description.slice(0,185)+'...'}
					return(
						<div className='row each-article-row' key={index} style={{
							marginBottom:10, marginRight:20,fontSize:18, backgroundColor:'#F3F1F4', border:'1px solid #ddd', padding:10}}>
							<a href={article.url} style={{color:'black'}}>
								<div className='col-md-2 hidden-xs hidden-sm' style={{padding:0}}>
									<img alt='aaaa' src={article.urlToImage} style={{marginTop:5,height: '60px', filter: 'brightness(70%)'}}/>
									<span style={{marginLeft:10,fontSize:15, color:'grey'}}>5 hours ago</span>
								</div>
								<div className='col-md-10 col-sm-12' style={{display:'inline-block'}}>
									<div style={{fontWeight:'bold'}}>{title}</div>
									<div style={{fontSize: '14px',minHeight:'30px'}}>{description}</div>
								</div>
							</a>
						</div>
					)	
				})}
			</div>
		)
	}
})

class ArticleImages extends Component{
	render (){
		var imageArray = this.props.articles;
		return(
			<div>
				{imageArray.map(function(article, index){
					if(article.title.length > 75){
						article.title = article.title.slice(0,75) + "..."
					}
					if(article.url.length!==null){
					return(
						<div style={{marginBottom: 10, float:'left', borderBottom:'1px solid lightgrey'}} key={index}>
							<div style={{fontSize: 16, margin:'4%'}}><a href={article.url}><img src={article.urlToImage} alt='s'
								style={{width:'95%', height:'85%'}} /></a>
								<br/>
								<a style={{color:'black', fontWeight:500, fontSize:18}} href={article.url}>{article.title}</a>
							</div>
						</div>
					)}	
				})}
			</div>
		)
	}	
}

class BusinessInsider extends Component{
	constructor(props){
		super(props);
		this.state = {articlesArray: [], bigArticle:{}};
		this.componentDidMount = this.componentDidMount.bind(this);
	}
	componentDidMount () {
		var apiSource = 'business-insider-uk';
		var url = apiMain + apiSource + apiTail + newsApiKey;
		$.getJSON(url, (newsData) =>{
			this.setState({articlesArray: newsData.articles, 
				bigArticle:newsData.articles[newsData.articles.length-1]})});	
	}
	render (){
		return(
			<div className='col-xs-9' style={{paddingTop:20}}>
				<Articles bigArticle={this.state.bigArticle} />
				<EachArticle articles={this.state.articlesArray} />
			</div>
		);
	}
}

class Fortune extends Component{
	constructor(props){
		super(props);
		this.state = {articlesArray: []};
		this.componentDidMount = this.componentDidMount.bind(this);
	}
	componentDidMount () {
		var apiSource = 'fortune';
		var url = apiMain + apiSource + apiTail + newsApiKey;
		$.getJSON(url, (newsData) =>{
			this.setState({articlesArray: newsData.articles})});	
	}
	render (){
		return(
			<Articles articles={this.state.articlesArray} />
		);
	}
}

class FinancialTimes extends Component{
	constructor(props){
		super(props);
		this.state = {articlesArray: []};
		this.componentDidMount = this.componentDidMount.bind(this);
	}
	componentDidMount () {
		var apiSource = 'financial-times';
		var url = apiMain + apiSource + apiTail + newsApiKey;
		$.getJSON(url, (newsData) =>{
			this.setState({articlesArray: newsData.articles});
		});
	}
	render (){
		return(
			<div className="col-xs-3" style={{borderLeft:'1px solid #ddd', paddingTop:20, backgroundColor:'#F3F1F4'}}>
				<ArticleImages articles={this.state.articlesArray} />
			</div>
		);
	}
}

export { BusinessInsider, FinancialTimes, Fortune }