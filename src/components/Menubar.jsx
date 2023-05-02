import React from "react";

import {
	Link
  } from "react-router-dom";

function Menubar(){
    const names = ['About']; // , 'About', 'Contact'];

    return (
	    <div>
		    <ul>
			  {names.map((name) => 
			  {
				let names = name.toLowerCase()
				return(
					<Link to={`${names}`}>{name}</Link>
				)
			  })}
		    </ul>
	    </div>
    );
};

export default Menubar;