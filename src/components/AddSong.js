import PropTypes from 'prop-types';
import NewSong from './NewSong';

import * as SongUtils from '../utils/songUtils';

var React = require('react');


class AddSong extends React.Component {
    
    constructor(props){
        super(props);


    };
    componentWillMount() {
        console.log("componentWillMount");
        SongUtils.getSession().then((response) => {console.log("sessionresponse: ", response); this.setState({sessionId: response})});

      }
    render(){
        console.log('sessionId: ', this.state.sessionId);
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