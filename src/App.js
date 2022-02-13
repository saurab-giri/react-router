import React from 'react'
import {Covid, Todo} from './components/organism';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from "react-router-dom";
import Menu from './Menu';

const  App= () => {
  return (
    <>
      <div className="App">
      <h1>Welcome to React Router!</h1>
      <Menu/>
      <Routes>
         <Route path="/covid" element={<Covid/>} />
          <Route path="/todo" element={<Todo/>} />
      </Routes>
    </div>
    </>
  )
}

export default App
