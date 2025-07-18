import React from 'react'
import './App.css'

function UnderStand(props) {
  let My_birthyear = 2007
  return (
    <>
      <div>
        <h1>Hello {props.Name}</h1>
        <h2>BirthYear - {props.BirthYear}</h2>
      </div >
    </>
  )
}
let personData = [
  { "id": 1, "Name": "Aarav", "BirthYear": 1995 },
  { "id": 2, "Name": "Priya", "BirthYear": 1993 },
  { "id": 3, "Name": "Rahul", "BirthYear": 1990 },
  { "id": 4, "Name": "Sneha", "BirthYear": 1992 },
  { "id": 5, "Name": "Vikram", "BirthYear": 1988 }
]
function App() {
  return (
    <>
      {/* First way */}
      {/* {
        personData.map((data) => {
          return <UnderStand key={data.id} Name={data.Name} BirthYear={data.BirthYear} />
        })
      } */}
      {/* if we don't want return keyword */}
      {/* {
        personData.map((data) => (
          <UnderStand key={data.id} Name={data.Name} BirthYear={data.BirthYear} />
        ))
      } */}
      {/* Write in single line */}
      {
        personData.map((data) => <UnderStand key={data.id} Name={data.Name} BirthYear={data.BirthYear} />)
      }
    </>
  )
}

export default App
