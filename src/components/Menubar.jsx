import React from "react";

import {
	Link
  } from "react-router-dom";

function Menubar(){
    const names = ['About']; // , 'About', 'Contact'];

    return (
	    <div>
		    <ul>
<<<<<<< HEAD
			  {names.map((name) => 
			  {
				let names = name.toLowerCase()
				return(
					<Link to={`${names}`}>{name}</Link>
				)
			  })}
=======
			  {names.map((name) => (
				<Link to={`${name.toLowerCase()}`}>{name}</Link>
			  ))}
>>>>>>> 43718d29259b34a9cb42b714c610b84cf5c0fc89
		    </ul>
	    </div>
    );
};

export default Menubar;