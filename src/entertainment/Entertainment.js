import React, {Component} from 'react';
import './entertainment.css';
import $ from 'jquery';



//To display entertainment data, we can use inspiration from Pinterest. Display small images and brief summary of article.
//To make it visually appealing, we need more articles and smaller images.
//Code rewritten (condensed) for styling and mobile-friendly purposes. Put images into one array and articles in another. Map through them to evenly redistribute them throughout the page after concatenating. Without doing that, you will have lots of white spaces. The images are not isotope, so when one image shifts due to resizing, there is nothing to replace that empty spot.


const entertainmentURL = 'https://newsapi.org/v1/articles?source=';
const entertainmentURLTail = '&sortBy=top&apiKey=';
const entertainmentAPIKey = '09a731f9f7e9481c9deffbec56d9b6c9';


//Sources to pull from: buzzfeed, entertainment-weekly, and mtv-news
// source1 = entertainment-weekly;
// source2 = buzzfeed;
// source3 = mtv;
// source4 = mtv-uk;
// source5 = daily-mail;


//=================== Grab images and stash into an array =======================
//Distribute evenly between 4 divs/columns

class ArticleImages extends Component{
    render(){
        //Get and display images, titles, descriptions, authors
        var imageArray = this.props.articles;
        var arrayLengthDividedByFour = Math.floor(imageArray.length/4);
        var imageArrayColumnOne = imageArray.slice(0, arrayLengthDividedByFour+1)
        var imageArrayColumnTwo = imageArray.slice(arrayLengthDividedByFour+1, arrayLengthDividedByFour*2+2)
        var imageArrayColumnThree = imageArray.slice(arrayLengthDividedByFour*2+2, arrayLengthDividedByFour*3+2)
        var imageArrayColumnFour = imageArray.slice(arrayLengthDividedByFour*3+2)
    return(
            <div>
                {/*<img style={{position:'fixed', width:'100vw', height:'100vh'}} src={require('./images/music.png')}/>*/}
                <div className='col-xs-12 col-sm-6' style={{padding:0}}>
                <div className='col-xs-12 col-md-12 col-lg-6' style={{marginTop:25}}>
                    {imageArrayColumnOne.map(function(article, index){
                        var description = article.description
                        if(description.length > 50){description = description.slice(0,50)+'...'}
                        return(
                            <div className='row eachArticle' key={index} style={{margin:1, marginBottom:20, padding:15,height:'100%',borderRadius:'3%'}}>
                                <a href={article.url} style={{color:'black'}}>
                                    <img src={article.urlToImage} style={{width:'100%', height:'120%', marginBottom:7, borderRadius:'3%'}} alt="a"/>
                                    <div className='col-xs-12' style={{padding:0}}>{article.title}</div>
                                    <div className='col-xs-12 text-left' style={{color:'grey',padding:0}}>{description}</div>
                                    <div className='col-xs-12' style={{width:'100%', color:'grey', marginTop:10, padding:0}}>By {article.author}</div>
                                </a>
                            </div>
                        )   
                    })}
                </div>
                <div className='col-xs-12 col-md-12 col-lg-6' style={{marginTop:25}}>
                    {imageArrayColumnTwo.map(function(article, index){
                        var description = article.description
                        if(description.length > 50){description = description.slice(0,50)+'...'}
                        return(
                            <div className='row eachArticle' key={index} style={{margin:1, marginBottom:20, padding:15,height:'100%',borderRadius:'3%'}}>
                                <a href={article.url} style={{color:'black'}}>
                                    <img src={article.urlToImage} style={{width:'100%', height:'120%', marginBottom:7, borderRadius:'3%'}} alt="a"/>
                                    <div className='col-xs-12' style={{padding:0}}>{article.title}</div>
                                    <div className='col-xs-12 text-left' style={{color:'grey',padding:0}}>{description}</div>
                                    <div className='col-xs-12' style={{width:'100%', color:'grey', marginTop:10, padding:0}}>By {article.author}</div>
                                </a>
                            </div>
                        )   
                    })}
                </div>
                </div>
                <div className='col-xs-12 col-sm-6' style={{padding:0}}>
                <div className='col-xs-12 col-md-12 col-lg-6' style={{marginTop:25}}>
                    {imageArrayColumnThree.map(function(article, index){
                        var description = article.description
                        if(description.length > 50){description = description.slice(0,50)+'...'}
                        return(
                            <div className='row eachArticle' key={index} style={{margin:1, marginBottom:20, padding:15,height:'100%',borderRadius:'3%'}}>
                                                                <a href={article.url} style={{color:'black'}}>
                                    <img src={article.urlToImage} style={{width:'100%', height:'120%', marginBottom:7, borderRadius:'3%'}} alt="a"/>
                                    <div className='col-xs-12' style={{padding:0}}>{article.title}</div>
                                    <div className='col-xs-12 text-left' style={{color:'grey',padding:0}}>{description}</div>
                                    <div className='col-xs-12' style={{width:'100%', color:'grey', marginTop:10, padding:0}}>By {article.author}</div>
                                </a>
                            </div>
                        )   
                    })}
                </div>
                <div className='col-xs-12 col-md-12 col-lg-6' style={{marginTop:25}}>
                    {imageArrayColumnFour.map(function(article, index){
                        var description = article.description
                        if(description.length > 50){description = description.slice(0,50)+'...'}
                        return(
                            <div className='row eachArticle' key={index} style={{marginTop: 5, marginBottom:20, padding:15,height:'100%',borderRadius:'3%'}}>
                                                                <a href={article.url} style={{color:'black'}}>
                                    <img src={article.urlToImage} style={{width:'100%', height:'120%', marginBottom:7, borderRadius:'3%'}} alt="a"/>
                                    <div className='col-xs-12' style={{padding:0}}>{article.title}</div>
                                    <div className='col-xs-12 text-left' style={{color:'grey',padding:0}}>{description}</div>
                                    <div className='col-xs-12' style={{width:'100%', color:'grey', marginTop:10, padding:0}}>By {article.author}</div>
                                </a>
                            </div>
                        )   
                    })}
                </div>
                </div>
            </div>
        )
    }   
}

