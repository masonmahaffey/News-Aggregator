import React, { Component } from 'react';

// Stock market math for calculating open times
class NZX extends Component{
	render(){
		var open = "open";
		var day = this.props.today.day;
		var hour = this.props.today.hour;
		if((day===0)||(day===5)){if(hour > 7){day++}};
		if((day===0)||(day===6)){open = "closed"};
		if((hour < 16)&&(hour>0)){open = "closed"};
		var openColor = ''; if(open==='open'){openColor = '#76ff03'}else{openColor = 'grey'}
		return(
			<div style={{display:'inline-block'}}>
				<a target='_blank' style={{color:'white'}} href='https://www.nzx.com/'>NZX:</a> <span style={{color:openColor}}>{open}</span>
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
		var openColor = ''; if(open==='open'){openColor = '#76ff03'}else{openColor = 'grey'}	
		return(
			<div style={{display:'inline-block'}}>
				<a target='_blank' style={{color:'white'}} href='https://www.hkex.com.hk/'>HKEX:</a> <span style={{color:openColor}}>{open}</span>
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
		var openColor = ''; if(open==='open'){openColor = '#76ff03'}else{openColor = 'grey'}			
		return(
			<div style={{display:'inline-block'}}>
				<a target='_blank' style={{color:'white'}} href='https://www.asx.com.au/'>ASX:</a> <span style={{color:openColor}}>{open}</span>
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
		var openColor = ''; if(open==='open'){openColor = '#76ff03'}else{openColor = 'grey'}		
		return(
			<div style={{display:'inline-block'}}>
				<a target='_blank' style={{color:'white'}} href='https://www.tsx.com/'>TSX:</a> <span style={{color:openColor}}>{open}</span>
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
		var openColor = ''; if(open==='open'){openColor = '#76ff03'}else{openColor = 'grey'}			
		return(
			<div style={{display:'inline-block'}}>
				<a target='_blank' style={{color:'white'}} href='https://global.krx.co.kr/'>KRX:</a> <span style={{color:openColor}}>{open}</span>
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
		var openColor = ''; if(open==='open'){openColor = '#76ff03'}else{openColor = 'grey'}					
		return(
			<div style={{display:'inline-block'}}>
				<a target='_blank' style={{color:'white'}} href='https://www.lse.ac.uk/'>LSE:</a> <span style={{color:openColor}}>{open}</span>
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
		var openColor = ''; if(open==='open'){openColor = '#76ff03'}else{openColor = 'grey'}					
		return(
			<div style={{display:'inline-block'}}>
				<a target='_blank' style={{color:'white'}} href='http://www.jpx.co.jp/english/'>JPX:</a> <span style={{color:openColor}}>{open}</span>
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
		var openColor = ''; if(open==='open'){openColor = '#76ff03'}else{openColor = 'grey'}					
		return(
			<div style={{display:'inline-block'}}>
				<a target='_blank' style={{color:'white'}} href='https://www.nasdaq.com/'>NASDAQ:</a> <span style={{color:openColor}}>{open}</span>
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
		var openColor = ''; if(open==='open'){openColor = '#76ff03'}else{openColor = 'grey'}					
		return(
			<div style={{display:'inline-block'}}>
				<a target='_blank' style={{color:'white'}} href='https://www.nyse.com/'>NYSE:</a> <span style={{color:openColor}}>{open}</span>
			</div>
		)
	}
}

//right top corner time display
class TimeTicker extends Component{
	render(){
		return(
			<div style={{textAlign:'right', width: 220, color:'#ffff8d', fontSize:16, position:'absolute', right:"1px", paddingLeft:20, backgroundColor:'#333333'}}>{this.props.today}</div>
		)	
	}
}

// passing down current time for each market open times
// stockheader parent
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
			<div style={{overflow:'hidden',position:'fixed', height: 38,zIndex:8, width:'100%',backgroundColor:'#333333', color:'white'}}>
				<div className="stock-header"  style={{display:'inline-block'}}>
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
			</div>
		)
	}
}

export default StockHeader;
