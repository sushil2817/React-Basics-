import { useCallback, useState } from 'react'
import './App.css'
import ChildComponents from './components/ChildComponents'

function App() {
  const [count, setCount] = useState(0)


  const  handleClick = useCallback(()=>{
    setCount(count+1);
  },[count])

  return (
    <div>
        <div>
          Count:{count}
        </div>
        <div>
            <button onClick={handleClick}>
              Incremet
            </button>
        </div>

        <br /><br />

        <div>
          <ChildComponents 
          buttonName="Click me"
            handleClick={handleClick}
          />
        </div>
    </div>
  )
}

export default App
