import React, { Component } from 'react';
//import logo from '../../resources/man-singing.svg';
import SetList from './SetList';
import * as Session from '../services/Session';
import * as SongUtils from '../utils/songUtils';


var NewSong = require('./NewSong');
var Song = require('./Song');

//TODO: GetSession: If sessionid = -1, show div saying Please wait for session to be created.
// If not -1, pass sessionId to SetList component.

class HomeAdmin extends Component {
  constructor(){
    super();
    this.state = { sessionId: null }
  }


  render() {
    return (
        // refactor so this is just a setlist component
          SongUtils.renderSongList(this.props.sessionId, true)
    );
  }
}

HomeAdmin.propTypes = {
    sessionId: React.PropTypes.number.isRequired
}

export default HomeAdmin;