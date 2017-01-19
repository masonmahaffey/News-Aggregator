import React, { Component } from 'react';
import './business.css';
import Stocks from './BusinessStocks.js'
import { BusinessInsider, Fortune, FinancialTimes } from './BusinessArticles'


class Business extends Component{
	render() {
		return(
			<div>
				<Stocks />
				<div className='col-sm-offset-4 col-sm-8' style={{marginTop:50}}>
					
					<FinancialTimes />
					<Fortune />
					<BusinessInsider />
				</div>
			</div>
		)		
	}
}

export default Business;
