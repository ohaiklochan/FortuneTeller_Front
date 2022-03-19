import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchCookies } from '../actions/cookieActions'
import Nav from './Nav'

function FortuneCookie() {

    useEffect(() => {
        console.log('fetching cookies')
        fetchCookies()}, []
    ) 

    const [fortune, setFortune] = useState("");


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
            <p className='fortune'>{fortune}</p><br/>
            <p className='fortune-meaning'>{fortune.meaning}</p><br/><br/>
        </div>
            <div className='cookie-generator'>
                <button className='generate-fortune' onClick={()=>setFortune(Math.random())}>Crack open the cookie!</button>
            </div>
            <br/><br/>
        <div><Nav /></div>
            </div>
    )
  
}


const mapStateToProps = (state) => ( console.log(state) )

export default connect(mapStateToProps, {fetchCookies} )(FortuneCookie)