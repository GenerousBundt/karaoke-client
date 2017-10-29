import PropTypes from 'prop-types';
import '../App.css';
var React = require('react');


class SingerSetList extends React.Component{
    constructor(props){
        super(props);
    }

    
    render(){
        const { songs, itemKey } = this.props;

        var singerSongList = songs.map((song) => 

        <div>
        <div className="song">
            <div className="song-title">{song.title}</div>
            <div className="song-stageName">{song.stageName}</div>
        </div>
        </div>
        );

        return (
            <ul className="list-item-singer">{singerSongList}</ul>
            
        )

    }
}

export default SingerSetList;