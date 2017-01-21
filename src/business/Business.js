import React, { Component } from 'react';
import './business.css';
import Stocks from './BusinessStocks.js'
import ArticleTitles from './ArticleTitles.js'

//big boss
class Business extends Component{
	render() {
		return(
			<div>
				<Stocks />
				<ArticleTitles />
			</div>
		)		
	}
}

export default Business;
