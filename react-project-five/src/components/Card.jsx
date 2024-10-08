import React from 'react'

function Card(props) {
  return (
    <div>
      <input type='text' onChange={(e)=>{props.setName(e.target.value)}} />

      <p>Name state var ki value inside CARD components: {props.title}: {props.name}</p>
    </div>
  )
}

export default Card
