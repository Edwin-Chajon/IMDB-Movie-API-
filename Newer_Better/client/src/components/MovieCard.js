
import React, {useState, useEffect} from 'react'
import ReactModal from 'react-modal';
import { usePalette } from 'react-palette'



const MovieCard = props => {

  const [isOpen, setOpen] = useState(false)

  const [clicked, setClicked] = useState(false)

 const toggle = () => {
  setOpen(!clicked);
  };
 
 const toggleClass = () =>{
     setClicked(!clicked)
 }

 const { data, loading, error } = usePalette(props.image)

    return (

<section key={props.key} onClick={toggleClass} className='movieContainer'>
    
<ul>
  <li>
  
    <figure >
      <img src = {props.image} className= 'posterImage' alt='Movie Poster' onClick={toggle}/>
      {/*
        <div className = {clicked ? 'clickedText' : 'text'}> {props.movie}</div> 
 
           <div key = {props.movie} className="overlay" onClick = {toggle}>   

     
        
          --> <Expand open = {isOpen} className="synopsis">{props.synopsis}</Expand>
         {props.synopsis}
          
        </div> */}
       <ReactModal 
       isOpen={clicked ? true : false} 
       shouldCloseOnOverlayClick={true}
       className = {"ReactModal__Content"}
       ariaHideApp={false}
       style={{overlay: {backgroundColor: "none"},content:{borderRadius: "7px",border: `3px solid ${/*data.muted*/data.l}`,background: `${data.vibrant}`}}}
       shouldFocusAfterRender={false}
       > 
 
          {/* <img className= 'backDrop' src = {props.backdrop}/>*/}
          <img src = {props.image} className= 'posterImageInside' alt='Movie Poster'/>
          <div className= 'sideInfo'>
            <h1 className = 'title' >{props.movie}</h1>
            <div className = 'synopsis'>{props.synopsis}</div> 
          </div>
      </ReactModal> 
    </figure>
  </li>
</ul>           
</section>
    );
  
}
 
export default MovieCard;