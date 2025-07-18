import React from 'react'
import './App.css'
function UnderStand(props) {
  let My_birthyear = 2007
  return (
    <>
      <div className='Main'>
        <div className='Name-card'>
          <h1>Hello {props.Name}</h1>
          <h2>BirthYear - {props.BirthYear}</h2>
        </div >
      </div>
    </>
  )
}
export default UnderStand