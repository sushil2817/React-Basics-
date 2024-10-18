import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {

    const navigate = useNavigate()

    function handleClick(){
        navigate('/')
    }
  return (
    <div>
        <h1>404 not found</h1>
        <button onClick={handleClick}>Click to return home page</button>
    </div>
  )
}
