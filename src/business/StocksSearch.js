import React, { Component } from 'react';
import $ from 'jquery'

var stockFront = 'http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20("'
var stockTail = '")%0A%09%09&env=http%3A%2F%2Fdatatables.org%2Falltables.env&format=json'

// displaying searched stock, individual stock item styling done here
class SearchedStockResults extends Component {
	render(){
		var stock = this.props.stock
		var changeColor = ''
		var changeColor2 = ''
		var positive = ''
		if(stock.Change>=0){changeColor='#76ff03'}else{changeColor='#ef5350'}
		if(stock.EPSEstimateCurrentYear>=0){changeColor2='#76ff03'; positive="+"}else{changeColor2='#ef5350'}
		return(
			<div style={{color:'white', fontSize:17}}>
				<div className="col-sm-12" style={{fontSize:28, textDecoration:'underline'}}>{stock.Name}</div>
				<div className="col-sm-12" style={{fontSize:20, color:'#0099FF'}}>{stock.symbol.toUpperCase()}</div>
				<div className="col-sm-6">Ask: {stock.Ask}</div>
				<div className="col-sm-6">Bid: {stock.Bid}</div>
				<div className="col-sm-12">Change: <div style={{display:'inline-block', color:changeColor}}>{stock.Change}</div></div>
				<div className="col-sm-12">Year Projection: <div style={{display:'inline-block', color:changeColor2}}>{positive}{stock.EPSEstimateCurrentYear}</div></div>
				<div className="col-sm-6">High: {stock.YearHigh}</div>
				<div className="col-sm-6">Low: {stock.YearLow}</div>
			</div>			
		)
	}
}

//getJSON for the searched stock and passing it down 
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
	//getting input value and running the parent function, with this input value as parameter(passing data up)
	stockSearchSubmit(event){
		event.preventDefault();
		var symbol = event.target[0].value.toLowerCase()
		this.setState({stockSymbol: symbol})
	};
	//logic for refreshing searched stock every second
	componentDidMount() {
  		window.newStock = setInterval(this.changeStock, 1000);
  		this.setState({today: window.newStock})
  	};	
  	//stop running changeStock(which is in window.newStock) when leaving business page
  	componentWillUnmount() {
  		clearInterval(window.newStock)
  	};	
  	//defaulted stock symbol to aapl, and making ajax call
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
		//overall layout for stock search div done here, hidden in phone
		return(
			<div className="stock-wrapper col-sm-3 hidden-xs" style={{position:'fixed', left:0, height:'50vh', paddingRight:0}}> 
				<div className="col-xs-12" style={{marginTop:40,padding: 4, backgroundColor:'#2E2B31', height:'43vh', borderBottom:'1px #222222 solid', zIndex:15}}>
					<div style={{marginLeft:8, marginTop:8, paddingRight:20, paddingLeft:5,paddingTop:15}}>
						<form onSubmit={this.stockSearchSubmit}>
		     				<input type="text" className="form-control" placeholder="Search any stock symbol" />
			   			</form>
			   		</div>
			   		<SearchedStockResults stock={this.state.stock} />
			   		<div className='col-md-12' style={{padding:0, marginTop:30, fontSize:17}}>
			   			<div style={{fontSize:27,height:20,borderTop:'1px solid white', width:'100%'}}></div>
			   			<div className='col-md-8 col-sm-offset-2' style={{position:'absolute',textAlign:'center',marginTop:-32}}>
							<div style={{paddingLeft:5,paddingRight:5,fontFamily:'Days One', color:'white',backgroundColor:'#2E2B31'}}>Common Stocks</div>
						</div>
					</div>
			  	</div>

			</div>
		)
	}
}	









export default StockSearch;
