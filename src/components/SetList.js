import Song from './Song';
import PropTypes from 'prop-types';

var React = require('react');


class SetList extends React.Component {
    constructor(props){
        super(props);
        console.log("sessionId: ", this.props.sessionId);
    }
    

    render(){
        
        var songList = [ {title:"Title1", stageName:"Crazy Name One"},
                            {title:"Title2", stageName:"Crazy Name Two"},
                            {title:"Title3", stageName:"Crazy Name Three"}];

        var songs = 

            songList.map(function(s) {
                
                return <Song title={s.title} stageName={s.stageName} key={songList.indexOf(s)}/>
            })
            

        return (
            <div className="SongList list-group">
                <div className="">SongList</div>
                <div>
                {songs}
                </div>
            </div>
        )

    }

};
SetList.propTypes = {

}


export default SetList;