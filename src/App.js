import React, { Component } from 'react';

import {Switch, Route} from 'react-router-dom';
import Cookies from 'universal-cookie';

import './App.css';
import Main from './components/Main';
import Auth from './components/Auth';
import Header from './components/Header';
import NewSong from './components/NewSong';
import StageName from './components/StageName';

import * as SongUtils from './utils/songUtils';


class App extends Component {
  constructor(props){
    super(props);

    this.state={sessionId:null}
    
  }


  userIsAdmin(){
    var cookies = new Cookies();
    if(cookies.get('authCookie') === 'Authenticated')
      return true;
    else
      return false;
  }

  
  render() {
    const requireAuth = (nextState, replace) => {
      if(!this.userIsAdmin()){
        replace({
          pathname: '/AdminLogin'
        })
      };
    }
    const renderMain = () => {
      return (
        <Main adminSession={this.userIsAdmin()} />
      )
    }
    const renderAddSong= () => {
        return (
          <NewSong />
        )
      }

    const renderAddStageName = () => {
      this.state.sessionId 
      return (
        <StageName  />
      )
    }
    return (

      <div className="app">

      <Header />

      <div>
        <Switch>
          <Route exact path='/' component={renderMain}/>
          <Route path='/AdminLogin' component={Auth}/>
          <Route path='/Admin' component={renderMain} onEnter={requireAuth} />
          <Route path='/AddSong' component={renderAddSong} />
          <Route path='/AddStageName' component={renderAddStageName} />
        </Switch>
      </div>
      
    </div>


      
    );
      
  }
}

export default App;
