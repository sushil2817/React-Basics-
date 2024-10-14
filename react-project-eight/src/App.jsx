import './App.css'
import { useEffect, useState } from 'react'

function App() {

  let [count,setCount] = useState(0);
  let [total,setTotal] = useState(0);
  let [windowWidth,setWindowWidth] = useState(window.innerWidth);

  // first -> side-effect function
  // second -> clean-up function
  // thired -> comma separated dep list

  // variation :1

  // runs on every render
  // useEffect(()=>{
  //   alert("I will run on every render");
  // })

  // variation :2

  // runs on first render
  // useEffect(()=>{
  //   alert("I will runs on only first render")
  // },[])


  // variation:3
  // useEffect(()=>{
  //     alert(`I will runs on when count: ${count} is updated`)
  //   },[count])

 // vraiation :4
      // useEffect(()=>{
      //   alert("run on when total || count update")
      // },[total,count])


  // variation :5
  // iss baarlet's add a cleanup funtion
  useEffect(() => {
      const handleResize = () => setWindowWidth(window.innerWidth);
      console.log("Event listener added");
      window.addEventListener('resize', handleResize)
      
  }, [])
  

  function handleClick(){
    setCount(count+1)
  }
  function handleClickTotal(){
    setTotal(total+1)
  }
  

  return (
    <div>

    <h1>Window Witdh is : {windowWidth}px</h1>
      {/* <h1>This is react!... use Effect hook</h1>
      <button onClick={handleClick}>Count click Me</button>
      <p>Count: {count}</p>
      <button onClick={handleClickTotal}>Total click me</button>
      <p>Total: {total}</p> */}
    </div>
  )
}

export default App
