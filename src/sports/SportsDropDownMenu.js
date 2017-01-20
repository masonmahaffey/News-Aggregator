import React, { Component } from 'react';
import $ from 'jquery';
import './sports.css';

class SportsDropDownMenu extends Component{
	render(){
		return(
			<div>
				<div className="dropdown">
				  <button onClick="myFunction()" className="dropbtn">Dropdown</button>
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

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
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