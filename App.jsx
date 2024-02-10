import React,{useEffect} from 'react'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Services from './Services'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from './Components/Header'
import Footer from './Components/Footer'
// import App from './App.jsx'


import AOS from "aos";
import "aos/dist/aos.css"



const App = () => {
  useEffect(() => {
    AOS.init({
      offset:100,
      duration:700,
      easing:"ease-in",
      delay:100
    });
  
  });
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/service' element={<Services/>}/>
      </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
