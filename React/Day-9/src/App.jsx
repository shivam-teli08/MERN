import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Welcome from './Welcome'
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />}>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
