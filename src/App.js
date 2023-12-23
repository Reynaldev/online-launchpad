import React from 'react';
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
  }
  playDrum() {
    let childObj = document.activeElement.children.item(0);
    childObj.play();

    // console.log(document.activeElement.innerText);
  }
  playDrumKey(evt) {
    console.log(evt);
  }
  render() {
    return (
      <div id="drum-machine">
        <div id="display">

        </div>
        <button id="drum1" class="drum-pad" onClick={this.playDrum}>
            Q
          <audio id="Q" class="clip" src={drum1}></audio>
        </button>
        <button id="drum2" class="drum-pad" onClick={this.playDrum}>
            W
          <audio id="W" class="clip" src={drum2}></audio>
        </button>
        <button id="drum3" class="drum-pad" onClick={this.playDrum}>
            E
          <audio id="E" class="clip" src={drum3}></audio>
        </button>
        <button id="drum4" class="drum-pad" onClick={this.playDrum}>
            A
          <audio id="A" class="clip" src={drum4}></audio>
        </button>
        <button id="drum5" class="drum-pad" onClick={this.playDrum}>
            S
          <audio id="S" class="clip" src={drum5}></audio>
        </button>
        <button id="drum6" class="drum-pad" onClick={this.playDrum}>
            D
          <audio id="D" class="clip" src={drum6}></audio>
        </button>
        <button id="drum7" class="drum-pad" onClick={this.playDrum}>
            Z
          <audio id="Z" class="clip" src={drum7}></audio>
        </button>
        <button id="drum8" class="drum-pad" onClick={this.playDrum}>
            X
          <audio id="X" class="clip" src={drum8}></audio>
        </button>
        <button id="drum9" class="drum-pad" onClick={this.playDrum}>
            C
          <audio id="C" class="clip" src={drum9}></audio>
        </button>
      </div>
    );
  }
}

export default App;
