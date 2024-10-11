import React from 'react'
import Register from './Components/Register'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Login from './Components/Login'
import Home from './Components/Home'
export default function App() {
  return (
    <div>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
   </Routes>
   </BrowserRouter>
    </div>
  )
}
