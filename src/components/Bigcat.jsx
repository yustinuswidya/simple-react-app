import React, { useState, useEffect } from "react";

function getBigCat(){
    const url = "https://randombig.cat/roar.json";
    fetch(url).then(response => response.json()).then(data => console.log(data));
    return null;
}

function Bigcat(){
    getBigCat();

};

export default Bigcat;