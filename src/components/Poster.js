import React, {Component} from 'react';
import '../css/Poster.css'
class Poster extends Component{
  render(){
    return(
      <div className="Poster">
        <img className="Poster-img"src={this.props.poster} alt={this.props.title} />
      </div>
    )
  }
}

export default Poster;
