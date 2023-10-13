import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import Github,{GithubRepository} from './Components/Github/Github.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<App />}>
      <Route path='' element = {<Home />} />
      <Route path='About' element={<About />} />
      <Route path='Contact' element={<Contact />} />
      <Route path='user/:id' element={<User />} />

      <Route 
      loader={GithubRepository}
      path='Github'
      element={<Github />} 
      />


    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
