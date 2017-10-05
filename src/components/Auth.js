import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Cookies from 'universal-cookie';
import * as SongUtils from '../utils/songUtils';




class Auth extends Component {
  constructor(props){
    super(props);

    this.state = {userName: '', password: '', loggedIn: false};
    
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
        const cookies = new Cookies();
        if(response === true){
            //set cookie for 12 hours
            var now = new Date();
            const expiration = new Date(now.setTime(now.getTime() + (12*60*60*1000)));

            cookies.set('authCookie', 'Authenticated', { expires: expiration });
            // reroute to Main 
            this.setState({loggedIn: true});
    }
        else{
            alert('Not authorized!');
        }});
    event.preventDefault();
  }

  render() {
      const {loggedIn} = this.state;
      if(loggedIn){
          return(
            <Redirect to='/' />
          );
      }
      else{
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
}

export default Auth;