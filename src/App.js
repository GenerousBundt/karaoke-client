import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import './App.css';
import Home from './components/Home';


class App extends Component {

  //remove when authentication page is active. We'll set the auth cookie there...
  componentWillMount(){
    const cookies = new Cookies();
    cookies.set('authCookie', 'Authenticated');
  }

  cookieIsPresent(){
    //return true if administrator cookie is present
    var cookies = new Cookies();
    if(cookies.get('authCookie') === 'Authenticated')
      return true;
    else
      return false;
  }

  render() {
    return (
      <Home userIsAdmin = {this.cookieIsPresent()} />
    );
      
  }
}

export default App;
