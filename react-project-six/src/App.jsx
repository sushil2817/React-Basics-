import { useState } from 'react'
import LogOut from './components/LogOutBtn';
import LoginBtn from './components/LoginBtn';


function App() {


  // true & false
  // ternery Operator
  // logical operator
  // early return

  const [isLoggedIn, setLoggedIn] = useState(true);

  if(!isLoggedIn){
    return <LoginBtn/>
  }



  return (
    <div>
      <h1>Welcome EveryOne to Sushil's web dev course</h1>
      <div>
        {isLoggedIn && <LogOut/>}
      </div>
    </div>
  )

  // return (
  //   <div>
  //     {isLoggedIn?<LogOut/>:<LoginBtn/>}
  //   </div>
  // )


  // if(isLoggedIn){
  //   return <LogOut></LogOut>
  // }else{
  //   return <LoginBtn></LoginBtn>
  // }

 
}

export default App
