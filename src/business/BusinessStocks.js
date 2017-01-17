import React, { Component } from 'react';
import $ from 'jquery'
import greenArrow from './images/green.png'
import redArrow from './images/red.png'

var symbol = 'BAC+FB+TSLA+WPX+WFC+RAD+FCX+AAPL+F+GE+JCP+JPM+VALE+FCAU+FTI+T+GOOG+S+DOW+TWTR+CSCO+INTC+QQQ+MU+XIV+NVDA+NFLX+JNJ+HBAN+ARRY+CMCSA+TVIX+GRPN+ARIA+MSFT+SIRI'
var stockFront = 'http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20("'
var stockTail = '")%0A%09%09&env=http%3A%2F%2Fdatatables.org%2Falltables.env&format=json'
var stockUrl = stockFront + symbol + stockTail

//open 10:00 AEST ~ 17:00 AEST
class NZX extends Component{
	render(){
		var open = "open";
		var day = this.props.today.day;
		var hour = this.props.today.hour;
		if((day===0)||(day===5)){if(hour > 7){day++}};
		if((day===0)||(day===6)){open = "closed"};
		if((hour < 16)&&(hour>0)){open = "closed"};
		var openColor = ''; if(open==='open'){openColor = '#76ff03'}else{openColor = '#ef5350'}
		return(
			<div style={{display:'inline-block'}}>
				<a style={{color:'white'}} href='https://www.nzx.com/'>NZX:</a> <span style={{color:openColor}}>{open}</span>
			</div>
		)
	}
}

//open 9:00 ~ 16:00 HKT
class HKEX extends Component{
	render(){
		var open = "open";
		var day = this.props.today.day;
		var hour = this.props.today.hour;
		if((day===0)||(day===5)){if(hour > 11){day++}};
		if((day===0)||(day===6)){open = "closed"};
		if((hour < 20)&&(hour > 3)){open = "closed"}
		var openColor = ''; if(open==='open'){openColor = '#76ff03'}else{openColor = '#ef5350'}	
		return(
			<div style={{display:'inline-block'}}>
				<a style={{color:'white'}} href='https://www.hkex.com.hk/'>HKEX:</a> <span style={{color:openColor}}>{open}</span>
			</div>
		)
	}
}

//open 10:00 AEST ~ 16:00 AEST
class ASX extends Component{
	render(){
		var open = "open";
		var day = this.props.today.day;
		var hour = this.props.today.hour;
		if((day===0)||(day===5)){if(hour > 9){day++}};
		if((day===0)||(day===6)){open = "closed"};
		if(hour < 18){open = "closed"};
		var openColor = ''; if(open==='open'){openColor = '#76ff03'}else{openColor = '#ef5350'}			
		return(
			<div style={{display:'inline-block'}}>
				<a style={{color:'white'}} href='https://www.asx.com.au/'>ASX:</a> <span style={{color:openColor}}>{open}</span>
			</div>
		)
	}
}

//open 9:30 ~ 16:00 EST
class TSX extends Component{
	render(){
		var open = "open";
		var day = this.props.today.day;
		var hour = this.props.today.hour;
		var minutes = this.props.today.mintues;
		if((day===0)||(day===6)){open = "closed"};
		if((hour < 9)||(hour > 16)){open = "closed"};
		if((hour===9)&&(minutes < 30)){open = "closed"}
		var openColor = ''; if(open==='open'){openColor = '#76ff03'}else{openColor = '#ef5350'}		
		return(
			<div style={{display:'inline-block'}}>
				<a style={{color:'white'}} href='https://www.tsx.com/'>TSX:</a> <span style={{color:openColor}}>{open}</span>
			</div>
		)
	}
}

//open 9:00 ~ 15:00 JST
class KRX extends Component{
	render(){
		var open = "open";
		var day = this.props.today.day;
		var hour = this.props.today.hour;
		if((day===0)||(day===5)){if(hour > 10){day++}};
		if((day===0)||(day===6)){open = "closed"};
		if((hour < 19)&&(hour > 2)){open = "closed"}
		var openColor = ''; if(open==='open'){openColor = '#76ff03'}else{openColor = '#ef5350'}			
		return(
			<div style={{display:'inline-block'}}>
				<a style={{color:'white'}} href='https://global.krx.co.kr/'>KRX:</a> <span style={{color:openColor}}>{open}</span>
			</div>
		)
	}
}

