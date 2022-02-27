import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Tarot from '../components/Tarot'
import FortuneCookie from '../components/FortuneCookie'
import Home from '../components/Home'
import About from '../components/About'
import '../css/page.css'


function MainContainer() {
    return(

            
            <Router>
                <div>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path='/about' element={<About />}/>
                    <Route path="/cookie" element={<FortuneCookie />}/>
                    <Route path="/card" element={<Tarot />}/>
                </Routes>
                </div>
            </Router>

    )
}

export default MainContainer