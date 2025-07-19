import { useState } from 'react'
import './App.css'

function App() {
  let [firstcount, laterCount] = useState(0)
  // let count = 0
  function incre() {
    laterCount((firstcount) => ++firstcount)
  }
  function decre() {
    laterCount((firstcount) => --firstcount)
  }
  return (
    <>
      <div className='main'>
        <div className='container'>
          <h1>Counter app</h1>
          <div className="content">
            <button onClick={incre}>Increase</button>
            <h1>{firstcount}</h1>
            <button onClick={decre}>Decrese</button>
          </div>
        </div>
      </div>
    </>
  )
}
export default App