//open 8:00 ~ 4:30 GMT
class LSE extends Component{
	render(){
		var open = "open";
		var day = this.props.today.day;
		var hour = this.props.today.hour;
		var minutes = this.props.today.mintues;
		if((day===0)||(day===5)){if(hour > 19){day++}};
		if((day===0)||(day===6)){open = "closed"};
		if((hour < 3)||(hour > 11)){open = "closed"}
		if((hour===11)&&(minutes > 30)){open = "closed"}
		var openColor = ''; if(open==='open'){openColor = '#76ff03'}else{openColor = '#ef5350'}					
		return(
			<div style={{display:'inline-block'}}>
				<a style={{color:'white'}} href='https://www.lse.ac.uk/'>LSE:</a> <span style={{color:openColor}}>{open}</span>
			</div>
		)
	}
}

//open 9:00 ~ 15:00 JST
class JPX extends Component{
	render(){
		var open = "open";
		var day = this.props.today.day;
		var hour = this.props.today.hour;
		if((day===0)||(day===5)){if(hour > 10){day++}};
		if((day===0)||(day===6)){open = "closed"};
		if((hour < 19)&&(hour > 2)){open = "closed"}
		var openColor = ''; if(open==='open'){openColor = '#76ff03'}else{openColor = '#ef5350'}					
		return(
			<div style={{display:'inline-block'}}>
				<a style={{color:'white'}} href='http://www.jpx.co.jp/english/'>JPX:</a> <span style={{color:openColor}}>{open}</span>
			</div>
		)
	}
}

//open 9:30 ~ 16:00 EST
class NASDAQ extends Component{
	render(){
		var open = "open";
		var day = this.props.today.day;
		var hour = this.props.today.hour;
		var minutes = this.props.today.mintues;
		if((day===0)||(day===6)){open = "closed"};
		if((hour < 9)||(hour > 16)){open = "closed"};
		if((hour===9)&&(minutes < 30)){open = "closed"}
		var openColor = ''; if(open==='open'){openColor = '#76ff03'}else{openColor = '#ef5350'}					
		return(
			<div style={{display:'inline-block'}}>
				<a style={{color:'white'}} href='https://www.nasdaq.com/'>NASDAQ:</a> <span style={{color:openColor}}>{open}</span>
			</div>
		)
	}
}

//open 9:30 ~ 16:00 EST
class NYSE extends Component{
	render(){
		var open = "open";
		var day = this.props.today.day;
		var hour = this.props.today.hour;
		var minutes = this.props.today.mintues;
		if((day===0)||(day===6)){open = "closed"};
		if((hour < 9)||(hour > 16)){open = "closed"};
		if((hour===9)&&(minutes < 30)){open = "closed"}
		var openColor = ''; if(open==='open'){openColor = '#76ff03'}else{openColor = '#ef5350'}					
		return(
			<div style={{display:'inline-block'}}>
				<a style={{color:'white'}} href='https://www.nyse.com/'>NYSE:</a> <span style={{color:openColor}}>{open}</span>
			</div>
		)
	}
}

class TimeTicker extends Component{
	render(){
		return(
			<div style={{textAlign:'right', width: 220, color:'#ffff8d', fontSize:16, position:'absolute', right:"1px", paddingLeft:20, backgroundColor:'#091749'}}>{this.props.today}</div>
		)	
	}
}

