import DraggableList from 'react-draggable-list'
import SongDraggable from './SongDraggable';
import PropTypes from 'prop-types';
import SingerSetList from './SingerSetList';
import Song from '../models/song';

import * as SongUtils from '../utils/songUtils';

var React = require('react');


class SetList extends React.Component {
    
    constructor(props){
        super(props);
        this.state = { rawSongList: null, songList: null }
    };

    componentWillMount(){
        SongUtils.getSessionSongs(this.props.sessionId).then((response) => this.setState({rawSongList: response}));
    }

    getSongList(){
        var tempSongList = [];
        this.state.rawSongList.forEach(function(element) {
            tempSongList.push(new Song(element));
        }, this);
        return tempSongList;
    }
    
    render(){
        
        var songList = this.state.rawSongList ? this.getSongList() : [ ];
            
        if(this.props.draggable){
            return (
                <div className="list-group">
                    <div>
                    <DraggableList list={songList} template={SongDraggable} itemKey="songId" />
                    </div>
                </div>
            )
    
        }
        else{
            return (
                <SingerSetList songs = {songList} itemKey="songId"/>
            )
        }
        
    }

};
SetList.propTypes = {
    sessionId: React.PropTypes.number.isRequired,
    draggable: React.PropTypes.bool.isRequired
}

export default SetList;