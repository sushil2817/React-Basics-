import {useState} from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  // create state
  // manage  state
  // change  state
  // sabhi child me state ko sync karwadunga
  const [name,setName] = useState('');
  return (
    <>
    <Card title="title 1"name={name}  setName={setName}/>
    <Card title="title 2" name={name}  setName={setName}/>
    
    {/* <p>I am inside parent component and value of name is:  {name} </p> */}
    </div>
  )
}

export default App
