import { useState } from 'react'
import './App.css'

import Login from './components/Login'
import SignUp from './components/SignUp'
import Home from './components/Home'
function App() {
  
  const [isLoggedIn,setIsLoggedIn] = useState(false)

  const [isSignUp, setIsSignUp] = useState(false)

  const handleSignUp = (e) =>{
    setIsSignUp(true)
    console.log("Signup Successfull");
    
  }

  return (
    <>
      <SignUp/>
    </>
  )
}

export default App
