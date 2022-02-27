import React from 'react'
import FortuneCookie from '../components/FortuneCookie'

function CookieContainer() {
    return(
        <div>
            <div className='header'>
                <h2>Fortune Cookie</h2>
            </div>
        <div><FortuneCookie/></div>
        <div><Nav /></div>
        </div>
    )
}

export default CookieContainer