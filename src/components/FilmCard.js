import React, {Component} from 'react';
import Poster from './Poster';
import Rating  from './Rating';
import '../css/FilmCard.css';
class FilmCard extends Component{
  static defaultProps={
    movies:{
          title: "Pulp Fiction",
          genre: "Crime",
          released: 1994,
          rating: 8.9,
          awards: "1 Oscars",
          running_time: "137min.",
          logline: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
          path: "https://www.imdb.com/title/tt0110912/",
          poster: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,686,1000_AL_.jpg"
        }
  }
  render(){
    const {
          title,
          genre,
          released,
          awards,
          running_time,
          logline,path,
          poster,
          rating
      }= this.props.movies;
    return(
      <div className="FilmCard">
        <a href={path}>
          <div className="col-md-6 col-md-offset-3" ><h1 className="FilmCard-title">{title}</h1></div>
          <div className="col-md-6 col-md-offset-3">
            <div className="col-md-4">
            <Poster
              poster={poster}
              name={title}
             />
            <Rating
              rating={rating}
            />
          </div>
          <div className="FilmCard-desc col-md-8">
            <h3>Genre: {genre}</h3>
            <p>Released: {released}</p>
            <h3>Awards: {awards}</h3>
            <h4>Running Time{running_time}</h4>
            <h3>Rating {rating}</h3>
          </div>

        </div>
      </a>
     </div>
    )
  }
}
export default FilmCard;
