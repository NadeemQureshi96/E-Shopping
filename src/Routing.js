import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Product from './Pages/Product';
import FApp from './Form/FApp';
import NotFound from './Pages/NotFound';


const Routing = () => {
  return (
    <div>
       <BrowserRouter>
     <Routes>

      <Route path='/' element={<Home/>}></Route>
     <Route path='/fapp' element={<FApp/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/product' element={<Product/>}></Route>
      <Route path='*'  element={<NotFound/>}></Route>

     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default Routing