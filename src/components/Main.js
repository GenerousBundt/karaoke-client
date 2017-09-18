import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Cookies from 'universal-cookie';

import Home from './Home';
import Auth from './Auth';

class Main extends Component{


  userIsAdmin(){
    //return true if administrator cookie is present
    var cookies = new Cookies();
    if(cookies.get('authCookie') === 'Authenticated')
      return true;
    else
      return false;
  }

    render() {
        return (
            <div>
            <Home userIsAdmin = {this.userIsAdmin()} />
          </div>
        );
    }


}



export default Main;