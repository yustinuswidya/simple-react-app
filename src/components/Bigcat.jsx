import React, { useEffect, useState } from "react";

const getBigCat = async () => {
    const url = "https://randombig.cat/roar.json";

    const response = await fetch(url);
    const cat = await response.json();
    if (!response.ok) {
      // throw new Error('Data coud not be fetched!')
      console.log("error fetch " + url);
    } else {
      console.log(response);
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

    return(
        <div class="card" style="width: 18rem;">
            <img src="..." /*cats[0].url*/ class="card-img-top" alt="big cat" />
        </div>
    );

};

export default Bigcat;