import React, { Component } from 'react';
//import logo from '../../resources/man-singing.svg';
import SetList from '../components/SetList';

const karaokeApi = 'http://localhost:5000';//http://192.168.86.23:5000'

export function renderSongList(sessionId, draggable) {
    return (    
        <div>
          <SetList session={ sessionId } draggable = {draggable}/>
        </div>
    );
  }

  export async function getSession(){

    return fetch(`${karaokeApi}/api/Session`)
    .then((response) => {return response.json()})
     .then((responseJson) => { return responseJson.sessionId});
}

export function authLogin(userName, password){
  return fetch(`${karaokeApi}/api/Authorization`, {
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

export function createNewSessionIfNoneActive(){
  return fetch(`${karaokeApi}/api/Session`, {
    method: 'POST',
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  })
  .then((response) => {console.log("newSessionResponse", response); return response.json()})
  .then((responseJson) => {return responseJson.sessionId});
}

export function getSessionSongs(sessionId){
  return fetch(`${karaokeApi}/api/Songs/`.concat(sessionId))
    .then((response) => response.json())
    .then((responseJson) =>  {return responseJson});
}

export function updateSongOrder(songs){
  var jsonBody = JSON.stringify(songs);
  return fetch(`${karaokeApi}/api/Setlist`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: jsonBody
  });
}

export function addStageNameToSession(stageName, sessionId){
  console.log("adding stage name: ", stageName, sessionId);
  return fetch(`${karaokeApi}/api/StageNames`, {
    method: 'PUT',
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
  });
}

export function getSessionStageNames(sessionId){
  return fetch(`${karaokeApi}/api/StageNames/`.concat(sessionId))
    .then((response) => {return response.json()})
    .then((responseJson) =>  {return responseJson});
}

export function addSongToSession(song){
  //var jsonBody = JSON.stringify(song);
  return fetch(`${karaokeApi}/api/Songs`, {
    method: 'POSt',
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(
      {
        StageName: song.stageName,
        Title: song.title,
        Url: song.url,
        SessionId: song.sessionId,
        IsComplete: false,
        Order: 99

      }
    )
  });
}