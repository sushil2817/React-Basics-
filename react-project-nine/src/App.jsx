import { createContext, useState } from 'react'
import ChildA from './components/ChildA';
import './App.css'


//step:-1  create Context
// const UserContext = createContext();

// step:-2 wrap all the child inside a provider
// strp:-3 pass value
// step:-4 consumer ke andr jake value consume kr lo

const ThemeContext = createContext();

function App() {
  // const [user,setUser] = useState({name:"Sushil"})

  const [theme,setTheme] = useState('light')

  return (
    <div>
      <ThemeContext.Provider value={{theme,setTheme}}>
      
      <div id='container' style={{backgroundColor:theme==='light'?"beige":"black"}}>
        <ChildA />
      </div>

      </ThemeContext.Provider>
    </div>
  )
}

export default App
export {ThemeContext}
