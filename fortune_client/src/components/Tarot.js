import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Nav from './Nav'
import { fetchCards } from '../actions/tarotActions'

function Tarot() {

    useEffect(() => {
        fetchCards()}, []
    )

    return (
        <div>
            <div className='header'>
                <h2>Tarot Reader</h2>
            <div className='tarot-generate-button'>
                <button className='generate-tarot' onClick={fetchCards}>Draw a Card!</button>
            </div><br/><br/>
            <div><Nav /></div>
            </div>
        </div>
    )

}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Tarot)