import React, { Component } from 'react';
import './business.css';
import Stocks from './BusinessStocks.js'
import { BusinessInsider, Fortune, FinancialTimes } from './BusinessArticles'
import ArticleTitles from './ArticleTitles.js'


class Business extends Component{
	render() {
		return(
			<div>
				<Stocks />
				{/*<div className='col-sm-offset-3 col-sm-8' style={{marginTop:38, paddingRight:0}}>
					
					
					<BusinessInsider />
					<FinancialTimes />
					
				</div>*/}
				<div>
				<ArticleTitles />
				</div>
			</div>
		)		
	}
}

export default Business;
