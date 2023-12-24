import React from 'react';
// import Drum from './Drum';
import './App.css';

import drum1 from './assets/audio/drum/Heater-1.mp3';
import drum2 from './assets/audio/drum/Heater-2.mp3';
import drum3 from './assets/audio/drum/Heater-3.mp3';
import drum4 from './assets/audio/drum/Heater-4_1.mp3';
import drum5 from './assets/audio/drum/Heater-6.mp3';
import drum6 from './assets/audio/drum/Dsc_Oh.mp3';
import drum7 from './assets/audio/drum/Kick_n_Hat.mp3';
import drum8 from './assets/audio/drum/RP4_KICK_1.mp3';
import drum9 from './assets/audio/drum/Cev_H2.mp3';

class App extends React.Component {
  constructor(props) {
    super(props);
  
    this.playDrum = this.playDrum.bind(this);
    this.playDrumKey = this.playDrumKey.bind(this);
    this.setDisplayText = this.setDisplayText.bind(this);
  }
  componentDidMount() {
      document.addEventListener("keydown", this.playDrumKey);
  }
  componentWillUnmount() {
      document.removeEventListener("keydown", this.playDrumKey);
  }
  playDrum() {
      let childObj = document.activeElement.children.item(0);
      childObj.play();

      this.setDisplayText(childObj.id);
      
      // console.log(childObj.id);
  }
  playDrumKey(e) {
      const audioEl = document.getElementById(e.key.toUpperCase());
      if (audioEl) { 
        audioEl.play(); 
      
        this.setDisplayText(audioEl.id);
  
        // console.log(audioEl.id);
      }
  }
  setDisplayText(id) {
    // For the sake of passed test. 
    // But it didn't work --Neither with state...---
    
    switch (id) {
      case "Q":
        document.getElementById("display").innerText = "Heater 1";
        break;
      case "W":
        document.getElementById("display").innerText = "Heater 2";
        break;
      case "E":
        document.getElementById("display").innerText = "Heater 3";
        break;
      case "A":
        document.getElementById("display").innerText = "Heater 4";
        break;
      case "S":
        document.getElementById("display").innerText = "Clap";
        break;
      case "D":
        document.getElementById("display").innerText = "Open HH";
        break;
      case "Z":
        document.getElementById("display").innerText = "Kick n' Hat";
        break;
      case "X":
        document.getElementById("display").innerText = "Kick";
        break;
      case "C":
        document.getElementById("display").innerText = "Closed HH";
        break;
    }
  }
  render() {
    return (
      <div id="drum-machine">
        <h3 id="display"></h3>
        
        {/* 
        Don't use this, read the comment at the top of Drum.js file for more detail.
        <Drum id="Q" name="heater1" audioSrc={drum1} /> 
        */}
        
        <button id="heater1" class="drum-pad" onClick={this.playDrum}>
            Q
          <audio id="Q" class="clip" src={drum1}></audio>
        </button>
        <button id="heater2" class="drum-pad" onClick={this.playDrum}>
            W
          <audio id="W" class="clip" src={drum2}></audio>
        </button>
        <button id="heater3" class="drum-pad" onClick={this.playDrum}>
            E
          <audio id="E" class="clip" src={drum3}></audio>
        </button>
        <button id="heater4" class="drum-pad" onClick={this.playDrum}>
            A
          <audio id="A" class="clip" src={drum4}></audio>
        </button>
        <button id="heater6" class="drum-pad" onClick={this.playDrum}>
            S
          <audio id="S" class="clip" src={drum5}></audio>
        </button>
        <button id="dscoh" class="drum-pad" onClick={this.playDrum}>
            D
          <audio id="D" class="clip" src={drum6}></audio>
        </button>
        <button id="kick-n-hat" class="drum-pad" onClick={this.playDrum}>
            Z
          <audio id="Z" class="clip" src={drum7}></audio>
        </button>
        <button id="rp4-kick" class="drum-pad" onClick={this.playDrum}>
            X
          <audio id="X" class="clip" src={drum8}></audio>
        </button>
        <button id="cev-h2" class="drum-pad" onClick={this.playDrum}>
            C
          <audio id="C" class="clip" src={drum9}></audio>
        </button>
      </div>
    );
  }
}

export default App;
