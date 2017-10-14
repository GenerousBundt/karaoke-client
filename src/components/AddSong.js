import PropTypes from 'prop-types';
import NewSong from './NewSong';

var React = require('react');


class AddSong extends React.Component {
    
    constructor(props){
        super(props);
    };
    
    render(){

        return (
            <div className="app-addSong">
                <div>
                <NewSong sessionId={this.props.sessionId}/>
                </div>
            </div>
            )
        }
};
AddSong.propTypes = {
    sessionId: React.PropTypes.number.isRequired,
}

export default AddSong;