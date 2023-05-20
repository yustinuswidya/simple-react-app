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
            // setCats(cats => [...cats,res]);
            // console.log(cats);
          });
        // }
      }, []);

    // {console.log(cats)}

    return(
        <div class="card" style="width: 18rem;">
            <img src="https://randombig.cat/0b627ed7-ca93-400e-9d38-d0c4ab62f8b6.jpg" class="card-img-top" alt="big cat" />
        </div>
    );

};

export default Bigcat;