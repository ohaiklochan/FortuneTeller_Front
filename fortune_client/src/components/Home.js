import React from 'react'
import Nav from './Nav'

const Home = () => {

    return (
        <div>
            <div className="header">
                <h1>Welcome to Fortune Teller!</h1>
            </div>
            <div className="subheader">
                <h4>Click on a button to find out your fortune!</h4>
            </div>
            <Nav />
        </div>
    )
}

export default Home