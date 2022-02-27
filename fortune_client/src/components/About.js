import React from 'react'
import '../css/page.css'
import Nav from './Nav'

function About() {
    return(
        <><div className='description'>
            <h2>What is Fortune Teller?</h2><br /><br />
            <p>Fortune teller(v 1.0) is an app to really get into your astrological and
                spiritual side. You can pull a tarot card to see what the universe needs
                to tell you for the day or crack open a fortune cookie to see a fortune!
                <br/><br/>Random fortunes from card or cookie do not exist
                <br/><br/>everything is chosen from the universe itself!</p><br /><br />
            <p>All images are pulled from Shutterstock and information is pulled from the labrinthos.co website!</p>
        </div><div>
                <Nav />
            </div></>
    )
}

export default About