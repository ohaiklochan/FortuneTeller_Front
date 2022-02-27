import React from 'react'

function Nav() {
    return(
        <div className='navigation'>
            <button type="button" class="btn btn-primary" onClick={() => window.location = '/'}>Home</button>
            <button type="button" class="btn btn-secondary" onClick={() => window.location = '/about'}>About</button>
            <button type="button" class="btn btn-tertiary" onClick={() => window.location = '/cookie'}>Break a Fortune Cookie</button>
            <button type="button" class="btn btn-quarternary" onClick={() => window.location = '/card'}>Draw A Tarot Card</button>
        </div>
    )
}

export default Nav