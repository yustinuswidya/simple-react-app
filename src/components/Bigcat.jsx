import React, { useEffect, useState } from "react";

const GetBigCat = async () => {
    const url = "https://randombig.cat/roar.json";
    const response = await fetch(url);
    const cat = await response.json();
    if (!response.ok) {
      // throw new Error('Data coud not be fetched!')
      console.log("error fetch " + url);
    } else {
      // console.log(cat.url);
      return cat.url; 
    }
}

const BigCatImg = (url) => {
  return (
    <div class="card" style={{width: '18rem'}}>
      <img src={url} alt="https://randombig.cat/0b627ed7-ca93-400e-9d38-d0c4ab62f8b6.jpg" class="card-img-top"/>
    </div>
  )
}

function Bigcat(){
    const [cats, setCats] = useState([]);

    useEffect(() => {
        for(var i=0; i<5; i++){
            GetBigCat().then((res) => {
              setCats(cats => [...cats,res]);
              // console.log(res);
            });
        }
      }, []);

    // {console.log(cats)}

    return(
      <div>  
        <p>BigCat</p>
        {cats.map((cat) => (
          <div class="card">
            <img src={cat} alt={cat} style={{width: '500px'}} class="card-img-top"/>
          </div>
        ))}
      </div>  
    );

};

export default Bigcat;