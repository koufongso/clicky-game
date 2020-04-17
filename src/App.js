import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import CardList from './components/CardList'

let imageArray = ["buffalo-head.png", "camel-head.png", "double-fish.png", "eagle-head.png",
  "eating-pelican.png", "elephant-head.png", "kangaroo.png", "koala.png",
  "labrador-head.png", "snake-spiral.png", "snake-tongue.png", "spiked-dragon-head.png"]

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Jumbotron></Jumbotron>
      <div className="container">
          <CardList list={imageArray}></CardList>
      </div>
    </div>
  );
}

export default App;
