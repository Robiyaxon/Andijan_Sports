import React from 'react'
import ReactDOM from 'react-dom/client'

import {BrowserRouter} from 'react-router-dom'
import App from './App'

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,
)
