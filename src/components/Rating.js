import React, {Component} from 'react';
import '../css/Rating.css'
class Rating extends Component{
  render(){
    return(
      <div className="Rating">
      <p className="Rating-symbol">  {this.props.rating>=8 ?"⭐⭐⭐⭐⭐⭐⭐⭐":""} </p>
      </div>
    )
  }
}
export default Rating;
