var React = require('react');

var Song = React.createClass({
    propTypes:{
        title: React.PropTypes.string.isRequired,
        stageName: React.PropTypes.string.isRequired,
    },

    render(){
        
        var cn = "list-group-item";

        return (
            <a className={cn}>
                {this.props.address}
                <div className="song-title">{this.props.title}</div>
                <div className="song-stageName">{this.props.stageName}</div>
            </a>
        )

    }

});

module.exports = Song;