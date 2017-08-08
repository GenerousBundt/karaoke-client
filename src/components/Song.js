import PropTypes from 'prop-types';
var React = require('react');


class Song extends React.Component{
    constructor(props){
        super(props);
    }
    
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
}
Song.propTypes = {
    title: React.PropTypes.string.isRequired,
    stageName: React.PropTypes.string.isRequired,
};

export default Song;