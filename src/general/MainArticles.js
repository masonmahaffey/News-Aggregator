import React from 'react';
import '../index.css';
import $ from 'jquery'

const newsApiKey = '275258a3655c449ba4907833f5baf08b';
const apiMain = 'https://newsapi.org/v1/articles?source=';	
const apiTail = '&apiKey='

var MainArticles = React.createClass({	
	getInitialState: function() {
		return({
			articlesArray: []
		})
	},
	componentDidMount: function() {
		var apiSource = 'cnn';
		var url = apiMain + apiSource + apiTail + newsApiKey;

		// $.getJSON('http://ec2-52-25-56-215.us-west-2.compute.amazonaws.com:3000/api/articles',(returnData) =>{

		// 	console.log(returnData)
		// });

		$.getJSON(url, (newsData) =>{
			this.setState({
				articlesArray: newsData.articles
			})
		});		
	},
	render: function(){
		return(
			<div style={{marginTop:70}}>
				<EachMainArticle articles={this.state.articlesArray} />
			</div>
		);
	}
})

var EachMainArticle = React.createClass({
	render: function(){
		return(
			<div>
				{this.props.articles.map(function(article, index){
					return(
						<div key={index} style={{borderBottom: "3px solid white", fontSize:18, backgroundColor:'lightgrey', padding:10}}>
							<a href={article.url}><img alt='aaaa' src={article.urlToImage} style={{height: '60px',float: 'left'}}/></a>
							<a href={article.url}><span style={{fontWeight:'bold',}}>{article.title}</span></a><br/>
							
							<div style={{fontSize: '14px',minHeight:'30px'}}>
								<div>{article.description}</div>
							</div>
						</div>
					)	
				})}
			</div>
		)
	}
})

export default MainArticles