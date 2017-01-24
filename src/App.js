import React from 'react';
import './index.css';
import { IndexLink, Link } from 'react-router'

//Routing Links 
class ToggleRoutes extends React.Component {
    constructor(props) {
        super(props);
        this.onInputChangeSaveValue = this.onInputChangeSaveValue.bind(this)
    }
    onInputChangeSaveValue(e){
        e.preventDefault();
        var inputValue = e.target.value
        this.props.displaySearchedNews(inputValue)
    }
    render(){
        return(
            <div className="container h-1" style={{fontSize:17, fontFamily:'Roboto'}}>
                <nav className="navbar navbar-inverse navbar-fixed-top h-2" id="nobr" style={{backgroundColor:'#4F4F4F'}}>
                    <div className="container-fluid nobr">
                        <div className="navbar-header hidden-xs">
                            <a className="navbar-brand" href="#" style={{backgroundColor:'black',color:'white',fontSize:25}}>Upd<span style={{color:'#0099FF'}}>8</span>ed</a>
                        </div>
                        <ul className="nav navbar-nav hidden-sm hidden-xs">
                            <li><IndexLink to="/" activeClassName="active">Top News</IndexLink></li>
                            <li><Link to="/entertainment" activeClassName="active">Entertainment</Link></li>
                            <li><Link to="/sports" activeClassName="active">Sports</Link></li>
                            <li><Link to="/business" activeClassName="active">Business</Link></li>
                            <li><Link to="/global" activeClassName="active">World</Link></li>
                        </ul>
                        
                        {/********************** Mobile View *********************/}
                            <ul className="nav navbar-nav visible-sm visible-xs inline-list">
                                <li><IndexLink to="/"  activeClassName="activeBorder">
                                    <img alt='a' src={require('../public/news.png')} style={{marginRight:0,width:30, height:30}}/>
                                </IndexLink></li>
                                <li><Link to="/entertainment" activeClassName="activeBorder">
                                <img alt='a' src={require('../public/entertainment.png')} style={{marginRight:0,width:30, height:30}}/>
                                </Link></li>
                                <li><Link to="/sports" activeClassName="activeBorder"><img alt='a' src={require('../public/sports.png')} style={{marginRight:0,width:27, height:27}}/>
                                </Link></li>
                                <li><Link to="/business" activeClassName="activeBorder"><img alt='a' src={require('../public/business.png')} style={{marginRight:0,width:30, height:30}}/>
                                </Link></li>
                                <li><Link to="/global" activeClassName="activeBorder"><img alt='a' src={require('../public/world.png')} style={{marginRight:0,width:30, height:30}}/>
                                </Link></li>
                            </ul> 
                        {/********************** Mobile View *********************/}
                        
                        {/* search is hidden in mobile */}    
                        <form className="navbar-form h-4 hidden-sm hidden-xs">
                            <div className="form-group">
                                <input onChange={this.onInputChangeSaveValue} type="text" className="form-control h-5" placeholder="Search Trending News"/>
                            </div>
                        </form>
                    </div>
                </nav> 
            </div>
        )
    }
};

//placeholder with hard height needed for indenting fixed nav bar
function PlaceHolderForNavBar(){
    return(
        <div className="place-hold-nav"></div>
    )
}

//parent of all pages, the top navbar stays same and still on all pages
class App extends React.Component{
    constructor(props) {
        super(props);
        this.displaySearchedNews = this.displaySearchedNews.bind(this)
    }
    displaySearchedNews(searchTextFromChild){
        //routing to searched input
        this.props.router.push('/news-search/'+ searchTextFromChild)
    }
    render(){
        return(
            <div>
                <ToggleRoutes displaySearchedNews={this.displaySearchedNews} />
                <PlaceHolderForNavBar />
                {this.props.children}       
            </div>
        );
    }
}


export default App;
