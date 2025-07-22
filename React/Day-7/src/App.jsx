import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  function preventReload(event) {
    event.preventDefault();
    console.log({ email, password });
  }
  return (
    <>
      <form action="">
        <input type="email" name="" id="" placeholder='Enter Email' onChange={(e) => {
          setEmail(e.target.value);
        }} />
        <br />
        <input type="password" name="" id="" placeholder='Enter Password' onChange={(e) => {
          setPassword(e.target.value);
        }} />
        <br />
        <button type="submit" onClick={preventReload}>Login</button>
      </form>
    </>
  )
}

export default App
