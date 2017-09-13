import React, { Component } from 'react';
//import logo from '../../resources/man-singing.svg';
import SetList from '../components/SetList';

export function renderSongList(sessionId, draggable) {
    return (    
      <div className="app">
        <div className="app-header">
          {/* <img src={logo} className="app-logo" alt="logo" /> */}
          <h2>Welcome to Beaudry Karaoke </h2>
        </div>
        <div className="app-songlist">
          {/*Tonight's list, Top song marked, up next*/}
          Tonight's song list <br />
          <button> Here's a button </button>

        </div>
        <div>
          <SetList session={ sessionId } draggable = {draggable}/>
        </div>
        
        {/*Add Your Song*/}
        
      </div>
    );
  }

  export async function getSession(){
    return fetch('http://localhost:5000/api/Session')
    .then((response) => response.json())
     .then((responseJson) => { return responseJson.sessionId});
}