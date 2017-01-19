import React from 'react';
import './index.css';
import { IndexLink, Link } from 'react-router'



class ToggleRoutes extends React.Component {
  constructor(props) {
    super(props);
    this.onInputChangeSaveValue = this.onInputChangeSaveValue.bind(this)
    this.state = {
    }
  }
  onInputChangeSaveValue(e){
    e.preventDefault();
    var inputValue = e.target.value
    this.props.displaySearchedNews(inputValue)
  }
  render(){
    return(
    <div className="container h-1" style={{fontSize:17, fontFamily:'Roboto'}}>
    <nav className="navbar navbar-inverse navbar-fixed-top h-2" id="nobr">
      <div className="container-fluid nobr">
        <div className="navbar-header hidden-xs">
          <a className="navbar-brand" href="#">Upd8dNews</a>
        </div>
        <ul className="nav navbar-nav hidden-xs">
          <li><IndexLink to="/" activeClassName="active">Top News</IndexLink></li>
          <li><Link to="/entertainment" activeClassName="active">Entertainment</Link></li>
          <li><Link to="/sports" activeClassName="active">Sports</Link></li>
          <li><Link to="/business" activeClassName="active">Money</Link></li>
          <li><Link to="/global" activeClassName="active">World</Link></li>
        </ul>
        <ul className="nav navbar-nav visible-xs inline-list">
          <li><IndexLink to="/" activeClassName="active">TOP</IndexLink></li>
          <li><Link to="/entertainment" activeClassName="active">ENTMT</Link></li>
          <li><Link to="/sports" activeClassName="active">football pic</Link></li>
          <li><Link to="/business" activeClassName="active">$$$</Link></li>
          <li><Link to="/global" activeClassName="active">globe pic here</Link></li>
        </ul>       
      <form className="navbar-form h-4 hidden-xs">
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

function PlaceHolderForNavBar(){
  return(
    <div className="place-hold-nav"></div>
  )
}

class App extends React.Component{
  constructor(props) {
    super(props);
    this.displaySearchedNews = this.displaySearchedNews.bind(this)
  }
  displaySearchedNews(searchTextFromChild){
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
