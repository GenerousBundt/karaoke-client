import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Cookies from 'universal-cookie';

import Home from './Home';
import Auth from './Auth';

class Main extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
            <Home userIsAdmin = {this.props.adminSession} />
          </div>
        );
    }


}



export default Main;