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

export default MainArticles