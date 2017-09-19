import React, { Component } from 'react';

import {Switch, Route} from 'react-router-dom';
import Cookies from 'universal-cookie';

import './App.css';
import Main from './components/Main';
import Auth from './components/Auth';
import Header from './components/Header';


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
    return (

      <div className="app">

      <Header />

      <div>
        <Switch>
          <Route exact path='/' component={renderMain}/>
          <Route path='/AdminLogin' component={Auth}/>
          <Route path='/Admin' component={renderMain} onEnter={requireAuth} />
        </Switch>
      </div>
      
    </div>


      
    );
      
  }
}

export default App;