class StockHeader extends Component{
  	constructor(props) {
    	super(props);
    	this.state = {
    		today: '', 
    		day: '',
    		hour: Number,
    		minutes: Number};
    	this.componentDidMount = this.componentDidMount.bind(this);
    	this.componentWillUnmount = this.componentWillUnmount.bind(this);
    	this.changeTime = this.changeTime.bind(this);
	};
  	componentDidMount() {
  		window.newToday = setInterval(this.changeTime, 1000);
  		this.setState({today: window.newToday})
  	};	
  	componentWillUnmount() {
  		clearInterval(window.newToday)
  	};	
	changeTime () {
		var todayDate = new Date().toString().slice(0,24)
		var day = new Date().getDay()
		var hour = new Date().getHours()
		var minutes = new Date().getMinutes()
       	this.setState({ 
       		today: todayDate, 
       		day: day,
       		hour: hour,
       		minutes: minutes
       	});
	}
	render(){
		return(
			<div className="stock-header" style={{display:'inline-block'}}>
				<TimeTicker today={this.state.today} />
				<NYSE today={this.state}/>
				<HKEX today={this.state}/>
				<ASX today={this.state}/>
				<LSE today={this.state}/>
				<KRX today={this.state}/>
				<TSX today={this.state}/>
				<NZX today={this.state}/>
				<NASDAQ today={this.state}/>
				<JPX today={this.state}/>
			</div>
		)
	}
}

class Stock extends Component{
	render(){
		return(
			<div onClick={this.onHover} className="stock-wrapper">
				<div className="text-center stock-rows">				
					{this.props.stocks.map(function(stock, index){
						var bgColor = "";  var arrowImg = ""
						if(stock.change>=0){bgColor='#76ff03'; arrowImg = greenArrow
						}else{bgColor='#ef5350'; arrowImg = redArrow}
						return(
							<div className="col-xs-6 col-sm-4 col-md-3 text-center eachStock" key={index} 
								style={{padding: 5, backgroundColor:'#091749', color:bgColor, fontSize:18, border: '1px white solid'}}>
								<BuildStocks stock={stock} arrowImg={arrowImg} />
							</div>
						)
					})}
				</div>
			</div>
		)
	}
}

class BuildStocks extends Component{
		constructor() {
		super();
		this.state = {show: true}
		this.onClick = this.onClick.bind(this);
		this.showNow = this.showNow.bind(this);
	}
	onClick(event){
		this.setState({show: !this.state.show})
		setTimeout(this.showNow, 1200)
	}	
	showNow(){
		this.setState({show:true})
	}
	render() {
		var hideStock = ""
		var showName = "none"
		if(!this.state.show){hideStock="none"; showName=""
		}else{hideStock=""; showName="none"}
		return(
			<div onClick={this.onClick}>
				<div style={{display:hideStock, height:25, overflow:'hidden'}}>
					<div className="col-xs-4 col-sm-4">{this.props.stock.symbol}</div>
					<div className="hidden-xs col-sm-4">${this.props.stock.price}</div>
					<div className="col-xs-7 col-sm-4" style={{padding:0}}>
						{this.props.stock.change} <img style={{padding:0, float:'right', marginTop:3, marginLeft:5, width:20, height:18}} 
						src={this.props.arrowImg} alt="." />
					</div>									
				</div>
				<div style={{display:showName, maxHeight:25}} className="col-xs-12">
				{this.props.stock.name}</div>		
			</div>
		)		
	}	
}

class Stocks extends Component {
  	constructor(props) {
    	super(props);
    	this.state = {stocks: []};
    	this.componentDidMount = this.componentDidMount.bind(this);
	};
  	componentDidMount() {
		$.getJSON(stockUrl, (stockData) =>{
			var stockArr = stockData.query.results.quote
			var stockArrMin = []
			for(let i = 0; i < stockArr.length; i++){
				if(stockArr[i].symbol!==null){
					if(stockArr[i].DaysHigh==null){stockArr[i].DaysHigh = "-"};
					if(stockArr[i].Change==null){stockArr[i].Change = "0"};
					var eachStock = {
						symbol: stockArr[i].symbol,
						price: stockArr[i].DaysHigh,
						change: stockArr[i].Change,
						name: stockArr[i].Name
					}
					stockArrMin.push(eachStock)
					
				}
			}
			this.setState({stocks: stockArrMin})
		});		
  	}

  	render() {
    	return(
    		<div>
    			<div style={{position:'fixed', zIndex:8, backgroundColor:'#091749', color:'white'}}>
    				<StockHeader />
    				<Stock stocks={this.state.stocks} />
    				<div style={{position:'fixed', backgroundColor:'white', width:'100%', zIndex:11, height:4, borderBottom:'solid 3px #091749'}}></div>
    			</div>
    			<div style={{height:138, marginBottom:10}}></div>
    		</div>
		)
  	}
}

// hahaaa
export default Stocks;

