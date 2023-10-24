import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Restaurant from './pages/Restaurant';
import Footer from './pages/Footer';
import Fooditems from './pages/Fooditems';
import Delete from './pages/Delete';
import Update from './pages/Update';
import Insert from './pages/Insert';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/zomato/food/dharmshala' element={<Restaurant />}>
          <Route index element={<Fooditems />} />

        </Route>
        <Route path='/delete/fooditems/:id' element={<Delete />} />
        <Route path='/update/fooditems/:id' element={<Update />} />
        <Route path='/insert/fooditems' element={<Insert />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
