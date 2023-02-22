import React, {useState} from 'react'
import './App.css'
import HeadlineCards from './components/HeadlineCards'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Food from './components/Food'
import Category from './components/Category'
import { QuioscoProvider } from './context/QuioscoProvider'
import { Route, Routes, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import MainApp from './pages/MainApp'
import Modal from 'react-modal';
import useQuiosco from './hooks/UseRestaurant'
import { ModalProvider } from './context/ModalContext'




function App() {
  

  return (
    <QuioscoProvider>
      <Navbar/>
      <Hero/>
      <HeadlineCards/>
      <Food/>
      <Category/>
          
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="main" element={<MainApp/>}/>
        <Route path="about" element={<AboutPage/>}/>

        <Route path='/*' element={<Navigate to="/about" />} />
      </Routes>

    </QuioscoProvider>
  )
}

export default App
