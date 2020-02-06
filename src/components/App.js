import React, {Component} from 'react';
import FilmCard from './FilmCard'
import '../css/App.css';

class App extends Component{

  render(){
    return(
      <div className="App">
        <FilmCard />
      </div>
    )
  }
}

export default App;
