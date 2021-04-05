import React, { useState } from 'react';
import dreamsArray from './DreamsDB';
import colors from './ColorsArray';
import './App.css';
import { Route, BrowserRouter as Router } from "react-router-dom";
import About from './About';
import { Link } from 'react-router-dom';



export default function App() {


  const [dream, setDream] = useState("I can have some weird dreams. Or cute ones. You can find some of them here. Just press the button and have fun!");
  const [randomNumber, setRandomNumber] = useState(0);
  const [accentColor, setAccentColor] = useState("#80DEEA");

  console.log(randomNumber);


  const changeDream = () => {
    let randomInteger = Math.floor(dreamsArray.length * Math.random());
    setRandomNumber(randomInteger)
    setAccentColor(colors[randomInteger])
    setDream(dreamsArray[randomInteger].dream)

  }


  return (
    <Router>
      <div className="container" style={{ backgroundColor: accentColor }}>

        <nav>
          <Link to='/about'>why?</Link>
        </nav>

        <Route path="/about" component={About} />

        <div className="box">
          <p>{dream}</p>
          <button onClick={() => changeDream()} style={{ backgroundColor: accentColor }}>new dream 😴</button>
        </div>

      </div>
    </Router>


  )
}
