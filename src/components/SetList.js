import DraggableList from 'react-draggable-list'
import Song from './Song';
import SongDraggable from './SongDraggable';
import PropTypes from 'prop-types';

var React = require('react');


class SetList extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
        useContainer: false,
        list: [ {title:"Title1", stageName:"Crazy Name One", key:1},
                            {title:"Title2", stageName:"Crazy Name Two", key:2},
                            {title:"Title3", stageName:"Crazy Name Three", key:3}]
    }
    };
    
    

    render(){
        
        var songList = [ {title:"Title1", stageName:"Crazy Name One", key:1},
                            {title:"Title2", stageName:"Crazy Name Two", key:2},
                            {title:"Title3", stageName:"Crazy Name Three", key:3}];

        var songArray = [];
        var songs = function(){

        
            
            songList.map(function(s) {
                //return <Song title={s.title} stageName={s.stageName} key={songList.indexOf(s)}/>
                songArray.push(<Song title={s.title} stageName={s.stageName} key={songList.indexOf(s)}/>);

            });
            return <DraggableList list={songList} template={SongDraggable} itemKey="key" />

        };
            

        return (
            <div className="SongList list-group">
                <div>
                <DraggableList list={songList} template={SongDraggable} itemKey="key" />
                </div>
            </div>
        )

    }

};
SetList.propTypes = {

}


export default SetList;