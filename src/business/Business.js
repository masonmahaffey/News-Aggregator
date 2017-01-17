import React, { Component } from 'react';
import './business.css';
import Stocks from './BusinessStocks.jsx'
import { BusinessInsider, Fortune, FinancialTimes } from './BusinessArticles.jsx'


class Business extends Component{
	render() {
		return(
			<div>
				<Stocks />
				<div>
					<h3 style={{marginTop:-20}}>different ways to display articles</h3>
					<BusinessInsider />
					<FinancialTimes />
					<Fortune />
				</div>
			</div>
		)		
	}
}

export default Business;
