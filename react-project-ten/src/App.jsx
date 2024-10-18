import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Dashboard from './components/Dashboard'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'
import ParamComp from './components/ParamComp'
import Courses from './components/Courses'
import Mocktest from './components/Mocktest'
import Leetcode from './components/Leetcode'
import Reports from './components/Reports'
import NotFound from './components/NotFound'

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
      </div>,
      children:[
        {
        path:"courses",
        element: <Courses/>
        },
        {
          path:'mock-tests',
          element:<Mocktest/>
        },
        {
          path:'leetcode',
          element:<Leetcode/>
        },
        {
          path:'reports',
          element:<Reports/>
        }
      ]
    },
    {
      path:"/student/:id",
      element:
      <div> 
      <Navbar/>
      <ParamComp/>
      </div>
    },
    {
      path:'*',
      element:<NotFound></NotFound>
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
