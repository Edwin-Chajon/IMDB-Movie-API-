import React from 'react' ;

import './Clicking.css'

const Clicking = props => {
    return(
        <div className={`${props.item.completed ? 'styling' : null}`}
        onClick={() => props.toggleItem(props.item.id)}
        >
            <p>{props.item.task}</p>
        </div>
    )
}
export default Clicking;