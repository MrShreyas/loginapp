import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import './index.css'
import Login from './components/Login.jsx'
import Home from './components/Home.jsx'

const router = createBrowserRouter([
  {path:'/', element: <App/>},
  {path:'/Login', element: <Login/>},
  {path:'/Home', element: <Home/>},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
