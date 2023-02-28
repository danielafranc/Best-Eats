import React from 'react';
import ResumePage from '../pages/ResumenPage';
import HomePage from '../pages/HomePage';
import TotalPage from '../pages/TotalPage'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';

const router = () => {
    return (
        <>
            <Router>
                <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="resume" element={<ResumePage/>}/>
                <Route path="totalpage" element={<TotalPage/>}/>
                <Route path='/*' element={<Navigate to="/about" />} />
                </Routes>
            </Router>
        </>
    );
};

export default router;