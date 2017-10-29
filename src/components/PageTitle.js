import React, { Component } from 'react';

class PageTitle extends Component {
  constructor(props){
    super(props);
  }


  render() {
    return (
        <div className={this.props.className}>

        {this.props.title} <br />

      </div>
    );
  }
}

PageTitle.propTypes = {
    title: React.PropTypes.string.isRequired,
    className: React.PropTypes.string.isRequired,
}

export default PageTitle;