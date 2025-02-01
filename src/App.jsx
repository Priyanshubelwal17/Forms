import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UsernameForm from "./UsernameForm"
import SignupForm from './SignUpForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <UsernameForm /> */}
      <SignupForm />
    </>
  )
}
export default App
