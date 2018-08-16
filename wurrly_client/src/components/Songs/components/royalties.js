import React,{Component} from 'react';

class Royalties extends Component {

  constructor(props){
    super(props)

    this.state = {
      royalties: undefined,
      showRoyalties: false,
    }
  }

   render() {
     console.log(this.props.royalties)
      return(
        <div>
          <div onClick={this.props.close}>X</div>
          {this.props.royalties
          ? <div>royalties for {this.props.song}: ${this.props.royalties.cashPayout}</div>
          : <div>No royalties for {this.props.song}</div>}
        </div>
        )
      }
    }


export default Royalties;
