import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Dashboard from './components/Dashboard'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'


const router = createBrowserRouter(
  [
    {path:"/",
      element: <div>
        <Navbar></Navbar>
        <Home></Home>
      </div>
    },
    {path:"/about",
      element:<div>
      <Navbar></Navbar>
      <About></About>
    </div>
    },
    {path:"/dashboard",
      element:<div>
        <Navbar></Navbar>
        <Dashboard></Dashboard>
      </div>
    }
  ]
)

function App() {
  

  return (
    <div>
      <RouterProvider router={router} /> 
    </div>
  )
}

export default App
