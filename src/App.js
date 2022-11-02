import React from 'react'

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Footer from './Component/Footer'
import Header from './Component/Header'
import Home from './Component/Home'
import Videos from './Component/Videos'
import Upload  from './Component/Upload'
import Login from './Component/Login'
import Signup from './Component/Signup'


const App = () => {
  return (
    <>
    <Router>
      <Header/>
      
      <Routes >
        <Route path='/' element={<Home/>}/>
        <Route path='/videos' element={<Videos/>}/>
        <Route path='/upload' element={<Upload/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      <Footer/>
    </Router>
    
    </>
  )
}

export default App