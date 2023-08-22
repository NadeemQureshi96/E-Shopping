import './App.css';
import FApp from './Form/FApp';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React,{Component} from 'react';

import Navbr from './Nav/Navbr';
import Routing from './Routing';
import Footer from './Nav/Footer';


function App() {
  return (
    <div>
        {/* <FApp/> */}
     <Navbr/>
     <Routing/>
     <Footer/>
    
    </div>
  );
}

export default App;