import React,{Component} from 'react';
import style from './song-card.jss.js'
import {findRoyalties} from '../../../services'
import {filterRoyalties} from '../../../helpers'
import Royalties from './royalties'

class SongCard extends Component {

  constructor(props){
    super(props)

    this.state = {
      royalties: undefined,
      showRoyalties: false,
    }
  }

   showRoyalties = () => {
     findRoyalties(this.props.song.title)
     .then((royalties) => {
       this.setState({
         royalties: filterRoyalties(royalties, this.props.song.id),
         showRoyalties: true,
        })
     })
   }

   closeRoyalties = () => {
     this.setState({
       royalties: undefined,
       showRoyalties: false,
     })
   }

   render() {
     console.log(this.state)
      return(
        <div>
          {this.state.showRoyalties
          ? <Royalties
              song={this.props.song.title}
              royalties={this.state.royalties}
              close={this.closeRoyalties}
            />
          : (<div style={style.songCard} onClick={this.showRoyalties}>
              <div style={style.title}>{this.props.song.title}</div>
              <div style={style.artist}>{this.props.song.artist.name}</div>
            </div>)}
          </div>
        )
      }
    }


export default SongCard;
