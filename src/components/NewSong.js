import React, { Component, Input } from 'react';
import Menu, {SubMenu, MenuItem} from 'rc-menu';
import { Redirect } from 'react-router';
import * as SongUtils from '../utils/songUtils';
import * as Dropdown from 'rc-dropdown';
import 'rc-dropdown/assets/index.css';

class NewSong extends Component {
  constructor(props){
    super(props);

    this.state = {url: ''
    , songName: ''
    , sessionStageNames: null
    , selectedStageName: null
    , selectedStageNameId: null
    , songAdded: null};

    this.handleSongNameChange = this.handleSongNameChange.bind(this);
    this.handleUrlChange = this.handleUrlChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
    this.getStageNames();
  }

  getStageNames = () => {
    SongUtils.getSessionStageNames(this.props.sessionId).then((response) => this.setState({sessionStageNames: response}));
  }

  onSelect = ({key, item}) => {
    this.setState({selectedStageNameId: key});
    this.setState({selectedStageName: item.props.children});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const song = {
      stageName: this.state.selectedStageName,
      url: this.state.url,
      title: this.state.songName,
      sessionId: this.props.sessionId,

    }
    SongUtils.addSongToSession(song).then((response) => {
      if(response.status === 200){
        this.setState({songAdded: true});
      }
    });
    

  }
  onVisibleChange= (visible) => {
    console.log(visible);
  }

  handleSongNameChange = (event) => {
    this.setState({songName: event.target.value});
  }

  handleUrlChange = (event) => {
    this.setState({url: event.target.value});
  }

  render() {
    console.log("selectedStageNameId: ", this.state.selectedStageNameId);
    if(this.state.selectedStageNameId === -1){
      return(
        <Redirect to='/AddStageName' />
      )
    }
      

    const defaultMenuItem = <MenuItem key={-1}>Add Your StageName</MenuItem>
    let menuItems = this.state.sessionStageNames ? 
        this.state.sessionStageNames.map((stageName) => <MenuItem key={stageName.id}>{stageName.name}</MenuItem>) : [<MenuItem key={0}>Waiting</MenuItem>];
        
    menuItems.push(defaultMenuItem);
    
    const menu = (
        <Menu onSelect={this.onSelect}>
          {menuItems}
        </Menu>
      );

      const {songAdded} = this.state;
      if(songAdded){
          return(
            <Redirect to='/' />
          );
      }
      
      else{

        return (
          <div>
          <h2></h2>
          <form  onSubmit={this.handleSubmit}>
          <Dropdown
          trigger={['click']}
          overlay={menu}
          animation="slide-up"
          onVisibleChange={this.onVisibleChange}
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
}

NewSong.propTypes = {
  sessionId: React.PropTypes.number.isRequired,
}

export default NewSong;