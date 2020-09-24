import React, {useEffect, useState} from 'react';
import Movie from './components/Movie'

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5fe0af2a35351d345ad67d45a80457e9&page=1";

const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=5fe0af2a35351d345ad67d45a80457e9&query=";

function App() {
const [movies, setMovies ] = useState([]);
const [searchTerm, setSearchTerm] = useState('');

useEffect(() => {
getMovies(FEATURED_API)
}, []);

const getMovies = function(API){
  fetch(API)
  .then(res => res.json())
  .then((data) => {
    console.log(data)
    setMovies(data.results)
  });
}
const handelOnSubmit = (e) => {
  e.preventDefault();

  if(searchTerm){
    getMovies(SEARCH_API + searchTerm)
   
    setSearchTerm('');
  }
};

const handleOnChange = (e) => {
  setSearchTerm(e.target.value);
};
  return (
    <>
    <header>
    <form onSubmit={handelOnSubmit}>
    <input 
    className="search" 
    type="search" 
    placeholder="Search...." 
    value={searchTerm}
    onChange={handleOnChange}
    />
    </form>
    </header>

    <div className="movie-container">

      {movies.length > 0 && movies.map((movie) => 
      <Movie key={movie.id} {...movie} />)}
    </div>
    </>
  );
}

export default App;
