import React from "react";

import {
	Link
  } from "react-router-dom";

function Menubar(){
    const names = ['Home', 'About', 'Contact'];

	var numbers = [3,56,2,48,5];
	const newNumber = numbers.find(function (num){
		return num> 10;
	});

	console.log(newNumber);

    return (
	    <div>
		    <ul>
			  {names.map((name) => 
			  {
				let names = name.toLowerCase()
				return(
					<li><Link to={`${names}`}>{name}</Link></li>
				)
			  })}
		    </ul>
	    </div>
    );
};

export default Menubar;