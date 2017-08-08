import React, { Component } from 'react';
import logo from './resources/man-singing.svg';
import './App.css';
import SetList from './components/SetList';
import * as Session from './components/Session';


var NewSong = require('./components/NewSong');
var Song = require('./components/Song');

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Beaudry Karaoke </h2>
        </div>
        <div className="SongList">
          {/*Tonight's list, Top song marked, up next*/}
          Tonight's song list <br />
          <button> Here's a button </button>

        </div>
        <div>
          <SetList sessionId={Session.getSession()}/>
        </div>
        
        {/*Add Your Song*/}
        
      </div>
    );
  }
}

export default App;
