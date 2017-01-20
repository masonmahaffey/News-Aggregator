import React from 'react';
import './entertainment.css';
import $ from 'jquery';


//Sources to pull from: buzzfeed, entertainment-weekly, and mtv-news
var entertainmentURL = 'https://newsapi.org/v1/articles?source=';
var entertainmentURLTail = '&sortBy=top&apiKey=09a731f9f7e9481c9deffbec56d9b6c9';
// var entertainmentAPIKey = '09a731f9f7e9481c9deffbec56d9b6c9';



//Map through the ewArticlesArray to find the TOP news 
class EW extends React.Component{
	render(){
		return(
			<div className="ew">
			Entertainment Weekly
				{this.props.articles.map(function(article, index){
					return (
						<div key={index} style={{border: '3px solid white', fontSize:18, backgroundColor:'lightgrey', display: 'block', width:'30%' }}>
							<a href={article.url}>{article.title}</a>
						</div>
					) 
				})}
			</div>
		)
	}
} 

class Box1 extends React.Component{
	constructor(props) {
		super(props);
		//Need an array to store data gathered frrom the getJSON call
		//Need an initial state
		this.state = {ewArticlesArray: []};
		//Bound "this" from componentDidMount with the "this" from "Column1"
		this.componentDidMount = this.componentDidMount.bind(this);
	}
	componentDidMount() {
		//get JSON here and use it to set state
		//put data into an array to map through it for the TOP news
		var entertainmentSource1 = 'entertainment-weekly';
		var url = entertainmentURL + entertainmentSource1 + entertainmentURLTail;
		$.getJSON(url, (ewArticles) =>{
			this.setState({ewArticlesArray: ewArticles.articles});
		});
	}
	render(){
		return(
			<div>
				{/*Return articles for entertainment-weekly through EW*/}
				<EW articles={this.state.ewArticlesArray}/>
			</div>
		)
	}
}



var Entertainment = React.createClass({
	render: function(){
		return(
			<div style={{backgroundColor:'red'}}>
				<Box1 />
			</div>
		)
	}
})

export default Entertainment;

