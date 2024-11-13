import { useState,useEffect, useRef } from 'react'
import './App.css'

function App() {

  const [time,setTime] = useState(0);
  let timerRef = useRef(null);

  // const [count,setCount] = useState(0);
  // let val = useRef(0);

  // let btnRef = useRef()

  // function handleInc(){
  //     val.current = val.current+1;
  //     console.log("Value of val: ",val.current);
  //     setCount(count+1);
  // }
  // function handleDec(){
  //     setCount(count-1);
  // }

  // useEffect(() => {
  // //  it runs on every render
  //   console.log("maiin firse render ho gya hu");
    
  // })

  // function chnageColor(){
  //   btnRef.current.style.backgroundColor = "red";
  // }

  function startTimer(){
    timerRef.current = setInterval(()=>{
      setTime(time => time+1)
    },1000)
  }
  function stopTimer(){
      clearInterval(timerRef.current);
      timerRef.current = null
  }
  function resetTimer(){
    stopTimer()
    setTime(0)
  }
  

  return (
    <div>


    <h1>StopWatch: {time} seconds</h1>

    <button onClick={startTimer}>Start</button>
    <br /><br />
    <button onClick={stopTimer}>Stop</button>
    <br /><br />
    <button onClick={resetTimer}>Reset</button>

      {/* <h1>UseRef hook in react</h1>
      <button 
      ref={btnRef}
      onClick={handleInc}>Increment</button>

      <p>Count: {count}</p>

      <button onClick={handleDec}>Decerement</button>
      <br />
      <br />
      <button 
      onClick={chnageColor}>Change color of 1 button</button> */}
    </div>
  )
}

export default App
