import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import 'font-awesome/css/font-awesome.min.css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppProvider } from './context/ProductContext';

ReactDOM.render(
  <BrowserRouter>
  <AppProvider>
    <App />
  </AppProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
reportWebVitals();
