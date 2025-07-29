import { useContext } from 'react'
import './App.css'
import Context from './context'
import usercontext from './data'
function App() {

  return (
    <>
      <div>
        <h1>Hello</h1>
        <Web name={"Shivam"} />
      </div>
    </>
  )
}

export default App

function Web(props) {
  return (
    <>
      <h1>Web</h1>
      <Mobile name={props.name} />
    </>
  )
}

function Mobile(props) {
  return (
    <>
      <h1>Mobile</h1>
      <Laptop name={props.name} />
    </>
  )
}

function Laptop(props) {
  return (
    <>
      <h1>Laptop owner name is {props.name}</h1>
      <usercontext.Provider value="Shivam using context api">
        <Context />
      </usercontext.Provider>
    </>
  )
}
