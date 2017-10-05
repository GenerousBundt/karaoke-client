import React, { Component, Input } from 'react';
import Menu, {SubMenu, MenuItem} from 'rc-menu';
import * as SongUtils from '../utils/songUtils';
import * as Dropdown from 'rc-dropdown';
import 'rc-dropdown/assets/index.css';

class NewSong extends Component {
  constructor(props){
    super(props);

    this.state = {url: '', songName: '', sessionStageNames: null, selectedStageName: null, selectedStageNameId: null};

    this.handleSongNameChange = this.handleSongNameChange.bind(this);
    this.handleUrlChange = this.handleUrlChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
    this.getStageNames();
  }

  getStageNames = () => {
    SongUtils.getSessionStageNames(this.props.sessionId).then((response) => this.setState({sessionStageNames: response}));
  }

  onSelect = ({key, item}) => {
    this.setState({selectedStageName: key});
    this.setState({selectedStageName: item.props.children});
  }

  handleSubmit = (event) => {
    const song = {
      stageName: this.state.selectedStageName,
      url: this.state.url,
      title: this.state.songName,
      sessionId: this.props.sessionId,

    }
    SongUtils.addSongToSession(song);
    event.preventDefault();
  }

  handleSongNameChange = (event) => {
    console.log("SongNameChange: ", event.target.value);
    this.setState({songName: event.target.value});
  }

  handleUrlChange = (event) => {
    this.setState({url: event.target.value});
  }

  render() {
      
      function onVisibleChange(visible) {
        console.log(visible);
      }
    const menuItems = this.state.sessionStageNames ? 
        this.state.sessionStageNames.map((stageName) => <MenuItem key={stageName.id}>{stageName.name}</MenuItem>) : [<MenuItem key={0}>Waiting</MenuItem>]

    const menu = (
        <Menu onSelect={this.onSelect}>
          {menuItems}
        </Menu>
      );
    return (
        <div>
        <h2></h2>
        <form  onSubmit={this.handleSubmit}>
        <Dropdown
        trigger={['click']}
        overlay={menu}
        animation="slide-up"
        onVisibleChange={onVisibleChange}
      >
        <button style={{ width: 100 }}>{this.state.selectedStageName ? this.state.selectedStageName : 'Your Stage Name'}</button>
      </Dropdown>
            <label>
              <input type="text" value={this.state.songName} placeholder="Name of your Song" onChange={this.handleSongNameChange} />
            </label>
              <label>
                <input type="text" value={this.state.url} placeholder="Paste your Url" onChange={this.handleUrlChange}  />
              </label>
              
              <br />
              <input
                type='submit'
                value="Let's go!" 
                />
              <br />
    
        </form>
      </div>
    );
  }
}

NewSong.propTypes = {
  sessionId: React.PropTypes.number.isRequired,
}

export default NewSong;