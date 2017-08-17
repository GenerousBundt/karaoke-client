import React, { Component } from 'react';
import logo from './resources/man-singing.svg';
import './App.css';
import SetList from './components/SetList';
import * as Session from './services/Session';


var NewSong = require('./components/NewSong');
var Song = require('./components/Song');

//TODO: GetSession: If sessionid = -1, show div saying Please wait for session to be created.
// If not -1, pass sessionId to SetList component.
async function GetSession() {
  return Session.getSession();
};

class App extends Component {
  constructor(){
    super();
    this.state = { sessionId: null }
  }

  componentDidMount() {
    Session.getSession().then(response => this.setState({session: response}))
  }

  renderSongList() {
    return (    
      <div className="app">
        <div className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h2>Welcome to Beaudry Karaoke </h2>
        </div>
        <div className="app-songlist">
          {/*Tonight's list, Top song marked, up next*/}
          Tonight's song list <br />
          <button> Here's a button </button>

        </div>
        <div>

          <SetList sessionId={ this.state.sessionId }/>
        </div>
        
        {/*Add Your Song*/}
        
      </div>
    );
  }

  render() {
    const { currentSessionId } = this.state
    return currentSessionId ? this.renderSongList() : (
      <span>Loading session... </span>
      
    );
  }
}

export default App;
