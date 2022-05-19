import React, {useState, useEffect} from "react";
import "./App.css";

import axios from 'axios';

import {BASE_URL, API_KEY} from "./constants"

import Details from './components/details'
import Image from './components/image'

function App() {
  const [image, setImage] = useState();
  const [show, setShow] = useState(false);


  useEffect(()=> {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
      .then(res => {
        setImage(res.data);
      })
      .catch(err => {
        console.error(err);
      })
  },[])

  const showExplanation = () => {
    setShow(true)
  }

  const hideExplanation = () => {
    setShow(false)
  }

  return (
    <div className="App">
      <h1>NASA Image of the Day</h1>
      { image && <Image image={image} show={showExplanation}/> }
      { show && <Details details={image} hide={hideExplanation}/>}
    </div>
  );
}

export default App;
