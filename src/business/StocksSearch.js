import React, { Component } from 'react';
import $ from 'jquery'

var stockFront = 'http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20("'
var stockTail = '")%0A%09%09&env=http%3A%2F%2Fdatatables.org%2Falltables.env&format=json'

class StockSearch extends Component{
	constructor(props) {
		super(props);
		this.state = {
			stockSymbol: '',
			stock: {
				Name: 'Upd8d.Inc',
				symbol: 'updd',
				Ask: '210.5',
				Bid: '204.3',
				Change: '+5.5',
				EPSEstimateCurrentYear: '+45.4',
				YearHigh: '210.5',
				YearLow: '156.3',
				Volume: '52351',
				PercentChange: '42%'
			}
		}
		this.stockSearchSubmit = this.stockSearchSubmit.bind(this)
		this.changeStock = this.changeStock.bind(this)
		this.componentWillUnmount = this.componentWillUnmount.bind(this)
		this.componentDidMount = this.componentDidMount.bind(this)
	};
	stockSearchSubmit(event){
		event.preventDefault();
		var symbol = event.target[0].value.toLowerCase()
		this.setState({stockSymbol: symbol})
	};
	componentDidMount() {
  		window.newStock = setInterval(this.changeStock, 1000);
  		this.setState({today: window.newStock})
  	};	
  	componentWillUnmount() {
  		clearInterval(window.newStock)
  	};	
	changeStock () {
		var url = stockFront + this.state.stockSymbol + stockTail
		if(this.state.stockSymbol.length < 2){
			url = stockFront + 'aapl' + stockTail
		}
		$.getJSON(url, (stockData) => {			
			this.setState({stock: stockData.query.results.quote})
			})
	}
	render(){
		// console.log(this.state.stock) 
		return(
			<div className="stock-wrapper col-xs-4" style={{position:'fixed', left:0, height:'45vh'}}> 
				<div className="col-xs-12" style={{marginTop:40,padding: 4, backgroundColor:'#2E2B31', height:'37vh', borderBottom:'1px #222222 solid', zIndex:15}}>
					<div style={{marginLeft:8, marginTop:8, paddingRight:20, paddingLeft:5,paddingTop:20}}>
						<form onSubmit={this.stockSearchSubmit}>
		     				<input type="text" className="form-control" placeholder="Search any stock symbol" />
			   			</form>
			   		</div>
			   		<SearchedStockResults stock={this.state.stock} />
			  	</div>
			  	
			  	<div className="text-center col-xs-12" style={{color:'white',height:200, backgroundColor:'#2E2B31', zIndex:15, overflow:'hidden'}}>
				</div>
			</div>
		)
	}
}	




class SearchedStockResults extends Component {
	render(){
		var stock = this.props.stock
		var changeColor = ''
		var changeColor2 = ''
		var changeColor3 = ''
		if(stock.Change>=0){changeColor='#76ff03'}else{changeColor='#ef5350'}
		if(stock.EPSEstimateCurrentYear>=0){changeColor2='#76ff03'}else{changeColor2='#ef5350'}
		// if(stock.PercentChange>=0){changeColor3='#76ff03'}else{changeColor3='#ef5350'}	
		return(
			<div style={{color:'white', fontSize:19}}>
				<div className="col-sm-12" style={{fontSize:28, textDecoration:'underline'}}>{stock.Name}</div>
				<div className="col-sm-12" style={{fontSize:20, color:'#0099FF'}}>{stock.symbol.toUpperCase()}</div>
				<div className="col-sm-6">Ask: {stock.Ask}</div>
				<div className="col-sm-6">Bid: {stock.Bid}</div>
				<div className="col-sm-6">Change: <div style={{display:'inline-block', color:changeColor}}>{stock.Change}</div></div>
			{/*	<div className="col-sm-6">Volume: {stock.Volume}</div>  */}
				<div className="col-sm-12" style={{fontSize:16, color:'grey'}}>{stock.symbol.toUpperCase()} stock data from 2016 ~ 2017</div>
				<div className="col-sm-6">Projection: <div style={{display:'inline-block', color:changeColor2}}>{stock.EPSEstimateCurrentYear}</div></div>
				<div className="col-sm-6">Change: <div style={{display:'inline-block', color:changeColor3}}>{stock.PercentChange}</div></div>
				<div className="col-sm-6">High: {stock.YearHigh}</div>
				<div className="col-sm-6">Low: {stock.YearLow}</div>
			</div>			
		)
	}
}




export default StockSearch;
