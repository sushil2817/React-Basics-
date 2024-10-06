import React,{useState} from 'react'
import  './Counter.css'

const Counter = () => {
    
    let [count, setCount] = useState(0);

    const addition = ()=>{
        if(count >=30){
            setCount(count = 0)
        alert("You reached above 30 so the valaue is set to 0")
        }else{

            setCount(count++)
        }
    }

    const removeVal = () =>{
        if(count <=1){
            setCount(count = 0)
            alert("You reached below 0 so the value is set to 0")
        }else{

            setCount(count-1);
        }
    }


  return (
    <div className='counter-container'>
    <p id='para'>You have clicked {count} times</p>
    <button id='btn' onClick={addition}>Addition</button>
    <button id='btn' onClick={removeVal}>Subtract</button>
      
    </div>
  )
}

export default Counter
