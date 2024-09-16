import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/shared/Navbar'
import { Button } from './components/ui/button'
import Home from './components/Home'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import Interns from './components/Interns'
import Browse from './components/Browse'
import Profile from './components/Profile'
const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<LogIn/>
  },
  {
    path:'/signup',
    element:<SignUp/>
  },
  {
    path:'/internships',
    element:<Interns/>
  },
  {
    path:'/browse',
    element:<Browse/>
  },
  {
    path:'/profile',
    element:<Profile/>
  }
])

function App() {

  return (
    <div>
      
     <RouterProvider router={appRouter}/>
    </div>
  )
}

export default App
