import React from 'react'
import Portfolio from '../components/Portfolio'
import Puzzle from '../components/Puzzle'
import Footer from '../components/Footer'
import puzzle from '../../images/puzzle.png'
import LangButtons from '../../LangButtons'

export default function Port(props) {
    return (
        <>
            <LangButtons {...props} />                
            <div className="empty-blue"/>
            <div className="af"/>
            <Portfolio/>
            <div className="bf"/>
            <Footer/>
        </>
    )
}
