import React from "react";

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