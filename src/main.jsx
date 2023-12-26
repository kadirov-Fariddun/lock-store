import React from 'react';
import ReactDOM from 'react-dom/client';
// components
import App from './components/app/App.jsx';
import { BrowserRouter } from 'react-router-dom';
//styles file
import './main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/lock-store'>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
