import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import '../components/MovieGet.css'
import '../components/MovieCard'
import MovieCard from '../components/MovieCard';





function MovieGet(){

  const [movieInfo, setMovieInfo] = useState([]);

useEffect(() => {
axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=88dc4a5c0684853eaa7d95ec91b6f437&language=en-US&page=1')
    .then((response)=>{
      console.log(response.data.results);
      let definedInfo = response.data.results;
      setMovieInfo(definedInfo)
    })
    .catch((error)=>{
      console.log(error)
    })
}, [])




return(
  

  <div className="nextTry">
    {movieInfo.map((mov, index)=>( 
    ////////////////////////////////
    <section key = {index} className="movieContainer" id="movieContainer">
      <ul>
        <li>
        
          <figure>
            <img src = {`https://image.tmdb.org/t/p/original${mov.poster_path}`} className= 'posterImage' alt='Movie Poster '/>
            <button key= {mov.title} className="overlay" >
              <div className="text">{mov.title}</div>
            </button>
          </figure>
        </li>
      </ul>           

      <MovieCard className='movieCard' key= {mov.title}   item={`${mov.title}`}/>
       
      </section>
    ////////////////////////////////
    ))}
    
  </div>
)
}
export default MovieGet
