/* eslint-disable no-template-curly-in-string */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function Card(props) {
  return (
    <div className='card'>
        
      <img src={`../images/${props.image}`} alt="scenery" className='card--scenery'/>
      
      <section className='card--body'>
        <div className='card--info'> 
            <img src="../images/path.png" alt="path" className='card--path'/>
            <p className='card--country'>{props.country}</p>
            <a href={props.link} className='card--google-map' target="blank">View on Google Maps</a>
        </div>

        <h1 className='card--name'>{props.scenery}</h1>


        <h3 className='card--date'>{props.date}</h3>
        <p className='card--description'>
            <br /> {props.description}
        </p>
        
      </section>
    <hr />
    
    </div>

  )
}

export default Card
