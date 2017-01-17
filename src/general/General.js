import React from 'react';
import '../index.css';
import $ from 'jquery'
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
				<Component1child2Granchild1 />
				<Component1child2Granchild2 />
				<Component1child2Granchild3 />
			</div>
		)
	}
})
var Component1child2Granchild1 = React.createClass({
	render: function(){
		return(
			<div style={{backgroundColor:'lightblue', margin:10, padding:10}}>
				<h4 style={{color:'blue'}}>granchild1</h4>
				<h4>weather widget with real-time animations?? not like my fake cloud</h4>
			</div>
		)
	}	
})
var Component1child2Granchild2 = React.createClass({
	render: function(){
		return(
			<div style={{backgroundColor:'lightblue', margin:10, padding:10, height:300}}>
				<h4 style={{color:'blue'}}>granchild2</h4>
				<h4>celebrity top news?</h4>
			</div>
		)
	}	
})
var Component1child2Granchild3 = React.createClass({
	render: function(){
		return(
			<div style={{backgroundColor:'lightblue', margin:10, padding:10, height:300}}>
				<h4 style={{color:'blue'}}>granchild3</h4>
				<h4>Upcoming movies?</h4>
			</div>
		)
	}	
})

var Component1Child3 = React.createClass({	
	getInitialState: function() {
		return({
			articlesArray: []
		})
	},
	componentDidMount: function() {
		var apiSource = 'bbc-news';
		var url = apiMain + apiSource + apiTail + newsApiKey;
		$.getJSON(url, (newsData) =>{
			this.setState({
				articlesArray: newsData.articles
			})
		});		
	},
	render: function(){
		return(
			<div>
				{/* get rid of div tags later*/}
				<br/><br/>
				<h3>^^^^^this is component-1 child-1 above^^^^^</h3>
				<h3>this is component-1 child-3 below</h3>
				<h4>example code for dragging around divs 'http://jsfiddle.net/robertc/kKuqH/' </h4>
				<Component1child3grandchild articles={this.state.articlesArray} />
			</div>
		);
	}
})

var Component1child3grandchild = React.createClass({
	render: function(){
		return(
			<div>
				{this.props.articles.map(function(article, index){
					return(
						<div key={index} style={{borderBottom: "7px solid white", fontSize:18, backgroundColor:'lightgrey', padding:15}}>
							<a href={article.url}>{article.title}</a><br/>
								<a href={article.url}><img alt='aaaa' src={article.urlToImage}/></a>
							<div style={{minHeight:150}}>
								<div>{article.description}</div>
								<div>Publish date: {article.publishedAt}<br/>logic needed for 'posted ~minutes ago'</div>

								
								<div>share article on facebook link</div>
							</div>
						</div>
					)	
				})}
			</div>
		)
	}
})
var Component1Child4 = React.createClass({
	render: function(){
		return(
			<div className='c1c4' style={{marginTop:30}}>
				Component 1 Child 4<br/>
				Component 1 Child 4<br/>
				Component 1 Child 4<br/>
				Component 1 Child 4<br/>
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
				<div className='col-md-8'>
					<Component1Child3 />
				</div>
				<div className='col-lg-1 col-md-12'>
					<Component1Child4 />
				</div>
			</div>
		)
	}
})

export default General;
