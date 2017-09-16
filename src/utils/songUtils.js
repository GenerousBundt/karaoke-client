import React, { Component } from 'react';
//import logo from '../../resources/man-singing.svg';
import SetList from '../components/SetList';

export function renderSongList(sessionId, draggable) {
    return (    
        <div>
          <SetList session={ sessionId } draggable = {draggable}/>
        </div>
    );
  }

  export async function getSession(){
    return fetch('http://localhost:5000/api/Session')
    .then((response) => response.json())
     .then((responseJson) => { return responseJson.sessionId});
}