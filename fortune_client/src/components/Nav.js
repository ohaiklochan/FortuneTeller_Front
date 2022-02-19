import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

function Nav() {
    return(
        <div className='navigation'>
            <NavLink to="/" exact><button>Home</button></NavLink>
            <NavLink to="/about" exact>About</NavLink>
            <NavLink to="/tarot" exact>What do you need to hear through the Tarot?</NavLink>
            <NavLink to="/cookie" exact>What is your fortune?</NavLink>
        </div>
    )
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps) (Nav)