//========= Gather info for all articles (JSON calls here). Stash into an array ===============
//Combine the images and articles by concatenating after the getJSON call.

class EntertainmentArticles extends Component{
	constructor(props) {
		super(props);
		this.state = {articlesArray:[]};
		this.componentDidMount = this.componentDidMount.bind(this);
	}
	componentDidMount() {
		//JSON calls for articles (5 different sources)
		var articlesArray = []
		var apiSource = 'entertainment-weekly';
		var url = entertainmentURL + apiSource + entertainmentURLTail + entertainmentAPIKey;

		$.getJSON(url, (newsArticles) =>{
			articlesArray = articlesArray.concat(newsArticles.articles)
			this.setState({articlesArray: articlesArray});
		});
		apiSource = 'buzzfeed';
		url = entertainmentURL + apiSource + entertainmentURLTail + entertainmentAPIKey;
		$.getJSON(url, (newsArticles) =>{	
			articlesArray = articlesArray.concat(newsArticles.articles)
			this.setState({articlesArray: articlesArray});
		});
		apiSource = 'mtv-news';
		url = entertainmentURL + apiSource + entertainmentURLTail + entertainmentAPIKey;
		$.getJSON(url, (newsArticles) =>{
				
				articlesArray = articlesArray.concat(newsArticles.articles)
				this.setState({articlesArray: articlesArray});
		});
		apiSource = 'mtv-news-uk';
		url = entertainmentURL + apiSource + entertainmentURLTail + entertainmentAPIKey;
		$.getJSON(url, (newsArticles) =>{
				articlesArray = articlesArray.concat(newsArticles.articles)
				this.setState({articlesArray: articlesArray});
		});
		apiSource = 'daily-mail';
		url = entertainmentURL + apiSource + entertainmentURLTail + entertainmentAPIKey;
		$.getJSON(url, (newsArticles) =>{
				
				articlesArray = articlesArray.concat(newsArticles.articles)
				this.setState({articlesArray: articlesArray});
		});
		apiSource = 'mashable';
		url = entertainmentURL + apiSource + entertainmentURLTail + entertainmentAPIKey;
		$.getJSON(url, (newsArticles) =>{
				articlesArray = articlesArray.concat(newsArticles.articles)
				this.setState({articlesArray: articlesArray});
		});		
			} 
	render(){
		console.log(this.state.articlesArray)
		return(
			<div>
				<ArticleImages articles={this.state.articlesArray} />
			</div>
		)
	}
}

//============ Render Page to display all articles ==================
class Entertainment extends Component{
	render() {
		return(
			
				<EntertainmentArticles />
			
		)
	}
}

export default Entertainment;




