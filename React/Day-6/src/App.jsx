import './App.css'
import { Card } from './Card'
import React, { useState } from 'react';
function App() {
  const [value, setValue] = useState('');
  return (
    <>
      <div className="Main w-screen h-1/4 flex flex-col items-center justify-center gap-4 p-20 bg-gradient-to-r from-[#ffdde1] to-[#ee9ca7">
        <h1 className='text-[#F54770] text-[32px] fonT-[23px] font-mono selection:bg-white'>Uthalo Shopping Center</h1>
        <div className='SearchBox'>
          <input
            type="text"
            placeholder="Search Here"
            onInput={e => setValue(e.target.value)}
            className="w-96 h-10 p-4 text-lg "
          />
          {/* <button onClick={getData}>Search</button> */}
        </div >
      </div >
      <div className='CardContainer w-screen h-screen flex flex-row flex-wrap items-center justify-center gap-4 p-10  rounded-t-[50px] overflow-auto bg-white'>
        <Card SearchValue={value} />
      </div>
    </>
  )
}

export default App
