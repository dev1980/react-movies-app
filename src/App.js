import React, {useEffect, useState} from 'react';
import Movie from './components/Movie'

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5fe0af2a35351d345ad67d45a80457e9&page=1";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const SEARCH_API = "https://api.themoviedb.org/3/search/movie/343611?api_key= 5fe0af2a35351d345ad67d45a80457e9&query="

function App() {
const [movies, setMovies ] = useState([]);

useEffect(() => {
 fetch(FEATURED_API)
 .then(res => res.json())
 .then((data) => {
   console.log(data)
   setMovies(data.results)
 });
}, [])
  return (
    <div className="movie-container">

      {movies.length > 0 && movies.map((movie) => 
      <Movie key={movie.id} {...movie} />)}
    </div>
  );
}

export default App;
