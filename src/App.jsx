
import {Route, Routes} from "react-router-dom";
import { QuioscoProvider } from './context/QuioscoProvider'
import './App.css'
import Pasos from './components/Pasos';
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
