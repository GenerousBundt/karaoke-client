import React, { Component } from 'react';

class Button extends Component {
  constructor(props){
    super(props);

    
  }


  render() {
    const handleClick = this.props.onClick;
    return (
        <div>
        {/* <img src={logo} className="app-logo" alt="logo" /> */}
        <button className={this.props.className} onClick={handleClick}>{this.props.label}</button>
      </div>
    );
  }
}

Button.propTypes = {
    label: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func.isRequired,
    className: React.PropTypes.string.isRequired,
}

export default Button;