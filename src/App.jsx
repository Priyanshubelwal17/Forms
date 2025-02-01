import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UsernameForm from "./UsernameForm"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UsernameForm />
    </>
  )
}
export default App
