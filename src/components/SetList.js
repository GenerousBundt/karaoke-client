import DraggableList from 'react-draggable-list'
import SongDraggable from './SongDraggable';
import PropTypes from 'prop-types';
import SingerSetList from './SingerSetList';

var React = require('react');


class SetList extends React.Component {
    
    constructor(props){
        super(props);
    };
    
    render(){
        
        var songList = [ {title:"Title1", stageName:"Crazy Name One", key:1},
                            {title:"Title2", stageName:"Crazy Name Two", key:2},
                            {title:"Title3", stageName:"Crazy Name Three", key:3}];

        var nonDraggableSongListSource = songList.map((song) => 
        //<li>{song.title}</li>
        <div>
        <div className="song">
            <div className="song-title">{song.title}</div>
            <div className="song-stageName">{song.stageName}</div>
        </div>
        </div>
    );
            
        if(this.props.draggable){
            return (
                <div className="list-group">
                    <div className="">SongList</div>
                    <div>
                    <DraggableList list={songList} template={SongDraggable} itemKey="key" />
                    </div>
                </div>
            )
    
        }
        else{
            return (
                <SingerSetList songs = {songList} />
            )
        }
        
    }

};
SetList.propTypes = {
    session: React.PropTypes.number.isRequired,
    draggable: React.PropTypes.bool.isRequired
}

export default SetList;