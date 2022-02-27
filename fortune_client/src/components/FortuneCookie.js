import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { showCookies } from '../actions/cookieActions'
import Nav from './Nav'

function FortuneCookie() {

    const [fortune, setFortune] = useState(1);

    useEffect(() => {
        showCookies()}, []
    ) 

    const randomFortune = (e) => {
        setFortune(Math.floor(Math.random() * fortune.length))
    }

    return (
        <div>
            <div>
            <div className='header'>
                <h2>Fortune Cookie</h2>
            </div>
        <div className='cookie-photo'>
            <img src="https://img.buzzfeed.com/thumbnailer-prod-us-east-1/d75caa51a0a8468fbbb79b2e2e6d9b4e/Final_1.jpg" alt="cookie" /> <br /><br />
        </div>
        </div>
        <div className='fortune'>
            <p className='fortune'>{fortune.text}</p><br/>
            <p className='fortune-meaning'>{fortune.meaning}</p><br/><br/>
        </div>
            <div className='cookie-generator'>
                <button className='generate-fortune' onClick={randomFortune}>Crack open the cookie!</button>
            </div>
            <br/><br/>
        <div><Nav /></div>
            </div>
    )
  
}

const mapStateToProps = (state) => ({ cookie: state.cookie })

export default connect(mapStateToProps, {showCookies} )(FortuneCookie)