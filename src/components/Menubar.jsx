// import React from "react";
import React, { useState, useEffect } from "react";

import {
	Link
  } from "react-router-dom";

function Menubar(){
    const names = ['Home', 'About', 'Contact'];

	var numbers = [3,16,2,48,5,25];
	const newNumber = numbers.find(function (num){
		return num > 20;
	});

	console.log(newNumber);

	const idx = numbers.findIndex(function (num){
		return num > 20;
	});

	console.log(idx);

	const [joke, setJoke] = useState(null);
	useEffect(() => {
		fetch("https://www.themealdb.com/api/json/v1/1/random.php")
		.then((response) => response.json())
		.then((data) => {
			// setJoke(data[0].joke);
			console.log(data.meals);
		})
		.catch((error) => console.log(error));
	}, []);

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