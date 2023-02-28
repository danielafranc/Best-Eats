import React, {useState} from 'react'
import { Link, Navigate, Route, Routes, Router } from "react-router-dom";
import './App.css'
import HeadlineCards from './components/HeadlineCards'
import Pasos from './components/Pasos';
import { QuioscoProvider } from './context/QuioscoProvider'
import HomePage from './pages/HomePage'
import TotalPage from './pages/TotalPage'
import ResumePage from './pages/ResumenPage'
import 'react-toastify/dist/ReactToastify.css';
function App() {
  

  return (
    <QuioscoProvider>
              <Pasos/> 
                <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="resume" element={<ResumePage/>}/>
                <Route path="totalpage" element={<TotalPage/>}/>
                </Routes>
          
      

    </QuioscoProvider>
  )
}

export default App
