import React, { Component } from 'react';
import logo from '../resources/logo.png';

class Header extends Component {
  constructor(props){
    super(props);
  }


  render() {
    let headerText = this.props.altHeader ? this.props.altHeader : 'Welcome to Beaudry Karaoke';
    return (
        <div className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
        {/* <h2>{headerText}</h2> */}
      </div>
      
    );
  }
}

Header.propTypes = {
    altHeader: React.PropTypes.string,
}

export default Header;