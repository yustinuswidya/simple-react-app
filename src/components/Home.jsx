import React from "react";

function Header({title}) {
    return <h1>{title ? title : 'Default subtitle'}</h1>;
}

function Home(){
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton', 'MIR', 'ASK'];

    return (
	    <div>
	        <Header title="Develop. Preview. Ship. 🚀" />
		    <ul>
			  {names.map((name) => (
			    <li key={name}>{name}</li>
			  ))}
		    </ul>
	    </div>
    );
};

export default Home;