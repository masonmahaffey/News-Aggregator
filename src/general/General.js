import React from 'react';
import '../index.css';
import $ from 'jquery'
import Weather from './Weather'
import TopNewsByCategory from './TopNewsByCategory'
import MainArticles from './MainArticles'
const newsApiKey = '275258a3655c449ba4907833f5baf08b';
const apiMain = 'https://newsapi.org/v1/articles?source=';	
const apiTail = '&apiKey='


var Component1Child1 = React.createClass({
	getInitialState: function() {
		return({
			articlesArray: []
		})
	},
	componentDidMount: function() {
		var apiSource = 'bbc-news';
		var url = apiMain + apiSource + apiTail + newsApiKey;
		$.getJSON(url, (newsData) =>{
			// console.log(newsData)
			this.setState({
				articlesArray: newsData.articles
			})
		});		
	},
	render: function(){
		return(
			<div className='c1c1'>
				<Component1child1grandchild articles={this.state.articlesArray} />
			</div>
		);
	}
})


var Component1child1grandchild = React.createClass({
	render: function(){
		// console.log(this.props.articles)
		return(
			<div className='scrollingNews hidden-xs'>
				{this.props.articles.map(function(article, index){
					return(
						<div key={index} style={{fontSize:18, padding:15, display: 'inline-block'}}>
							{article.description}
						</div>
					)	
				})}
			</div>
		)
	}
})
var Component1Child2 = React.createClass({
	render: function(){
		return(
			<div className='c1c2'>
			<br/><br/><br/>
				<h4>&nbsp; Component 1 Child 2</h4>
				<Weather />
				<TopNewsByCategory />
			</div>
		)
	}
})





var General = React.createClass({
	render: function(){
		return(
			<div>
				<Component1Child1 />
				<div className='col-md-3 hidden-xs hidden-sm'>
					<Component1Child2 />
				</div>
				<div className='col-md-9'>
					<MainArticles />
				</div>
			</div>
		)
	}
})

export default General;
