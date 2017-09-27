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

export function authLogin(userName, password){
  return fetch('http://localhost:5000/api/Authorization', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      UserName: userName,
      Password: password,
    })
  })
  .then((response) => response.json())
  .then((responseJson) => {return responseJson.userIsAdmin});
}


export function getSessionSongs(sessionId){
  return fetch('http://localhost:5000/api/Songs/'.concat(sessionId))
    .then((response) => response.json())
    .then((responseJson) =>  {return responseJson});
}

export function updateSongOrder(songs){
  var jsonBody = JSON.stringify(songs);
  return fetch('http://localhost:5000/api/Songs', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: jsonBody
  });
}

export function addStageNameToSession(stageName, sessionId){
  return fetch('http://localhost:5000/api/StageNames', {
    method: 'POST',
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(
      {
        SessionId: sessionId,
        Name: stageName,
        IsActive: 1
      }
    )
  })
}