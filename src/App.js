import React, { Component } from 'react';

import {Switch, Route} from 'react-router-dom';
import Cookies from 'universal-cookie';

import './App.css';
import Main from './components/Main';
import Auth from './components/Auth';




class App extends Component {
  constructor(props){
    super(props);
  }

  userIsAdmin(){
    var cookies = new Cookies();
    if(cookies.get('authCookie') === 'Authenticated')
      return true;
    else
      return false;
  }

  requireAuth(nextState, replace) {
    if(!this.userIsAdmin()){
      replace({
        pathname: '/BriansSecrePath'
      })
    };
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
        <Switch>
          <Route exact path='/' component={Main}/>
          <Route path='/BriansSecretPath' component={Auth}/>
          <Route path='/Admin' component={Main} onEnter={this.requireAuth()} />
          {/* <Route path='/schedule' component={Schedule}/> */}
        </Switch>
      </div>
      
    </div>


      
    );
      
  }
}

export default App;
