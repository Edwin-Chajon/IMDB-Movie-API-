import axios from 'axios'
import React, {useState, useEffect} from 'react'
import FadeIn from 'react-fade-in';
import '../components/MovieGet.css'
import MovieCard from '../components/MovieCard';
import MovieTab from './MovieTab'
import Header from './Header.js'




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
  
<div className="mainOne">
  <div className="nextTry">
    
    {movieInfo.map((mov, index)=>( 
    ////////////////////////////////
    <section key= {Math.random()}  >
    
    <FadeIn>
      <MovieCard className='movieCard' 
      backdrop={`https://image.tmdb.org/t/p/original${mov.backdrop_path}`}
      movie={`${mov.title}`}
      image={`https://image.tmdb.org/t/p/original${mov.poster_path}`}
      synopsis={mov.overview}
      />
      </FadeIn>
      <p></p>
    </section>


    ////////////////////////////////  
    ))}

  </div></div>
)
}
export default MovieGet
