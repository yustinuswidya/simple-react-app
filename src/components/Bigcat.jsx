import React, { useEffect, useState } from "react";

const GetBigCat = async () => {
    const url = "https://randombig.cat/roar.json";
    const response = await fetch(url);
    const cat = await response.json();
    if (!response.ok) {
      // throw new Error('Data coud not be fetched!')
      console.log("error fetch " + url);
    } else {
      console.log(cat.url);
      return cat.url; 
    }

    /* const [cat, setCat] = useState("");
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let url = data.url;
            console.log(data);
            console.log(url);
            setCat(cat => [url]);
        });
    return cat; */
}

function Bigcat(){
    const [cats, setCats] = useState([]);

    useEffect(() => {
        // for(var i=0; i<10; i++){
            GetBigCat().then((res) => {
              setCats(cats => [...cats,res]);
              console.log(res);
            });
        // }
      }, []);

    // {console.log(cats)}

    return(
      <div>  
        <p>BigCat</p>
        <ol>
          {cats.map((cat) => {
            console.log(cat);
            return (
              <li>Hello {cat}</li>
          )})}
        </ol>
      </div>  
    );

};

export default Bigcat;