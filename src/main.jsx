import React from 'react';
import ReactDOM from 'react-dom/client';
import { JustinaApp } from './JustinaApp';
import { BrowserRouter } from 'react-router-dom';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <JustinaApp />
    </BrowserRouter>
  </React.StrictMode>
);
