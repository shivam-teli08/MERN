import './App.css'
import { Card } from './Card'
function App() {
  function getData() {
  }
  return (
    <>
      <div className="Main">
        <h1>Uthalo Shopping Center</h1>
        <div className='SearchBox'>
          <input type="search" placeholder='Search Here' />
          <button onClick={getData()}>Search</button>
        </div>
      </div>
      <div className='CardContainer'>
        <Card />
      </div>
    </>
  )
}

export default App
