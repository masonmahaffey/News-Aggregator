#The MSON Objects - Upd8ed#

##Description/Overview
Upd8ed, a news aggregator, is a demonstration of the front-end skills we have learned during our time thus far in coding bootcamp. We have created a one-stop shop by pulling the latest business, entertainment, global, sports news from a variety of sources for the viewer. Upd8ed replicates the functionality of google news with the influence of Reddit.com and Pinterest.com.


##Table of contents

[Description/Overview](#description/overview)

[Technologies Used](#technologies)

[Challenges and Solutions](#challenges-and-solutions)

[GitHub Link](#github-link)

[Code Snippets and Screenshots](#code-snippets-and-screenshots)

[MVP (Minimal Viable Product)](#mvp-minimal-viable-product)

[Stretch Goals](#stretch-goals)

[Team Members and Contributions](#team-members-and-contributions)

[Project Timeline](#project-timeline)



##Technologies
The following languages, frameworks and APIs were used:

  * HTML

  * CSS

  * Javascript

  * Bootstrap

  * React.JS

  * node.JS

  * News API

  * OpenWeatherMap API

  * Yahoo Finance API


##Challenges and Solutions
1.  **Challenge:** Organizing styling and layout when working with ReactDOM, bootstrap, and original CSS. This was an issue throughout the entire project.

   **Solution:**

2. **Challenge:** Search bar 

   **Solution:** 

3. **Challenge:** We wanted to make the entertainment page visually appealing while remaining mobile-friendly at the same time. Originally, the code was written so that all articles were placed into four divs depending on their source. Because differnet sources pulled different amounts of articles, there were some glaring blank spaces at the end of the page for the sources that pulled the least amount of articles. This became especially true when the page was resized to mimic a mobile device. 

   **Solution:** The code was condensed and rewritten for styling purposes. By putting all the articles and their pieces into an array and dividing them up into four divs, we were able to present the same number of articles per div regardless of the number of articles each source pulled in. Visually, the number of gaps minimized and were replaced by articles from other news sources. This allowed for easier bootstrap styling.

4. **Challenge:** Slider for sports page

   **Solution:**


##GitHub Link
[Upd8ed](https://github.com/mason0958/News-Aggregator)

##Code Snippets and Screenshots

Although not necessarily apparent in this screenshot, the stocks on the left side of the page are constantly being updated. Notice also that header below the nav bar displays up to date information on whether a stock market is currently open as well as the local time. 

![alt](screenshots/NewsProjectScreenshots/stockSearch.png)

This is accomplished by the code below:

```js

var symbol = 'BAC+FB+TSLA+WPX+WFC+RAD+FCX+AAPL+F+GE+JCP+JPM+VALE+FCAU+FTI+T+GOOG+S+DOW+TWTR+CSCO+INTC+QQQ+MU+XIV+NVDA+NFLX+JNJ+HBAN+ARRY+CMCSA+TVIX+GRPN+ARIA+MSFT+SIRI'
var stockFront = 'http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20("'
var stockTail = '")%0A%09%09&env=http%3A%2F%2Fdatatables.org%2Falltables.env&format=json'
var stockUrl = stockFront + symbol + stockTail

//parent of Stock.js, StockSearch.js, StockMarkets.js
class Stocks extends Component {
    constructor(props) {
      super(props);
      this.state = {stocks: []};
      this.componentDidMount = this.componentDidMount.bind(this);
  };
    componentDidMount() {
    $.getJSON(stockUrl, (stockData) =>{
      var stockArr = stockData.query.results.quote
      var stockArrMin = []
      for(let i = 0; i < stockArr.length; i++){
        if(stockArr[i].symbol!==null){
          if(stockArr[i].DaysHigh==null){stockArr[i].DaysHigh = "-"};
          if(stockArr[i].Change==null){stockArr[i].Change = "0"};
          // changed stock.Change to yearly change for display on weekends
          var eachStock = {
            symbol: stockArr[i].symbol,
            price: stockArr[i].LastTradePriceOnly,
            change: stockArr[i].ChangeFromFiftydayMovingAverage,
            name: stockArr[i].Name
          }
          stockArrMin.push(eachStock)
        }
      }
      this.setState({stocks: stockArrMin})
    });   
    }

    render() {
      //left column hidden in phone
      if(this.state.stocks.length > 4){
        return(
          <div>
          <StockHeader />
          <div className='hidden-sm hidden-xs'>
              <StockSearch />
              <Stock stocks={this.state.stocks} />
            </div>
          </div>
      )
    }else{
      return(
        <div>
          <StockHeader />
          <div className='blinkingLetters' style={{marginTop:35,fontSize: 30,position:'fixed',marginLeft:10}}>Loading Stocks...</div>
        </div>
      )
    }
    }
}


export default Stocks;
```

For visual appeal, we put the top ESPN news in a slider and displayed the entertainment articles in a Pinterest-inspired layout.

```js
var React = require('react');
var Slider = require('react-slick');

var SimpleSlider = React.createClass({
  render: function () {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    console.log(this.props.articles)
    var imgURL = []
         {this.props.articles.map(function(article, index){
          imgURL.push(<div key={index}><img src={article.urlToImage} /></div>)}
        )}
    
    return (
 
      <div className="slider">
        <Slider{...settings}>
          <div>{imgURL[0]}</div>
          <div>{imgURL[1]}</div>
          <div>{imgURL[2]}</div>
          <div>{imgURL[3]}</div>
          <div>{imgURL[4]}</div>
        </Slider>
      </div>
    );
  }
});

export default SimpleSlider; 
```

Entertainment page in tablet view. Notice how the icons in the links in the navbar have now changed to symbols when the size of the device has been reduced.
![alt](screenshots/NewsProjectScreenshots/entertainmentTabletView.png)


Want to search for specific articles anywhere on the site? Simply start typing in the search box. The articles retrieved from your query will have the word highlighted in its title. We tried searching "Trump" in the wake of the 2017 inauguration. Pretty neat!

![alt](screenshots/NewsProjectScreenshots/searchPageExample.png)

What if you can't remember if you've read this particular article before? No worries. Once you click on an article it turns gray as demonstrated in the first and third articles.

![alt](screenshots/NewsProjectScreenshots/seenExample.png)

Here is where it all happens:

```js
var readColor = 'black'
    var authorColor = 'grey'
    var keyWordColor = 'black'
    var keyBg = 'yellow'
    if(this.state.read === 'seen'){readColor='lightgrey'; authorColor='lightgrey'; keyWordColor='lightgrey'; keyBg='none'}

    return(
      <div className='click-article' onClick={this.childOnClick} style={{color:readColor, padding:'10px 20px', borderLeft:'1px solid #ddd',borderBottom:'2px solid #ddd'}}>
        <div style={{fontSize:16}}>
          <div>{this.props.frontText}
            <span style={{backgroundColor:keyBg, color:keyWordColor}}>{this.props.highlightText}</span>
            {this.props.backText}
          </div>
        </div>
        <div style={{marginLeft:2, marginTop:5, fontSize:13, color:authorColor}}>
          <div style={{float:'left'}}>{authorText}</div>
          <div style={{float:'right', marginRight:10}}>{publishText}</div>
        </div>
        <br/>
      </div>
    )
  }
}
```

This is the specific line that tells us how we mark articles as "read":

`if(this.state.read === 'seen'){readColor='lightgrey'; authorColor='lightgrey'; keyWordColor='lightgrey'; keyBg='none'}`

The layout of the world page is what we strived for in most of our pages. The 3-column layout includes a larger view of a selected article sandwiched between a region selector and a search bar.

![alt](screenshots/NewsProjectScreenshots/globalNewFullView.png)

And just to make sure our website is mobile-friendly, we tested each page by shrinking our view. This is what the Business page looks like on a mobile device. As with the entertainment page, notice how the links in the navbar have been changed to icons on smaller views.

![alt](screenshots/NewsProjectScreenshots/businessMobileView.png)

##MVP(Minimal Viable Product)
**Top news page:** displaying the current weather and a few top news articles from each page (entertainment, sports, business and world)

**Entertainment page:** displaying the latest articles from Entertainment-Weekly, Buzzfeed, MTV, MTV-UK and Daily Mail

**Sports news:** displaying the latest articles from talkSPORT, ESPN and FOX sports.

**Business page:** displaying the latest articles from Business Insider, Financial Times, Business Insider UK, Fortune' and The Economist

**World:** displaying the latest top articles from each continent

##Stretch Goals
1. Upvote/downvote option for users
2. Backend server
3. Displaying articles in an Iframe modal

##Team Members and Contributions
All team members are full stack web development students of the [DigitalCrafts](http://www.digitalcrafts.com/) November 2016 cohort. This project utilizes our frontend skills that we have learned along with pair programming and SCRUM agile development methodology. We used Taiga to implement a Kanban task scheduling system to practice agile software development. 

![alt](screenshots/NewsProjectScreenshots/kanban.png)


* [Paul Kang](https://github.com/pdwkang) 

**Role:** Dungeon Master - Data wizard - MVP

**Contributions:** Designed the top news and business pages. Built layout from scratch. General styling throughout website. Troubleshooting. Helping everyone who gets stuck with ease.

* [Mason Mahaffey](https://github.com/mason0958) 

**Role:** THE MSON.object idea genius 

**Contributions:**  Initial project idea. Global news. Planning. Development. Suggestion for features to add. Backend knowledge. App name.

* [Anna Sedlar](https://github.com/annasedlar) 

**Role:** Packers gurl  

**Contributions:** Sports page. Slider for sports page. 

* [Connie Dang](https://github.com/dangconnie) 

**Role:** 

**Contributions:** Entertainment page. Weather widget. README file.

If you would like to report an issue with our code or a suggest a way to improve it, simply contact one of us. We are always looking for ways to improve! 

If you would like to contribute to our project, we are looking to add the the following:

1. Add categories to include technology, health, nearby events and local news

2. Add more to sports page to include scores, schedules and stats

3. Improve UI/UX (hover effects on articles where appropriate, better CSS styling)



##Project Timeline
Project start: 1/18/2017

Project completion: 1/24/2017