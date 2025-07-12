import React from 'react'
import "./App.css"

const App = () => {
  return (
    <>
      <div className="nav_bar">
        <a href="#"><img src="./src/assets/react.svg" alt="Logo" />React</a>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>
          <li><a href="">Service</a></li>
        </ul>
      </div>
    </>
  )
}

export default App