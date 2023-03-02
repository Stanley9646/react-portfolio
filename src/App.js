import React from "react";
import About from "./components/About";
import Home from  "./components/Home";
import Contact from "./components/Contact";
import Skills from  "./components/Skills";
import Navbar from "./components/Navbar";
import Background from "./components/Background";

import{ Routes, Route} from 'react-router-dom'
import "./App.css";
function App() {


  return (
    <>
    
    <Background />
    <Navbar/>
       <Home/>
       <About/>
       <Skills/>
    
       <Contact/>
       <Routes>
        <Route path='/' component ={<Home />} />
        <Route path='/about' element ={ <About />} />
        <Route path='/skills' element ={ <Skills />} />
        
        <Route path="/contact" element={ <Contact/>}/>
       </Routes>
       
      

       </>  
  
  );
}

export default App;
