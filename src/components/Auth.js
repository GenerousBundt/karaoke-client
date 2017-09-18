import React, { Component } from 'react';
import * as SongUtils from '../utils/songUtils';
//import logo from '../../resources/man-singing.svg';




class Auth extends Component {
  constructor(props){
    super(props);

    this.state = {userName: '', password: ''};
    
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUserNameChange(event) {
    this.setState({userName: event.target.value});
  }

  handlePasswordChange(event) {
      this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    
    SongUtils.authLogin(this.state.userName, this.state.password).then((response) => {
        console.log("auth response: ", response);
        if(response === true){
            alert('Authorized');  
    }
        else{
            alert('Not authorized!');
        }});
    event.preventDefault();
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.userName} onChange={this.handleUserNameChange} />
          </label>
          
          <br />
          <label>
            Password: 
            <input type="text" value={this.state.password} onChange={this.handlePasswordChange} />
          </label>
          <br />
          <input type="submit" value="Submit" />

        </form>
      );
  }
}

export default Auth;