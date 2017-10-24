import React, { Component } from 'react';
import * as SongUtils from '../utils/songUtils';

class StageName extends Component {
  constructor(props){
    super(props);

    this.state = {stageName: ''};

    this.handleStageNameChange = this.handleStageNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleStageNameChange(event){
    this.setState({stageName: event.target.value});
  }
  handleSubmit(event){
    //check that state.stageName is 3 characters long, not whitespace, and does not already exist
    //if so, alert the rules
    var stageName = this.state.stageName;
    if(stageName.length < 3 || stageName.indexOf(' ') > 0 ){
        alert('Your stage name must be at least three characters long and contain no white spaces');
        event.preventDefault();
        return;
    }
    if(this.props.stageNameList.indexOf(stageName) > 0){
        alert('That stage name is already taken tonight. Please choose another');
        event.preventDefault();
        return;
    }
    //if valid, add name to the session and redirect to the AddSong page
    SongUtils.addStageNameToSession(this.state.stageName, this.props.sessionId);
  }
  render() {
    return (
        <div>
        <h2>Join the party!</h2>
        <form onSubmit={this.handleSubmit}>
              <label>
                <input type="text" value={this.state.stageName} placeholder="Enter your Stage Name!" onChange={this.handleStageNameChange} />
              </label>
              
              <br />
              <input
                type='submit'
                value="Let's go!" 
                />
              <br />
    
        </form>
        </div>
    );
  }
}

StageName.propTypes = {
    sessionId: React.PropTypes.number.isRequired,
    //stageNameList: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
}

export default StageName;