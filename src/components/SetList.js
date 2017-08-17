import DraggableList from 'react-draggable-list'
import SongDraggable from './SongDraggable';
import PropTypes from 'prop-types';

var React = require('react');


class SetList extends React.Component {
    
    constructor(props){
        super(props);
    };
    
    render(){
        
        var songList = [ {title:"Title1", stageName:"Crazy Name One", key:1},
                            {title:"Title2", stageName:"Crazy Name Two", key:2},
                            {title:"Title3", stageName:"Crazy Name Three", key:3}];
            

        return (
            <div className="list-group">
                <div className="">SongList</div>
                <div>
                <DraggableList list={songList} template={SongDraggable} itemKey="key" />
                </div>
            </div>
        )

    }

};
SetList.propTypes = {
    session: React.PropTypes.number.isRequired
}

export default SetList;