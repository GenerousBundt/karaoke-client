import PropTypes from 'prop-types';
import NewSong from './NewSong';

import * as SongUtils from '../utils/songUtils';

var React = require('react');


class AddSong extends React.Component {
    
    constructor(props){
        super(props);


    };
    componentDidMount() {
        SongUtils.getSession().then((response) => {this.setState({sessionId: response})});
      }
    render(){
        if(this.state.sessionId){
            return (
                <div className="app-addSong">
                    <div>
                    <NewSong sessionId={this.state.sessionId}/>
                    </div>
                </div>
                )
            }
        else{
            return (
                <div className="app-addSong">
                Loading ...
                </div>
            )
        }
    }
        
};

export default AddSong;