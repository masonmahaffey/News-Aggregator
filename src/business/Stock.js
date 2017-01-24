import React, { Component } from 'react';
import greenArrow from './images/green.png'
import redArrow from './images/red.png'

// bottom half of left hand column


// z-index variable made for displaying each stocks graphs on the very top, when clicked.
var zIndexGraph = 10
class BuildStocks extends Component{
		constructor() {
		super();
		this.state = {show: true}
		this.onClick = this.onClick.bind(this);
		this.showNow = this.showNow.bind(this);
	}
	onClick(event){
		this.setState({show: !this.state.show})
		setTimeout(this.showNow, 5000)
		zIndexGraph++
	}	
	showNow(){
		this.setState({show:true})
	}
	render() {
		//bootstrap and styling for each row
		var hideStock = ""
		var showName = "none"
		if(!this.state.show){hideStock="none"; showName=""
		}else{hideStock=""; showName="none"}
		//stock graph url
		var graphUrl = 'http://chart.finance.yahoo.com/z?s=' + this.props.stock.symbol.toUpperCase() + '&t=6m&q=l&l=on&z=s&p=m50,m200'
		return(
			<div>
				<div onClick={this.onClick} className="col-sm-12 text-center" 
					style={{zIndex:7, padding: 4, height:40, lineHeight:'150%',
					backgroundColor:'#2E2B31', color:this.props.bgColor, fontSize:17, borderTop: '1px #222222 solid'}}>
					<div className="eachStock" style={{display:hideStock, overflow:'hidden'}}>
						<div style={{color:'white'}} className="col-sm-6 col-md-4">
							{this.props.stock.symbol}
						</div>
						<div style={{color:'lightgrey'}} className="hidden-sm col-md-4">
							${this.props.stock.price}
						</div>
						<div className="col-sm-6 col-md-4" style={{padding:0}}>
							{this.props.stock.change} <img style={{padding:0, float:'right', marginTop:5, marginLeft:5, width:20, height:18}} 
							src={this.props.arrowImg} alt="." />
						</div>									
					</div>	
					<div style={{color:'white',display:showName}}>{this.props.stock.name}</div>		
				</div>
				<div className='stock-graph' onClick={this.onClick} style={{display:showName, zIndex:zIndexGraph, paddingLeft:0}}>
					<div style={{backgroundColor:'#2E2B31', margin:'2%'}}>
						<img style={{width: '100%', height:'100%'}} alt='a' src={graphUrl}/>
					</div>
				</div>
			</div>
		)		
	}	
}

// each row of stock
class Stock extends Component{
	render(){
		return(
			<div onClick={this.onHover} className="stock-wrapper hidden-xs col-sm-3" style={{position:'fixed', top:'350px', marginTop:40, left:0, height:'60vh'}}>
				<div className="text-center stock-rows">				
					{this.props.stocks.map(function(stock, index){
						var bgColor = "";  var arrowImg = ""
						if(stock.change>=0){bgColor='#76ff03'; arrowImg = greenArrow
						}else{bgColor='#ef5350'; arrowImg = redArrow}
						return(
							<div key={index}>
								<BuildStocks bgColor={bgColor} stock={stock} arrowImg={arrowImg} />
							</div>
						)
					})}
				</div>
			</div>
		)
	}
}
export default Stock