import React from "react";

import {
	Link
  } from "react-router-dom";

function Menubar(){
    const names = ['Home', 'About', 'Contact'];

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