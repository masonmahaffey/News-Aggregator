import React, { Component } from 'react';
import '../index.css';
import $ from 'jquery'

const newsApiKey = '275258a3655c449ba4907833f5baf08b';
const apiMain = 'https://newsapi.org/v1/articles?source=';	
const apiTail = '&apiKey='

class ArticleDescription extends Component{
	render(){
		return(
			<div className='col-sm-8' style={{backgroundColor:'yellow'}}>
			</div>
		)
	}
}

class Article extends Component{
	constructor(props) {
		super(props);
		this.state = {
			display: 'none',
			article: this.props.article
		}
	}
	render(){
		return(
			<div className='row'>
				<div onClick={this.props.onClick} className='col-sm-3' style={{backgroundColor:'blue'}}>
					<div style={{position:'relative'}}>{this.props.article.title}</div>
				</div>
				<ArticleDescription article={this.state.article} display={this.state.display}/>
			</div>
		)
	}
}

class MainArticles extends Component{
	constructor(props) {
		super(props);
		this.state = {
			articlesArray: []
		}
	}
	componentDidMount() {
		var apiSource = 'cnn';
		var url = apiMain + apiSource + apiTail + newsApiKey;		
		$.getJSON(url, (newsData) =>{
			this.setState({
				articlesArray: newsData.articles
			})
		});				
	}
	render(){
		return(
			<div className='col-sm-10'>
				{this.state.articlesArray.map((article,index)=>{
				return(<Article key={index} article={article} />)
				})}
			</div>
			)			


	}
}

export default MainArticles

