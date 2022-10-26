import { faContactBook } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

function Star(props) {

    const starIcon = props.isFilled ? "star-filled.png" : "star-empty.png"

  return (
    

    <div>
        <img src={`/images/${starIcon}`} alt="" className='card--favorite'
        onClick = {props.handleClick}
        />
    </div>
  )
}

export default Star