var React = require('react');
var Song= require('./Song');

var SetList = React.createClass({

    

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

});

module.exports = SetList;