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
import Modal from 'react-modal';
import useQuiosco from './hooks/UseRestaurant'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TotalPage from './pages/TotalPage'
import ResumePage from './pages/ResumenPage'
function App() {
  

  return (
    <QuioscoProvider>
      <Navbar/>
      <Hero/>
      <HeadlineCards/>
      <Food/>
      <Category/>
      <ToastContainer/>
          
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="resume" element={<ResumePage/>}/>
        <Route path="totalpage" element={<TotalPage/>}/>

        <Route path='/*' element={<Navigate to="/about" />} />
      </Routes>

    </QuioscoProvider>
  )
}

export default App
