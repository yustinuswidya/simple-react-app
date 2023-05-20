import React, { useEffect, useState } from "react";

const getBigCat = async () => {
    const url = "https://randombig.cat/roar.json";

    const response = await fetch(url);
    const cat = await response.json();
    if (!response.ok) {
      // throw new Error('Data coud not be fetched!')
      console.log("error fetch " + url);
    } else {
      console.log(cat);
      return cat; 
    }

    /*fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            return data;
        });
    return null; */
}

function Bigcat(){
    const [cats, setCats] = useState([]);

    useEffect(() => {
        // for(var i=0; i<10; i++){
            getBigCat().then((res) => {
            setCats(cats => [...cats,res]);
          });
        // }
      }, []);

    return(<p>BigCat</p>);

};

export default Bigcat;