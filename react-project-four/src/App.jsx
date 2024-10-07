import { useState } from 'react'

import './App.css'
import Card from './components/Card'
import Button from './components/Button'

function App() {

  let [count,setCount] = useState(0);

  function handleClick(){
    setCount(count+2);
  }

  return (
    <div>

    <Button handleClick = {handleClick} text="Click me">
      <h1>{count}</h1>
    </Button>


      {/* <Card  name="Sushil">
      <p>trying to be consistence</p>
      <p>One i will be best coder</p>
      <p>Will completed this</p>
      </Card> */}

    </div>
  )
}

export default App
