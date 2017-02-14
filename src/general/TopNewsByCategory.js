//left side column on front page
import React, { Component } from 'react';
import $ from 'jquery'
const newsApiKey = '275258a3655c449ba4907833f5baf08b';
const apiMain = 'https://newsapi.org/v1/articles?source=';	
const apiTail = '&apiKey='
import { Link } from 'react-router'
var symbol = 'GOOG+FB+AAPL+AMZN'
var stockFront = 'http://query.yahooapis.com/v1/public/yql?q=select%20%2a%20from%20yahoo.finance.quotes%20where%20symbol%20in%20%28%22'
var stockTail = '%22%29&env=store://datatables.org/alltableswithkeys&format=json'
var stockUrl = stockFront + symbol + stockTail

//business category
//displaying stocks
class BuildStocks extends Component{
	render() {
		return(
			<div className='col-sm-6' style={{fontSize:18,minHeight:100, padding:10}}>	
				<div style={{color:'white'}} className="col-sm-6">
					{this.props.stock.symbol}
				</div>
				<div style={{color:'lightgrey'}} className="col-sm-6">
					${this.props.stock.price}
				</div>
				<div className='col-sm-12' style={{fontSize:14}}>
					{this.props.stock.name}
				</div>
				<div className="col-sm-12" style={{fontSize:25,color:this.props.bgColor}}>
					{this.props.stock.change} 
				</div>									
			</div>
		)		
	}	
}

//targetting each of the four stocks
class Stock extends Component{
	render(){
		if(this.props.stocks.length>2){
			return(
				<div>
					{this.props.stocks.map(function(stock, index){
						var bgColor = ""
						if(stock.change>=0){bgColor='#76ff03';
						}else{bgColor='#ef5350';}
							return(
								<div key={index}>
									<BuildStocks bgColor={bgColor} stock={stock}/>
								</div>
							)
						})}
				</div>
			)
		}else{
			return(<div className='blinkingLetters' style={{marginTop: 10, marginLeft:10}}>Loading Stocks...</div>)
		}
	}
}

//getJSON for stocks and passing it down as props
class Stocks extends Component {
  	constructor(props) {
    	super(props);
    	this.state = {stocks: []};
    	this.componentDidMount = this.componentDidMount.bind(this);
    	
	};
	 componentDidMount() {
	 	console.log(stockUrl)
		$.getJSON(stockUrl, (stockData) =>{
			console.log(stockData)
			var stockArr = stockData.query.results.quote
			var stockArrMin = []
			for(let i = 0; i < stockArr.length; i++){
				var eachStock = {
					symbol: stockArr[i].symbol,
					price: stockArr[i].LastTradePriceOnly,
					change: stockArr[i].Change,
					name: stockArr[i].Name
				}
				stockArrMin.push(eachStock)
			}
			this.setState({stocks: stockArrMin})
		});	
	}
  	render() {
    	return(
    		<Stock stocks={this.state.stocks} />
		)
  	}
}

//business category box parent
class Money extends Component{
	render (){
		return(
			<div style={{height:230, paddingTop:18}}>
				<div style={{fontSize:27,height:20,borderTop:'1px solid white', width:'100%'}}>
				</div>
					<div className='col-sm-8 col-sm-offset-2' style={{position:'absolute',textAlign:'center',marginTop:-35}}>
						<Link to="/business" style={{paddingLeft:5,paddingRight:5,fontFamily:'Days One', color:'white',backgroundColor:'#2E2B31'}}>Business</Link>
					</div>
				<Stocks />
			</div>
		);
	}
}

var CategoryArticleImage = React.createClass({
	render: function(){
		var articles = this.props.articles.slice(0,1)
		return(
			<div>
				{articles.map(function(article, index){
					return(
						<div key={index} style={{marginTop:6,padding:10, fontSize:19}}>
							<img src={article.urlToImage} alt="not found" style={{height:'100%', width:'100%', border:'.4px solid white'}}/>
							<a href={article.url} style={{color:'white'}}>{article.title}</a>
						</div>
					)	
				})}
			</div>
		)
	}
})

//building each category articles
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

//entertainment category box parent
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
			<div style={{marginTop:15, paddingTop:15}}>
				<div style={{fontSize:27,height:15,borderTop:'1px solid white', width:'100%'}}></div>
				<div className='col-sm-8 col-sm-offset-2' style={{position:'absolute',textAlign:'center',marginTop:-30}}>
					<Link to="/entertainment" style={{paddingLeft:5,paddingRight:5,fontFamily:'Days One', 
						color:'white',backgroundColor:'#2E2B31'}}>Entertainment</Link>
				</div>
				<CategoryArticleImage articles={this.state.articlesArray} />
			</div>
		);
	}
}

//world category box parent
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
			<div style={{marginTop:10, paddingTop:15}}>
				<div style={{fontSize:27,height:15,borderTop:'1px solid white', width:'100%'}}></div>
				<div className='col-sm-8 col-sm-offset-2' style={{position:'absolute',textAlign:'center',marginTop:-30}}>
					<Link to="/world" style={{paddingLeft:5,paddingRight:5,fontFamily:'Days One', 
						color:'white',backgroundColor:'#2E2B31'}}>World</Link>
				</div>
				<CategoryArticle articles={this.state.articlesArray} />
			</div>
		);
	}
}

//sports category box parent
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
			<div style={{marginTop:10, paddingTop:15}}>
				<div style={{fontSize:27,height:15,borderTop:'1px solid white', width:'100%'}}></div>
				<div className='col-sm-8 col-sm-offset-2' style={{position:'absolute',textAlign:'center',marginTop:-30}}>
					<Link to="/sports" style={{paddingLeft:5,paddingRight:5,fontFamily:'Days One', 
						color:'white',backgroundColor:'#2E2B31'}}>Sports</Link>
				</div>
				<CategoryArticle articles={this.state.articlesArray} />
			</div>
		);
	}
}

// grand daddy for categories on left side of front page
class TopNewsByCategory extends Component{
	render (){
		return(
			<div style={{fontSize:22, backgroundColor:'#2E2B31'}}>
				<Money />
				<Entertainment />
				<Sports />
				<World />
			</div>
		)
	}	
}

export default TopNewsByCategory 

