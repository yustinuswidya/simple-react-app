import React from "react";

import {
	Link
  } from "react-router-dom";

function Menubar(){
    const names = ['About']; // , 'About', 'Contact'];

    return (
	    <div>
		    <ul>
			  {names.map((name) => (
                <Link to="/{name}.toLowerCase()">{name}</Link>
			  ))}
		    </ul>
	    </div>
    );
};

export default Menubar;