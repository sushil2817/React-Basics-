import React from 'react'
import { useParams } from 'react-router-dom'


export default function ParamComp() {
    const {id} = useParams();
  return (
    <div>
      <p>Params: {id}</p>
    </div>
  )
}
