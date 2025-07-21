import './App.css'
import { Card } from './Card'
import React, { useState } from 'react';
function App() {
  const [value, setValue] = useState('');
  return (
    <>
      <div className="Main">
        <h1>Uthalo Shopping Center</h1>
        <div className='SearchBox'>
          <input type="search" placeholder='Search Here' onInput={(e) => {
            setValue(e.target.value);
          }} />
          {/* <button onClick={getData}>Search</button> */}
        </div>
      </div>
      <div className='CardContainer'>
        <Card SearchValue={value} />
      </div>
    </>
  )
}

export default App
