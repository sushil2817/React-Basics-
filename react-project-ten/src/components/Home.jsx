import React from 'react'
import { useNavigate } from 'react-router-dom'



export default function Home() {

  const navigate = useNavigate();

  function handleClick(){
      navigate('/about');
  }

  return (
    <div>
      <button onClick={handleClick}>
        Move to About page
      </button>

    </div>
  )
}
