import React, {useState, useEffect} from "react";
import "./App.css";

import axios from 'axios';

import {BASE_URL, API_KEY} from "./constants"

import Details from './components/details'
import Image from './components/image'

function App() {
  const [image, setImageURL] = useState()

  useEffect(()=> {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
      .then(res => {
        setImageURL(res.data);
      })
      .catch(err => {
        console.error(err);
      })
  },[])

  console.log(image)

  return (
    <div className="App">
      { image && <Image image={image}/> }
      { image && <Details photo={image}/>}
    </div>
  );
}

export default App;
