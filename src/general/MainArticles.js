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
			<div style={{margin:'20px 20px 0'}}>
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
					var title = article.title
					var description = article.description
					// if(title.length > 70){title = title.slice(0,70)+'...'}
					// if(description.length > 185){description = description.slice(0,185)+'...'}
					return(
						<div className='row each-article-row' key={index} style={{
							marginBottom:10, fontSize:18, backgroundColor:'#F3F1F4', border:'1px solid #ddd', padding:10}}>
							<a href={article.url} style={{color:'black'}}>
								<div className='col-md-2 hidden-xs hidden-sm' style={{padding:0}}>
									<img alt='aaaa' src={article.urlToImage} style={{marginTop:5,height: '60px', filter: 'brightness(70%)'}}/>
									<span style={{marginLeft:10,fontSize:15, color:'grey'}}>5 hours ago</span>
								</div>
								<div className='col-md-10 col-sm-12' style={{display:'inline-block'}}>
									<div style={{fontWeight:'bold'}}>{title}</div>
									<div style={{fontSize: '14px',minHeight:'30px'}}>{description}</div>
								</div>
							</a>
						</div>
					)	
				})}
			</div>
		)
	}
})

export default MainArticles