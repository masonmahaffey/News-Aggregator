import React from 'react';
import './index.css';
import { IndexLink, Link } from 'react-router'

var ToggleRoutes = React.createClass({
  render: function(){
    return(
    <div className="container h-1">
    <nav className="navbar navbar-inverse navbar-fixed-top h-2" id="nobr">
      <div className="container-fluid nobr">
        <div className="navbar-header hidden-xs">
          <a className="navbar-brand" href="#">WireFront/Home</a>
        </div>
        <ul className="nav navbar-nav hidden-xs">
          <li><IndexLink to="/" activeClassName="active">General</IndexLink></li>
          <li><Link to="/entertainment" activeClassName="active">Entertainment</Link></li>
          <li><Link to="/sports" activeClassName="active">Sports</Link></li>
          <li><Link to="/business" activeClassName="active">Business</Link></li>
        </ul>
        <ul className="nav navbar-nav visible-xs inline-list">
          <li><IndexLink to="/" activeClassName="active">General</IndexLink></li>
          <li><Link to="/entertainment" activeClassName="active">Entertainment</Link></li>
          <li><Link to="/sports" activeClassName="active">Sports</Link></li>
          <li><Link to="/business" activeClassName="active">Business</Link></li>
        </ul>       
      <form className="navbar-form h-4 hidden-xs">
        <div className="form-group">
          <input type="text" className="form-control h-5" placeholder="ideas for this?"/>
        </div>
        <button type="submit" className="btn btn-default">Search</button>
      </form>
      </div>
    </nav> 
    </div>
    )
  }
});

function PlaceHolderForNavBar(){
  return(
    <div className="place-hold-nav"></div>
  )
}

var App = React.createClass({
  render: function(){
    return(
      <div>
        <ToggleRoutes />
        <PlaceHolderForNavBar />
        {this.props.children}
      </div>
    );
  }
})

export default App;
