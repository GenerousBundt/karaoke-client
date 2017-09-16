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

      <div className="app">
      <div className="app-header">
        {/* <img src={logo} className="app-logo" alt="logo" /> */}
        <h2>Welcome to Beaudry Karaoke </h2>
      </div>
      <div className="app-songlist">
        {/*Tonight's list, Top song marked, up next*/}
        Tonight's song list <br />
        <button> Here's a button </button>

      </div>
      <div>
        <Home userIsAdmin = {this.cookieIsPresent()} />
      </div>
      
    </div>


      
    );
      
  }
}

export default App;
