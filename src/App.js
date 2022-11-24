import React, { StrictMode } from 'react'
//import './App.css'

import Home from './project/Home';
import Aboutus from './project/Aboutus';
import Pglog from './project/Pglog';
import Pgsign from './project/Pgsign';
import Pgmain from './project/Pgmain';
import Header from './project/Header'


import{BrowserRouter, BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
function App(){
  return(
    <BrowserRouter>
    <Header/>
    
      
<Routes>

  <Route path="/Home" element={<Home/>}/>
  <Route path="/Pglog" element={<Pglog/>}/>
  <Route path="/Pgsign" element={<Pgsign/>}/>
  <Route path="/Aboutus" element={<Aboutus/>}/>
  <Route path="/Pgmain" element={<Pgmain/>}/>
  
   
</Routes>
</BrowserRouter>
  );
}
export default App;
