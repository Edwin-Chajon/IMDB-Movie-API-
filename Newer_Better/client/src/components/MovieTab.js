/*
import React, { useState } from 'react';
import Expand from 'react-expand-animated';

const MovieTab = props => {

  const [isOpen, setOpen] = useState(false)

  const [clicked, setClicked] = useState(false)

 const toggle = () => {
    setOpen(!isOpen);
  };
 
 const toggleClass = () =>{
     setClicked(!clicked)
 }



    return (

        <section  onClick={toggleClass} className='movieContainerClicked'>
        <ul>
          <li>
          
            <figure >
                <button key = {props.movie} className="overlay" onClick = {toggle}>   
        
                <div className ='clickedText'> {props.movie}</div>
                
                    <Expand open = {isOpen} className="synopsis">{props.synopsis}</Expand>
                    
                </button>
              
            </figure>
          </li>
        </ul>           
        </section>
            );
}
export default MovieTab*/