import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter, createBrowserRouter, RouterProvider} from 'react-router-dom';
import { Provider } from 'react-redux'
import './index.css'
import { store } from './store/store'
import HomePage from './pages/HomePage';
import ResumePage from './pages/ResumenPage';
import Pruebas from './components/Pruebas'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider> 
    </BrowserRouter>
     

</React.StrictMode> 
)
