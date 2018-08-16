import React,{Component} from 'react';
import SongCard from './components/SongCard.js'
import {getSongs} from '../../services'
import style from './songs.jss.js'

class Songs extends Component {
  constructor(props){
    super(props)

    this.state = {
      songs: undefined,
      songPage: 0,
    }
  }

  componentDidMount = () => {
    return getSongs()
    .then((results) => {
      this.setState({songs: results.data.items})
    })
  }

  nextSongs = () => {
    this.setState({songPage: this.state.songPage + 1})
  }

  prevSongs = () => {
    if(this.state.songPage > 0){
    this.setState({songPage: this.state.songPage - 1})
    }
  }

  generateSongCard = () => {
    const songList = this.state.songs
      ? this.state.songs.slice(this.state.songPage * 10, this.state.songPage * 10 + 10)
      : []
    return songList.map((song) => {
      return <SongCard
        key={song.id}
        song={song}
        />
    })
  }

   render() {
      return(
        <div>
          {this.generateSongCard()}
          <div style={style.navButtons}>
            <div onClick={this.prevSongs}>PREVIOUS</div>
            <div onClick={this.nextSongs}>NEXT</div>
            <div>PAGE: {this.state.songPage + 1}</div>
          </div>
        </div>
        )
      }
    }


export default Songs;
