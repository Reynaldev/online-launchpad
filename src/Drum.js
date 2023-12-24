/**
 * eslint-disable-next-line
 * 
 * Won't be used until I figure out the best way to implement this.
 * If I keep doing it, it will turn into spaghetti code --Not good, not good...--.
 * 
 * Otherwise, features in this class almost the same as every drum buttons in App.js 
 * 
 * TODO: Implement a function that plays an audio when the button is clicked.
 * TODO: Implement a function that plays an audio from keyboard input.
 * TODO: Update the display text in App class with the name of the drum.
 * TODO: Add ability to change volume, this should be applicable to every Drum called in App class. 
 *       Or one volume slider to rule them all!
 */

import React from 'react';

class Drum extends React.Component {
    constructor(props) {
        super(props);

        this.playDrum = this.playDrum.bind(this);
    }
    playDrum() {
        let parentObj = document.activeElement;
        let childObj = parentObj.children.item(0);
        childObj.play();

        console.log(parentObj.id);
    }
    render() {
        return (
            <button id={this.props.name} class="drum-pad" onClick={this.playDrum}>
                {this.props.id}
                <audio id={this.props.id} class="clip" src={this.props.audioSrc}></audio>
            </button>
        );
    }
}

export default Drum;