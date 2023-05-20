import React, { useEffect, useState } from "react";

function getBigCat(){
    const url = "https://randombig.cat/roar.json";
    fetch(url).then(response => response.json()).then(data => console.log(data));
    return null;
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
            <img src={cats[0].url} class="card-img-top" alt="big cat" />
        </div>
    );

};

export default Bigcat;