import React, { useContext } from 'react'
import {ThemeContext} from '../App'

function ChildC() {

    const {theme,setTheme} = useContext(ThemeContext)

    function handleClick(){
        if(theme === 'light'){
            setTheme('dark')

        }else{
            setTheme('light')
        }
    }
  return (
    <div>
      <button style={{border:theme==='dark'?"2px solid white":"2px solid blue"}} onClick={handleClick}>Change Theme</button>
    </div>
  )
}

export default ChildC
