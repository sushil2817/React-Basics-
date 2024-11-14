import { useMemo, useState } from 'react';
import './App.css'

function App() { 

  const [count,setCount] = useState(0);
  const [input,setInput] = useState(0);

  function expensiveTask(num){
    console.log("Inside Expensive Task");
    for(let i=0;i<=10000000;i++){
      return num*2;
    }
  }
  // let doublevalue = expensiveTask(input)
  function handleCount(){
    setCount(count+1);
  }

  let doublevalue = useMemo(() => expensiveTask(input), [input])

  return (
    <div>
    <button onClick={handleCount}>Increment</button>
      <h1> Count: {count}</h1>

      <input type="number" 
      placeholder='Enter the number' 
        value={input}
        onChange={(e)=>setInput(e.target.value)}
      />

      <div>Double: {doublevalue}</div>
    </div>
  )
}

export default App
