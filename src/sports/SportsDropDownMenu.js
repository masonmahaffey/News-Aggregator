import React, { Component } from 'react';
import $ from 'jquery';
import './sports.css';


// Close the dropdown menu if the user clicks outside of it
window.onClick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

class SportsDropDownMenu extends Component{
	dropDownFunction(){
		document.getElementById("myDropdown").classList.toggle("show");
	}

	render(){
		return(
			<div>
				<div className="dropdown">
				  <button onClick={() => this.dropDownFunction} className="dropbtn">Dropdown</button>
				  <div id="myDropdown" className="dropdown-content">
				    <a href="#">Link 1</a>
				    <a href="#">Link 2</a>
				    <a href="#">Link 3</a>
				  </div>
				</div>
			</div>
		)
	}
}

export default SportsDropDownMenu;

