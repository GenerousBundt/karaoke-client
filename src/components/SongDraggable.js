import PropTypes from 'prop-types';
import '../App.css';
var React = require('react');


class SongDraggable extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        const {item, itemSelected, dragHandle} = this.props;
        var cn = "list-group-item";

        return (
            <div>
            {dragHandle(<div className="song">
                {this.props.address}
                <div className="song-title">{item.title}</div>
                <div className="song-stageName">{item.stageName}</div>
            </div>)}
            </div>
            
        )

    }
}

export default SongDraggable;