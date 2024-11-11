
import './App.css'
import {useDispatch, useSelector} from 'react-redux'
import { decremented, incrementByAmount, incremented,reset } from './features/counter/counterslice';
import { useState } from 'react';

function App() {
  const [amount,setAmount] = useState(0)
  const count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch();
  
    function handleIncrementClick(){
      dispatch(incremented())
    }

    function handleDecrementClick(){
      dispatch(decremented());
    }

    function handleResetClick(){
      dispatch(reset())
    }

    function handleIncAmountClick(){
      dispatch(incrementByAmount(amount))
    }


  return (
    <div>
      <button onClick={handleIncrementClick}>+</button>
      <p>{count}</p>
      <button onClick={handleDecrementClick}>-</button>
      <button onClick={handleResetClick}>reset</button>

      <input 
        type="number"
        value={amount}
        placeholder='Enter Amount'
        onChange={(e)=>setAmount(e.target.value)}
      />

      <button onClick={handleIncAmountClick}>reset</button>
    </div>
  )
}

export default App
