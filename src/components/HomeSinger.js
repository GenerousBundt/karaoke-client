import React, { Component } from 'react';
//import logo from '../../resources/man-singing.svg';
import SetList from './SetList';
import * as Session from '../services/Session';
import * as SongUtils from '../utils/songUtils';
import PageTitle from './PageTitle';


var NewSong = require('./NewSong');
var Song = require('./Song');

//TODO: GetSession: If sessionid = -1, show div saying Please wait for session to be created.
// If not -1, pass sessionId to SetList component.

class HomeSinger extends Component {
  constructor(){
    super();
    this.state = { sessionId: null }
    console.log("homesinger constructor");
  }

  render() {
    return (
      <div>
      <PageTitle title="Tonight's Song List" className="app-songlist" />
      <SetList sessionId={this.props.sessionId} draggable={false} />
    </div>
    );
  }
}

HomeSinger.propTypes = {
    sessionId: React.PropTypes.number.isRequired
}

export default HomeSinger;