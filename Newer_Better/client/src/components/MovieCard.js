import React from 'react' ;

const MovieCard = props => {
    
    return(
        <div className='movieCard'>
            <p>{props.item}</p>
        </div>
    )
}
export default MovieCard;