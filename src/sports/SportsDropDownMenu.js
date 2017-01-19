import React, { Component } from 'react';
import $ from 'jquery';
import './sports.css';

class SportsDropDownMenu extends Component{
	render(){
		return(
			<div>
				<div class="dropdown">
				  <button onclick="myFunction()" class="dropbtn">Dropdown</button>
				  <div id="myDropdown" class="dropdown-content">
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