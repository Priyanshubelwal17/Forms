import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UsernameForm from "./UsernameForm"
import SignupForm from './SignUpForm'
import BetterSignupForm from './bettersignup'
import ShoppingListForm from './ShoppingListForm'
import ShoppingList from './ShoppingList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ShoppingList />

      {/* <BetterSignupForm /> */}
      {/* <UsernameForm /> */}
      {/* <SignupForm /> */}
    </>
  )
}
export default App
