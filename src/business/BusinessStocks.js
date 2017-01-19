import React, { Component } from 'react';
import $ from 'jquery'
import Stock from './Stock.js'
import StockSearch from './StocksSearch.js'
import StockHeader from './StockMarkets.js'

var symbol = 'BAC+FB+TSLA+WPX+WFC+RAD+FCX+AAPL+F+GE+JCP+JPM+VALE+FCAU+FTI+T+GOOG+S+DOW+TWTR+CSCO+INTC+QQQ+MU+XIV+NVDA+NFLX+JNJ+HBAN+ARRY+CMCSA+TVIX+GRPN+ARIA+MSFT+SIRI'
var stockFront = 'http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20("'
var stockTail = '")%0A%09%09&env=http%3A%2F%2Fdatatables.org%2Falltables.env&format=json'
var stockUrl = stockFront + symbol + stockTail

// {this.props.stock.name}<br/>
class Stocks extends Component {
  	constructor(props) {
    	super(props);
    	this.state = {stocks: []};
    	this.componentDidMount = this.componentDidMount.bind(this);
	};
  	componentDidMount() {
		$.getJSON(stockUrl, (stockData) =>{
			console.log(stockData)
			var stockArr = stockData.query.results.quote
			var stockArrMin = []
			for(let i = 0; i < stockArr.length; i++){
				if(stockArr[i].symbol!==null){
					if(stockArr[i].DaysHigh==null){stockArr[i].DaysHigh = "-"};
					if(stockArr[i].Change==null){stockArr[i].Change = "0"};
					var eachStock = {
						symbol: stockArr[i].symbol,
						price: stockArr[i].LastTradePriceOnly,
						change: stockArr[i].ChangeFromFiftydayMovingAverage,
						name: stockArr[i].Name
					}
					// ChangeFromFiftydayMovingAverage
					stockArrMin.push(eachStock)

					
				}
			}
			this.setState({stocks: stockArrMin})
		});		
  	}

  	render() {
    	return(
    		<div>
    			
				<StockHeader />
    			<StockSearch />
    			<Stock stocks={this.state.stocks} />
    		</div>
		)
  	}
}


export default Stocks;


