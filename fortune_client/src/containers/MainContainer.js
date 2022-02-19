import React from "react"
import Nav from '../components/Nav'
import Tarot from '../components/Tarot'
import FortuneCookie from '../components/FortuneCookie'
import Home from '../components/Home'
import About from '../components/About'
import { BrowserRouter as Router, Route } from "react-router-dom"
import '../css/page.css'


function MainContainer() {
    return(
        <div>
             <div>
                <h2>Welcome to Fortune Teller!</h2>
            </div>
            <div>
                <h4>Click on a link to find out your fortune!</h4>
            </div>
        <Nav></Nav>
            <Router>
                <div>
                    <Route exact path="/" render={() => <Home />}/>
                    <Route exact path="/about" render={() => <About />}/>
                    <Route exact path="/cookie" render={() => <FortuneCookie />}/>
                    <Route exact path="/tarot" render={() => <Tarot />}/>
                </div>
            </Router>
        </div>
    )
}

export default MainContainer