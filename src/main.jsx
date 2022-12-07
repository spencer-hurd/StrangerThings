import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import RegisterForm from './components/RegisterForm';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    <RegisterForm />
    </BrowserRouter>
  </React.StrictMode>
)
