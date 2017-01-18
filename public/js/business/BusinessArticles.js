import React, { Component } from 'react';
import $ from 'jquery'
const newsApiKey = '275258a3655c449ba4907833f5baf08b';
const apiMain = 'https://newsapi.org/v1/articles?source=';	
const apiTail = '&apiKey='

class Articles extends Component{
	render (){
		return(
			<div>
				{this.props.articles.map(function(article, index){
					
					return(
						<div className="each-article" key={index}>
							<a style={{fontSize:17.5}} href={article.url}>{article.title}</a><br/>
							{article.description}
						</div>
					)	
				})}
			</div>
		)
	}	
}

class ArticleImages extends Component{
	render (){
		var imageArray = this.props.articles.splice(0,4);
		return(
			<div>
				{imageArray.map(function(article, index){
					if(article.title.length > 75){
						article.title = article.title.slice(0,75) + "..."
					}
					return(
						<div style={{marginBottom: 10, float:'left', borderBottom:'1px solid lightgrey'}} key={index}>
							<div style={{fontSize: 16, margin:'4%'}}><a href={article.url}><img src={article.urlToImage} alt='s'
							style={{width:'95%', height:'85%'}} /></a>
							<br/>
							<a style={{color:'black', fontWeight:500, fontSize:19}} href={article.url}>{article.title}</a>
							</div>
						</div>
					)	
				})}
			</div>
		)
	}	
}

class BusinessInsider extends Component{
	constructor(props){
		super(props);
		this.state = {articlesArray: []};
		this.componentDidMount = this.componentDidMount.bind(this);
	}
	componentDidMount () {
		var apiSource = 'business-insider-uk';
		var url = apiMain + apiSource + apiTail + newsApiKey;
		$.getJSON(url, (newsData) =>{
			this.setState({articlesArray: newsData.articles})});	
	}
	render (){
		return(
			<div className="col-xs-11 col-sm-6 col-md-3" style={{marginLeft:20, border:'3px solid lightgrey', height:'70vh', overflow:'scroll'}}>
				<div style={{margin:'auto'}}>
				<img alt='b' src={require('./images/businessinsider.png')} style={{
				width:'100%', height:'100%',marginBottom:15, marginTop:10}} />
				</div>
				<Articles articles={this.state.articlesArray} />
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
			<div className="col-xs-11 col-sm-7 col-md-3" style={{float:'right', margin:5}}>
				<div style={{height:'100%'}}>
					<img alt='b' src={require('./images/fortune.png')} style={{
					float:'left',width:'50%', height:'50%', margin:'20px 23% 20px'}} />
				</div>
				<ArticleImages articles={this.state.articlesArray} />
			</div>
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
			<div className="col-xs-11 col-sm-5 col-md-5" style={{marginLeft: 40}}>
				<div style={{margin:'auto'}}>
				<img alt='b' src={require('./images/financialtimes.png')} style={{
				width:'40%', height:'40%',margin:'13px 25% 20px'}} />
				</div>
				<Articles articles={this.state.articlesArray} />
			</div>
		);
	}
}

export { BusinessInsider, FinancialTimes, Fortune }